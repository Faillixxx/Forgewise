declare function require(name: string): any;
declare const process: { argv: string[]; exitCode?: number };
declare const __dirname: string;

const fs = require("fs");
const path = require("path");
const katex = require("katex");

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

function math(tex: string, displayMode: boolean): string {
  // MathML output needs no KaTeX stylesheet, fonts, or client script; invalid LaTeX fails the build.
  const html = katex.renderToString(tex, { displayMode, output: "mathml", throwOnError: true });
  return displayMode ? `<div class="math-display">${html}</div>` : html;
}

function slug(value: string): string {
  const umlauts: Record<string, string> = { ä: "ae", ö: "oe", ü: "ue", ß: "ss" };
  return value
    .toLowerCase()
    .replace(/[äöüß]/g, (char) => umlauts[char] ?? char)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cells(row: string): string[] {
  return row.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim());
}

const tableSeparator = /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/;

function markdown(markdownText: string): string {
  const lines = markdownText.split(/\r?\n/);
  const ids = new Set<string>();
  let html = "";
  let list: "ul" | "ol" | undefined;
  const closeList = (): void => {
    if (list) html += `</${list}>`;
    list = undefined;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] ?? "";
    const trimmed = line.trim();
    if (line.startsWith("```")) {
      closeList();
      const end = lines.findIndex((next, j) => j > i && next.startsWith("```"));
      if (end < 0) throw new Error("Unclosed code block in markdown");
      html += `<pre><code>${lines.slice(i + 1, end).map((code) => `${escapeHtml(code)}\n`).join("")}</code></pre>`;
      i = end;
      continue;
    }
    if (trimmed.startsWith("$$")) {
      closeList();
      const single = trimmed.match(/^\$\$(.+)\$\$$/);
      if (single?.[1]) {
        html += math(single[1], true);
        continue;
      }
      const end = lines.findIndex((next, j) => j > i && next.trim() === "$$");
      if (trimmed !== "$$" || end < 0) throw new Error(`Display math must be $$...$$ on one line or fenced by $$ lines: ${line}`);
      html += math(lines.slice(i + 1, end).join("\n"), true);
      i = end;
      continue;
    }
    if (!trimmed) {
      closeList();
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.*?)(?:\s+\{#([a-z0-9-]+)\})?$/);
    if (heading?.[1] && heading[2]) {
      closeList();
      // Explicit {#id} anchors survive reworded headings; generated ids follow the heading text.
      let id = heading[3] ?? slug(heading[2]);
      if (ids.has(id)) {
        if (heading[3]) throw new Error(`Duplicate heading anchor #${id}`);
        let n = 2;
        while (ids.has(`${id}-${n}`)) n++;
        id = `${id}-${n}`;
      }
      ids.add(id);
      const level = heading[1].length;
      html += `<h${level} id="${id}">${inline(heading[2])}</h${level}>`;
      continue;
    }
    if (["<details>", "</details>"].includes(trimmed) || trimmed.startsWith("<summary>")) {
      closeList();
      html += trimmed;
      continue;
    }
    if (trimmed.startsWith("|") && tableSeparator.test(lines[i + 1] ?? "")) {
      closeList();
      const head = cells(line).map((cell) => `<th scope="col">${inline(cell)}</th>`).join("");
      let rows = "";
      for (i += 2; (lines[i] ?? "").trim().startsWith("|"); i++) {
        rows += `<tr>${cells(lines[i] ?? "").map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`;
      }
      i--;
      html += `<div class="table-scroll"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
      continue;
    }
    const item = line.match(/^(?:(-)|\d+\.)\s+(.*)$/);
    if (item?.[2] !== undefined) {
      const type = item[1] ? "ul" : "ol";
      if (list !== type) {
        closeList();
        html += `<${type}>`;
        list = type;
      }
      html += `<li>${inline(item[2])}</li>`;
      continue;
    }
    closeList();
    html += `<p>${inline(line)}</p>`;
  }
  closeList();
  return html;
}

function inline(value: string): string {
  // Code and math are split out first so their contents are never parsed as bold or links.
  return value
    .split(/(`[^`]+`|\$[^$\n]+\$)/)
    .map((part, index) => {
      if (index % 2 === 0) return prose(part);
      return part.startsWith("`") ? `<code>${escapeHtml(part.slice(1, -1))}</code>` : math(part.slice(1, -1), false);
    })
    .join("");
}

function prose(value: string): string {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
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
  <a href="${link(lang, "roadmap.html")}">${escapeHtml(ui.roadmap)}</a>
  <a href="${link(lang, "architecture.html")}">${escapeHtml(ui.architecture)}</a>
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
      if (!href || /^[a-z][a-z0-9+.-]*:/i.test(href)) continue;
      const [target = "", fragment] = href.split("#");
      const targetFile = target ? path.resolve(path.dirname(file), target) : file;
      if (!fs.existsSync(targetFile)) throw new Error(`${file} links missing file ${href}`);
      if (fragment && !fs.readFileSync(targetFile, "utf8").includes(`id="${fragment}"`)) throw new Error(`${file} links missing anchor ${href}`);
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
  write("roadmap.html", page("en", site, "Roadmap", markdown(fs.readFileSync(path.join(root, "ROADMAP.md"), "utf8"))));
  write("de/roadmap.html", page("de", site, "Roadmap", markdown(fs.readFileSync(path.join(root, "ROADMAP.md"), "utf8"))));
  write("architecture.html", page("en", site, "Architecture", markdown(fs.readFileSync(path.join(root, "architecture.md"), "utf8"))));
  write("de/architecture.html", page("de", site, "Architektur", markdown(fs.readFileSync(path.join(root, "architecture.md"), "utf8"))));

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
