# Forgewise

**Engineering, forged into understanding.**

Forgewise is an open, multilingual engineering encyclopedia for clear explanations, practical calculations, and reviewed design knowledge. It is meant for curious beginners, students, and practicing engineers.

> Status: scaffold only. No reviewed technical articles, formulas, standards, material values, or literature claims are published yet.

## What is here

- A small static-site build with Markdown/content files and TypeScript.
- English and German scaffold pages.
- Placeholder engineering fields, clearly marked as empty.
- A required article template for future topics.
- A machine-readable formula-block schema and placeholder example.
- Editorial guidance for sources, licensing, standards, material values, and uncertainty.

## Project map

| File or folder | Purpose |
| --- | --- |
| `content/site.json` | UI text and available languages. |
| `content/categories.json` | Field/category placeholders. |
| `content/templates/article-template.md` | Required article structure. |
| `content/formulas/` | Formula schema and placeholder data. |
| `content/en/`, `content/de/` | Language-specific editorial docs. |
| `ROADMAP.md` | Next useful development slices and non-goals. |
| `architecture.md` | Static-site architecture and boundaries. |
| `docs/formula-blocks.md` | Formula block rules. |
| `src/build.ts` | Static HTML generator and scaffold checks. |
| `sources/` | Local, git-ignored source material; see below. |
| `public/styles.css` | Responsive accessible styling. |

## Build locally

```sh
npm install
npm run check
```

Open `dist/index.html` after the build.

`npm run check` builds the site, validates JSON, checks generated links, verifies required scaffold markers, and checks that the article template keeps native `<details><summary>` markup.

## Content rules

- Write original Forgewise text.
- Cite formulas, assumptions, data, standards, and literature.
- Do not add invented values, fake sources, or claimed checks.
- Do not reproduce standard text or large standard tables.
- Mark material properties as guide values unless a cited datasheet or verified standard says otherwise.
- Keep UI text separate from formula data.
- Add languages only when human-maintained content exists.

## Article workflow

1. Copy `content/templates/article-template.md` for a topic.
2. Replace placeholders only with verified, cited content.
3. Keep the section order from the template.
4. Keep the machine-readable JSON block valid.
5. Use native `<details><summary>...</summary></details>` for the engineering deep-dive section.

## Local source material

Books, standards, datasheets, and papers used for checking articles are copyrighted and stay on your machine in `sources/`, which Git ignores:

```text
sources/
  books/         one folder per book and edition
  standards/     standard PDFs, named by designation and edition
  datasheets/    manufacturer datasheets
  papers/        journal and conference papers
  notes/         review notes that quote or excerpt source material
```

Never commit anything from `sources/` (no `git add -f`). Citations go into the article and formula blocks instead.

## Licensing

Editorial content is intended for CC BY-SA 4.0.

Content and software code can have different licenses. No software code license has been chosen in this repository yet.

Foreign text, images, tables, and diagrams may only be reused after license checks and correct attribution.
