# Dashboard Tokens and Component Rules

Use these topics when building or refining a control dashboard.

## 1. Semantic Color Tokens

- Define colors by meaning, not by component name.
- Keep status colors stable across the app.
- Use distinct tokens for normal, warning, success, and blocked states.

## 2. Surface Tokens

- Use separate tokens for page background, panel background, elevated panel, and border.
- Keep panel contrast subtle but clear.
- Avoid overusing shadows when border and tone already separate layers.

## 3. Status Chips

- Map lifecycle states to one consistent chip style system.
- Keep chip text short and readable.
- Use intent colors for status, not decoration.

## 4. Button Variants

- Keep primary, secondary, destructive, and ghost variants distinct.
- Make disabled states obvious but still readable.
- Preserve focus-visible styling for keyboard users.

## 5. Form Controls

- Keep input height, padding, and border radius consistent.
- Ensure long prompts, paths, and IDs do not break layout.
- Use monospace styling only where the content is command-like.

## 6. Density Scale

- Define a compact density for dashboards with a lot of operational data.
- Use smaller gaps inside panels and larger gaps between sections.
- Keep spacing consistent across cards, tables, and command blocks.

## 7. Focus and State Rules

- Keep hover, focus, active, and disabled states aligned.
- Never remove focus rings from interactive controls.
- Avoid state changes that only rely on color if text can help.
