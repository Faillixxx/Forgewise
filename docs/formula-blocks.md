# Formula blocks

Formula blocks are machine-readable JSON files in `content/formulas/`.

- Keep formula definitions separate from UI text so a future GUI can reuse them.
- Store SI units and display units separately.
- Check every formula for unit consistency before it leaves placeholder status.
- Check each rearrangement by substituting it back into the base formula.
- Do not add invented formulas, values, standards, or sources.
- This scaffold does not implement a calculator or interactive GUI.
