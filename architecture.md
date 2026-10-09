# Forgewise architecture

Forgewise is a static content site. The current architecture keeps content, UI text, formula data, and generated output separate.

## Flow

```text
content/*.json + content/**/*.md + docs/*.md + public/styles.css
        |
        v
src/build.ts
        |
        v
dist/*.html + dist/styles.css
```

## Boundaries

- `content/site.json` contains translatable UI text and available language codes.
- `content/categories.json` contains field/category placeholders, not article claims.
- `content/templates/article-template.md` is the required article shape.
- `content/formulas/` contains machine-readable formula data and schema placeholders.
- `content/en/` and `content/de/` contain language-specific editorial docs.
- Articles live in `content/<lang>/<category id>/<slug>.md` and are built to `<lang>/<category id>/<slug>.html`; the language index lists them under their category. The first `# ` heading is the article title.
- `docs/` contains project guidance that may also be rendered into static pages.
- `public/` contains static assets copied as-is.
- `src/build.ts` turns the content into static HTML and runs scaffold checks.
- `dist/` is generated output and is not the source of truth.

## Checks

`npm run check` runs the TypeScript build, generates the site, validates JSON, verifies internal generated links and anchors, checks required scaffold markers, and ensures the article template keeps native `<details><summary>` markup. Invalid LaTeX fails the build.

## Markdown rendering

`src/build.ts` contains a small Markdown renderer for the syntax the editorial guidelines use: headings with generated or fixed `{#id}` anchors, bullet and numbered lists, pipe tables, bold, links, inline code, code blocks, and native `<details><summary>`. LaTeX math (`$...$`, `$$...$$`) is rendered at build time with KaTeX into MathML, so pages need no math stylesheet, fonts, or client-side script.

## Deliberate constraints

- No runtime server.
- No client-side framework.
- No database.
- No formula calculator yet.
- No automatic translation.

Add these only when reviewed content or real usage proves the need.
