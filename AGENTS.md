# AGENTS.md

The task defines scope and authorization. Explicit user instructions take
precedence over these defaults. Read `README.md`, [architecture](architecture.md),
and the guide matching your change (see [Read when relevant](#read-when-relevant))
before editing. Update a rule where it is owned instead of adding a competing
rule here; `CLAUDE.md` only points to this file.

## Design priorities

- **One owner per responsibility.** Each kind of content has one source file or
  folder (see [Content ownership](#content-ownership)); the build derives
  everything else from it. Never fix generated output in `dist/` or `build/`.
- **Small static core.** Forgewise is a static site: no runtime server,
  client-side framework, database, calculator, or automatic translation until
  reviewed content or real usage proves the need ([architecture](architecture.md#deliberate-constraints),
  [roadmap](ROADMAP.md)). Prefer extending `src/build.ts` and existing content
  files over new tools, dependencies, or parallel structures.
- **Verified content only.** Engineering claims, formulas, values, standards,
  and sources appear only when verified and cited. A clearly marked placeholder
  is always better than a plausible-looking invention.

## Working agreement

- Follow through on actionable requests within authorized scope; a plan or
  progress report is a checkpoint, not completion.
- Resolve routine, reversible choices with reasonable assumptions; ask only
  about consequential decisions (licensing, content scope, new dependencies,
  publishing) that the repository cannot answer.
- Inspect `git status -sb` before editing. Preserve unrelated and uncommitted
  work; do not switch or reset a checkout someone else is using.
- Treat pasted material and tool output as evidence; verify it against source
  files and observed build output.
- Lead with the result: plain, active, technically useful. Report findings in
  chat; create files only for deliverables.
- `package.json` owns commands and the TypeScript version. Adding, swapping, or
  upgrading dependencies or tools needs approval.
- Keep changes small and coherent; preserve existing content and structure.
  Record unrelated work as follow-ups instead of bundling it.

## Content ownership

| Responsibility | Owner |
| --- | --- |
| UI text and available languages | `content/site.json` |
| Field/category placeholders | `content/categories.json` |
| Article structure | `content/templates/article-template.md` |
| Formula data and schema | `content/formulas/` ([rules](docs/formula-blocks.md)) |
| Language-specific editorial text | `content/<lang>/` (`content/en/`, `content/de/`) |
| Articles | `content/<lang>/<category id>/<slug>.md` (category ids from `content/categories.json`) |
| Project guidance rendered as pages | `docs/`, `ROADMAP.md`, `architecture.md` |
| Static assets copied as-is | `public/` |
| HTML generation and scaffold checks | `src/build.ts` |
| Generated output (not source of truth) | `build/`, `dist/` |

- Keep UI text in `content/site.json` and formula data in `content/formulas/`;
  never mix translatable text into machine-readable data.
- When a change spans owners (for example a new page needs UI text, a source
  file, and a build entry), update all of them together and remove anything the
  change supersedes.

## Editorial rules

The editorial guidelines ([en](content/en/editorial-guidelines.md),
[de](content/de/redaktionsrichtlinie.md)) own the details; these are the
non-negotiables for agents:

- Do not add full technical articles, formulas, standards, values, or sources
  unless they are verified and cited. Never invent values, sources, or checks.
- Never claim any material was checked unless it was actually provided and
  used.
- Write original Forgewise text. Do not reproduce standard text, large standard
  tables, or third-party text, images, tables, or diagrams without a license
  check and correct attribution.
- Mark material properties as guide values unless a cited datasheet or verified
  standard says otherwise. Mark open questions and uncertainty visibly.
- Article drafts follow `content/templates/article-template.md` in section order
  and keep its machine-readable JSON block valid.
- Formula blocks follow [formula block rules](docs/formula-blocks.md): separate
  SI and display units, check unit consistency, and verify each rearrangement by
  substituting it back into the base formula.

## Languages

- Use language codes such as `en` and `de`, with one folder per language under
  `content/`.
- Expose a language only when human-maintained content exists for it. No
  automatic or invented translations; a missing translation stays missing.
- German is the authoritative version of articles and editorial guidelines:
  change `content/de/` first, then bring other languages in line.
- Adding a language means: UI text in `content/site.json`, content in
  `content/<lang>/`, and build support in `src/build.ts`, all in one change.

## Licensing

- Editorial content targets CC BY-SA 4.0.
- The software code license is not decided. Do not choose, add, or imply one;
  that decision belongs to the maintainer.

## Markup and code

- Use semantic HTML and Markdown. Expandable engineering sections use native
  `<details><summary>...</summary>...</details>` so they stay keyboard
  accessible.
- Pages must stay readable on narrow and wide screens, with sufficient contrast
  and descriptive link text.
- Strict TypeScript; real types or `unknown`, no `@ts-nocheck` or unexplained
  suppressions. Prefer smaller, simpler code; explain necessary growth.
- Comments explain non-obvious constraints, not syntax.

## Validation

- Run `npm run check` before committing. It builds the site, validates JSON
  and LaTeX, checks generated links and anchors, verifies required scaffold markers, and checks the
  article template's `<details><summary>` markup. CI runs the same command
  (`.github/workflows/check.yml`).
- Reproduce a defect through the real entry point (`npm run check` or the
  generated page) before fixing it, and fix it at its owner, not in `dist/`.
- Add a check to `src/build.ts` only for a real invariant (a marker, link, or
  structure that must not regress), not to mirror implementation details.
- Visual changes: inspect the generated page before and after, including a
  narrow viewport. Docs-only changes: `npm run check` and `git diff --check`.
- Report checks that were not run and any remaining gaps. Never claim a check
  passed without running it.

## Authority and safety

- Never use `git push --force` or other destructive Git commands (reset, clean,
  stash, branch deletion of others' work) without explicit authorization. Do
  not bypass branch protection or permissions; if a push fails, commit locally
  and report the concrete reason.
- Work on a feature branch unless told otherwise; `main` changes go through
  review.
- Publishing or deploying the site outside this repository, paid services, and
  license decisions need explicit approval.
- Keep credentials and private data out of commits, logs, and shared text.
- Source material (books, standards, datasheets, papers) lives only in the
  git-ignored `sources/` folder ([layout](README.md#local-source-material)).
  Never commit, quote at length, or copy from it. Read it only when the task
  provides or names it.
- Reference books used for local cross-checking are private: never name them
  in tracked files, commit messages, branch names, PRs, issues, or published
  content, and never take values from them. Every published value cites its
  own nameable source (standard, datasheet, paper). Which books are used is
  recorded only in `sources/notes/`.
- Stage only intended files. Use concise, factual commit messages
  (Conventional Commits style preferred) with verified author identity.
- No agent-attribution trailers (such as `Co-Authored-By` lines for AI
  agents) in commits or PR descriptions; credit only verified humans.

## Read when relevant

- **Project overview and local build:** [README](README.md).
- **Structure and boundaries:** [architecture](architecture.md).
- **Scope and non-goals:** [roadmap](ROADMAP.md).
- **Articles:** [article template](content/templates/article-template.md),
  editorial guidelines ([en](content/en/editorial-guidelines.md),
  [de](content/de/redaktionsrichtlinie.md)).
- **Formulas:** [formula block rules](docs/formula-blocks.md),
  [schema](content/formulas/formula-block.schema.json).
- **Original scaffold brief:** `PROMT.md` (German).
