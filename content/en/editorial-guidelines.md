# Editorial guidelines

Forgewise is an open, multilingual engineering encyclopedia. These guidelines define how articles are structured, written, sourced, and linked. They apply to all articles under `content/<lang>/`. The German version (`content/de/redaktionsrichtlinie.md`) is authoritative.

## Target levels

- Lay readers: intuitive explanation without hidden prerequisites.
- Students: traceable formulas, symbols, units, and assumptions.
- Practicing engineers: derivations, limits, design rules, and open uncertainties.

## Article structure

- Each article covers one well-defined topic, for example a machine element, a material, a calculation method, or a manufacturing process.
- Use `content/templates/article-template.md` without reordering sections. The fixed structure lets readers find their way in every article.
- "Simply explained" opens with an overview: what is it and what is it used for? Two to four sentences.
- "The formulas" covers the working principle, terms, and base formulas; "For engineers" covers derivations, verifications, design steps, and validity limits.
- "Design rules" names the relevant standards and codes and cited property values.
- "Exercise" contains at least one fully worked example (see Worked examples).
- "Sources and further reading" also lists related articles.
- If a section does not fit the topic, keep its heading and mark it "Not applicable to this topic" with a short reason. Sections 7 to 9 are never omitted.
- An article explains each term where it first appears or links to the article that explains it.

## Quantities, units, and numbers

- Use SI units. Common derived units (N/mm², kW, min⁻¹, bar) are allowed; bar only with a note on gauge or absolute pressure.
- Symbols follow ISO 80000 (DIN EN ISO 80000); DIN 1304 applies only as a supplement where ISO 80000 is silent. Where a field has its own established symbols (e.g. strength of materials, gear design), use them and explain them once in the article.
- Put a non-breaking space between number and unit: `12 mm`, `210 GPa`. Exception: degrees for angles (`45°`).
- English texts use a decimal point; German texts use a decimal comma. Group thousands with a thin space (`10 000 N`), never with a comma or period.
- Round results sensibly. Never give more digits than the input data supports.
- Symbols are italic; units, word subscripts (`F_\mathrm{zul}`), and mathematical constants such as `\mathrm{e}` are upright.

## Formulas

- Write formulas in LaTeX notation (`$...$` inline, `$$...$$` displayed).
- Prefer quantity equations, which hold in any coherent unit system. Numerical-value equations (e.g. `P` in kW, `n` in min⁻¹) are allowed only where common in practice and must be labeled as such, with all units.
- Every displayed formula has a legend below it: each symbol with meaning and unit.
- Important formulas get an equation number so examples and other articles can refer to them.
- Validity limits go directly with the formula (e.g. "valid only in the elastic range").
- Every formula in the article also appears in the machine-readable JSON block, where the rules from `docs/formula-blocks.md` apply (unit consistency, rearrangements checked by substitution, SI and display units kept separate).

## Standards and codes

- Name standards only when verified, always with full designation and edition, e.g. `DIN EN 10025-2:2019-10`.
- Mark withdrawn or superseded standards as such and name their successor. Older designations (e.g. legacy material names) may appear in parentheses for orientation.
- Never copy or redraw standard text, tables, or figures; they are protected by copyright. Explain content in your own words and point to the standard for binding values.
- Individual values may be quoted with their source.

## Property values, tables, and sources

- Every numerical value not derived in the article needs a source: standard, manufacturer datasheet, textbook, or journal article, with page or table reference.
- Do not use unverified sources, invented values, or claimed checks.
- Every material or component value comes with its conditions: temperature, product thickness, heat treatment condition, test direction, load case.
- State whether a value is a minimum, characteristic, or typical value. Typical and guide values are never presented as design values; point to current datasheets or the standard for design decisions.
- Build tables from original data or cited individual values. Never copy whole tables from textbooks or standards.
- Where sources disagree, give the values side by side instead of silently picking one.
- Mark open questions and technical uncertainty directly in the article and in the "Please review" section.

## Worked examples

- Every example follows Given → Find → Solution → Result.
- Input values are marked as assumptions of the example; material and component values in it need a source.
- Every intermediate result is shown with its unit so readers can retrace each step.
- Formulas used are referenced by equation number.
- Verifications end with a clear statement, e.g. utilization or safety factor against the permissible value, and "Verification passed" or "Verification failed".
- Recalculate the numbers before publishing, preferably with a script.

## Safety and responsibility

- Forgewise is a reference work and replaces neither applicable standards nor review by a qualified person.
- Articles on safety-relevant topics (e.g. pressure vessels, lifting equipment, load-bearing structures, welded joints under load) carry a short notice saying so and name the governing codes.
- Simplified methods are named as such, with a note on when the full method is required.

## Images and drawings

- Create graphics yourself as SVG. Scans or redrawings from books and standards are not allowed.
- Technical drawings follow basic drawing conventions (ISO 128 / DIN EN ISO 128 for line types and sections, ISO 129-1 / DIN EN ISO 129-1 for dimensioning; withdrawn DIN 406 is no longer used) as far as sensible for a schematic sketch.
- Diagrams have labeled axes with symbol and unit, e.g. `σ in N/mm²`.
- Every figure has a caption and alternative text.

## Originality

- Write original explanations and derivations for Forgewise.
- Forgewise is guided by established engineering references but never copies their text, tables, images, detailed structure, or worked examples.
- A textbook used as a source is cited for individual statements or values; everything else is written in your own words.
- Do not copy third-party text, images, tables, or diagrams unless the license is checked and attribution is correct.
- Roloff/Matek was not used for this scaffold. Later technical review with provided material can be documented when it actually happens.

## Language and style

- Factual, concise, present tense. Do not address readers directly except in instructions.
- Use technical terms consistently and explain them in the article's glossary section.
- List materials, manufacturers, or processes alphabetically unless the order carries technical meaning (e.g. process sequence, increasing strength).
- No manufacturer advertising. Trade names only where needed for understanding.

## Links and cross-references

- Internal links are relative and point to the generated page so they also work when `dist/` is opened locally.
- Write links as `[text](page.html)` and section links with an anchor: `[surface pressure](page.html#surface-pressure)`.
- Headings get an anchor generated from their text. Sections that are linked often get a fixed anchor: `## Surface pressure {#surface-pressure}`. Keep existing anchors when restructuring so links survive a reworded heading.
- Public pages never link to internal notes.
- Run `npm run check` before submitting; among other things it checks every internal link and anchor in the generated pages and the LaTeX syntax.

## Internal documents

- Internal notes and work in progress live under `docs/internal/`. These pages are never published, added to navigation, or linked from public articles.

## Translations

- German articles are the authoritative version. Content changes go into the German original first; translations follow, never the other way round.
- Translations are made by people from the German original; no automatic translation.
- A language is shown only when maintained content exists in it. Missing translations are never invented.
- Terms with a fixed translation (e.g. Passfeder → parallel key) are maintained in `content/i18n/glossary.<lang>.json` before a translation starts.

## Licensing

Editorial content is intended for CC BY-SA 4.0. Software code may use a different license; no code license has been chosen in this repository yet.
