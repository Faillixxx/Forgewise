declare function require(name: string): any;
declare const process: { argv: string[]; exitCode?: number };
declare const __dirname: string;

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const content = path.join(root, "content");

type Lang = "en" | "de";
type Ui = Record<string, string>;
type Site = { languages: Lang[]; ui: Record<Lang, Ui> };
type Category = { id: string; en: string; de: string };

function readJson<T>(file: string): T {
  return JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
}

function escapeHtml(value: string): string {
  const chars: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (char) => chars[char] ?? char);
}

function markdown(markdownText: string): string {
  const lines = markdownText.split(/\r?\n/);
  let html = "";
  let inList = false;
  let inCode = false;

  for (const line of lines) {
    if (line.startsWith("```")) {
      html += inCode ? "</code></pre>" : "<pre><code>";
      inCode = !inCode;
      continue;
    }
    if (inCode) {
      html += `${escapeHtml(line)}\n`;
      continue;
    }
    if (!line.trim()) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading?.[1] && heading[2]) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      const level = heading[1].length;
      html += `<h${level}>${inline(heading[2])}</h${level}>`;
      continue;
    }
    if (["<details>", "</details>"].includes(line.trim()) || line.trim().startsWith("<summary>")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += line.trim();
      continue;
    }
    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${inline(line.slice(2))}</li>`;
      continue;
    }
    html += `<p>${inline(line)}</p>`;
  }
  if (inList) html += "</ul>";
  if (inCode) throw new Error("Unclosed code block in markdown");
  return html;
}

function inline(value: string): string {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function page(lang: Lang, site: Site, title: string, body: string): string {
  const ui = site.ui[lang];
  const base = lang === "en" ? "" : "../";
  const alternates = site.languages
    .map((code) => `<a href="${code === "en" ? `${base}index.html` : `${base}${code}/index.html`}">${site.ui[code].langName}</a>`)
    .join(" ");
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} · Forgewise</title>
  <link rel="stylesheet" href="${base}styles.css">
</head>
<body>
  <header>
    <nav aria-label="${escapeHtml(ui.language)}">${alternates}</nav>
    <p class="claim">${escapeHtml(ui.claim)}</p>
  </header>
  <main>${body}</main>
</body>
</html>`;
}

function link(_lang: Lang, file: string): string {
  return file;
}

function index(lang: Lang, site: Site, categories: Category[]): string {
  const ui = site.ui[lang];
  const items = categories
    .map((category) => `<li><strong>${escapeHtml(category[lang])}</strong><span>${escapeHtml(ui.noArticles)}</span></li>`)
    .join("");
  const body = `<section class="hero">
  <h1>${escapeHtml(ui.title)}</h1>
  <p>${escapeHtml(ui.description)}</p>
  <p>${escapeHtml(ui.openProject)}</p>
  <p class="notice">${escapeHtml(ui.license)}</p>
  <p class="placeholder">${escapeHtml(ui.placeholder)}</p>
</section>
<section>
  <h2>${escapeHtml(ui.fields)}</h2>
  <ul class="categories">${items}</ul>
</section>
<section class="links" aria-label="Project documents">
  <a href="${link(lang, "article-template.html")}">${escapeHtml(ui.template)}</a>
  <a href="${link(lang, lang === "en" ? "editorial-guidelines.html" : "redaktionsrichtlinie.html")}">${escapeHtml(ui.guidelines)}</a>
  <a href="${link(lang, "formula-blocks.html")}">${escapeHtml(ui.formulas)}</a>
</section>`;
  return page(lang, site, ui.title, body);
}

function write(file: string, html: string): void {
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function copyAssets(): void {
  fs.copyFileSync(path.join(root, "public", "styles.css"), path.join(dist, "styles.css"));
}

function files(dir: string, suffix: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry: any) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? files(file, suffix) : file.endsWith(suffix) ? [file] : [];
  });
}

function validateJson(): void {
  for (const file of files(content, ".json")) JSON.parse(fs.readFileSync(file, "utf8"));
  const template = fs.readFileSync(path.join(content, "templates", "article-template.md"), "utf8");
  for (const match of template.matchAll(/```json\n([\s\S]*?)\n```/g)) JSON.parse(match[1]);
}

function validateLinks(): void {
  const hrefPattern = /href="([^"]+)"/g;
  for (const file of files(dist, ".html")) {
    const html = fs.readFileSync(file, "utf8");
    for (const [, href] of html.matchAll(hrefPattern)) {
      if (!href || href.includes("://") || href.startsWith("#")) continue;
      if (!fs.existsSync(path.resolve(path.dirname(file), href))) throw new Error(`${file} links missing file ${href}`);
    }
  }
}

function main(): void {
  const site = readJson<Site>("content/site.json");
  const categories = readJson<Category[]>("content/categories.json");
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });
  copyAssets();

  for (const lang of site.languages) {
    write(lang === "en" ? "index.html" : `${lang}/index.html`, index(lang, site, categories));
  }

  const template = markdown(fs.readFileSync(path.join(content, "templates", "article-template.md"), "utf8"));
  write("article-template.html", page("en", site, "Article template", template));
  write("de/article-template.html", page("de", site, "Artikelvorlage", template));
  write("editorial-guidelines.html", page("en", site, "Editorial guidelines", markdown(fs.readFileSync(path.join(content, "en", "editorial-guidelines.md"), "utf8"))));
  write("de/redaktionsrichtlinie.html", page("de", site, "Redaktionsrichtlinie", markdown(fs.readFileSync(path.join(content, "de", "redaktionsrichtlinie.md"), "utf8"))));
  write("formula-blocks.html", page("en", site, "Formula blocks", markdown(fs.readFileSync(path.join(root, "docs", "formula-blocks.md"), "utf8"))));
  write("de/formula-blocks.html", page("de", site, "Formel-Bausteine", markdown(fs.readFileSync(path.join(root, "docs", "formula-blocks.md"), "utf8"))));

  if (process.argv.includes("--check")) {
    validateJson();
    validateLinks();
    const indexHtml = fs.readFileSync(path.join(dist, "index.html"), "utf8");
    if (!indexHtml.includes("CC BY-SA 4.0") || !indexHtml.includes("No articles yet")) {
      throw new Error("Generated index misses required scaffold markers");
    }
    const templateHtml = fs.readFileSync(path.join(dist, "article-template.html"), "utf8");
    if (!templateHtml.includes("<details>") || !templateHtml.includes("<summary>")) {
      throw new Error("Article template misses semantic expandable section");
    }
  }
}

main();
