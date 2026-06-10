# Impeccable-Inspired Level 3 Layout Discipline

Use these topics when the dashboard needs live iteration and strong layout control.

## 1. Live Layout Review

- Inspect the actual running screen, not just static mockups.
- Refine the component that is breaking readability.
- Keep the layout changes small enough to validate quickly.

## 2. No-Slop Layouts

- Avoid wide decorative zones that do not carry information.
- Keep the main action and current task visible without side scroll.
- Preserve legibility over visual drama.

## 3. Width Discipline

- Treat long prompts, file paths, and logs as layout risks.
- Contain overflow at the component boundary.
- Use wrapping, truncation, or dedicated scroll regions deliberately.

## 4. Reviewable Variants

- Keep responsive states easy to compare.
- Preserve the same information hierarchy across breakpoints.
- Avoid responsive behavior that changes the meaning of the screen.

## 5. Operational Focus

- Dashboards should feel calm and efficient.
- Dense information should still be readable in one pass.
- The layout should help the user decide what to do next, not distract them.

## 6. Plugin Boundary

- Only suggest plugins when they improve the layout or testing workflow.
- Never invoke a plugin automatically unless the task card explicitly allows it.
- Keep plugin use explicit so layout work stays deterministic and reviewable.
