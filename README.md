# Forgewise

**Engineering, forged into understanding.**

Forgewise is an open, multilingual engineering encyclopedia that turns complex technical ideas into clear explanations, practical calculations, and useful design knowledge. Its articles serve curious beginners, students, and practicing engineers.

## Status

This repository currently contains the technical and editorial scaffold only. Full technical articles, formulas, calculations, standards, values, and literature references are added later after verification.

## Stack

Forgewise uses a small static-site scaffold: Markdown/content files in `content/`, TypeScript in `src/build.ts`, and generated static files in `dist/`. This keeps publishing simple, supports Markdown-based articles, and avoids a framework before the project needs one.

## Structure

- `content/site.json` — translatable UI text and available languages.
- `content/categories.json` — field placeholders shown on the start page.
- `content/templates/article-template.md` — required article structure.
- `content/formulas/` — machine-readable formula block schema and placeholder example.
- `content/en/`, `content/de/` — language-specific editorial documents.
- `docs/formula-blocks.md` — formula block rules.
- `src/build.ts` — static HTML build.
- `public/styles.css` — responsive accessible styling.

## Local start and checks

```sh
npm install
npm run check
```

Open `dist/index.html` after the build.

## Adding a language

1. Add the language code and UI strings to `content/site.json`.
2. Add translated editorial documents only when they exist.
3. Keep formula definitions in `content/formulas/`; do not translate machine-readable formula data.
4. Expose only languages that have usable content.

## Article workflow

Copy `content/templates/article-template.md` for a topic and replace placeholders only with verified, cited content. The engineering section uses native `<details><summary>...</summary></details>`, which is semantic and keyboard-accessible without JavaScript.

## Sources and licensing

Editorial content is intended for CC BY-SA 4.0. Content and software code can have different licenses; no software code license has been chosen in this repository yet.

Foreign text, images, tables, and diagrams may only be reused after license checks and correct attribution. Roloff/Matek was not used for this scaffold. Later technical review with provided material is possible and must be documented when it actually happens.
