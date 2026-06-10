# Impeccable-Inspired Level 3 System Discipline

Use these topics when the dashboard needs more than a token set and component list.

## 1. Semantic Systems

- Map state to meaning, not to arbitrary palette names.
- Keep the same status color and token semantics across all panels.
- Treat color, radius, spacing, and shadow as system decisions, not one-off styling.

## 2. Portable Design Output

- Keep the design system describable in source.
- Prefer CSS-first or token-first structures that can travel across harnesses.
- Avoid hidden one-off CSS that cannot be read back from the codebase.

## 3. Deterministic Variants

- Keep component variants explicit and predictable.
- Avoid ad hoc class combinations that create inconsistent states.
- Make the button, card, input, and chip patterns easy to audit.

## 4. Source Reviewability

- Changes should show up cleanly in diffs.
- Keep utility composition understandable enough to review.
- Avoid styling that is only obvious in rendered pixels and not in source.

## 5. Slop Resistance

- Favor restrained surfaces over novelty effects.
- Keep panel and control styling coherent across the dashboard.
- Do not let system tokens drift into a random palette of convenience.

## 6. Design-to-Code Discipline

- Build styles that match the app's real information density.
- Make the system work for commands, evidence, and status outputs.
- Ensure the design language still reads as one product when the dashboard grows.

## 7. Plugin Boundary

- Only suggest plugins when needed for the task.
- Never invoke a plugin automatically unless the task card explicitly allows it.
- Treat plugin usage as an approved tool choice, not an implicit skill action.
