---
name: frontend-visual-design
description: Frontend visual design guidance for landing pages, marketing websites, portfolio sites, SaaS interfaces, UI components, motion systems, and visual review. Use when a task involves frontend design, visual refinement, motion design, or design review and the work should prioritize clarity, accessibility, performance, and maintainability.
---

# Frontend Visual Design

## Define The Problem

- Define the user goal.
- Identify the audience.
- State the visual direction.
- List the constraints.

## Choose The Simplest Path

Prefer the lightest solution that meets the brief:

1. HTML
2. CSS
3. React components
4. CSS variables
5. CSS animations
6. Framer Motion
7. Three.js

Move down the ladder only when the simpler option is insufficient.

## Apply Visual Rules

- Avoid generic AI gradients.
- Avoid random motion.
- Avoid unnecessary glassmorphism.
- Avoid decorative effects that compete with content.
- Prefer strong hierarchy.
- Prefer clear spacing.
- Prefer intentional typography.
- Prefer a consistent visual language.
- Prefer purposeful motion.

## Apply Motion Rules

- Make motion support usability.
- Make motion reinforce hierarchy.
- Make motion guide attention.
- Do not let motion distract users.
- Do not let motion reduce readability.
- Do not let motion hurt accessibility.

Always support reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## Review Before Shipping

- Check mobile layouts.
- Check contrast and readability.
- Check spacing and hierarchy.
- Check performance impact.
- Check that the final result still feels intentional rather than overdesigned.

## Dashboard Reference Pack

Use this skill for operational dashboard work when the goal is to make dense UI feel clear, readable, and intentional.

Reference topics:

- [Dashboard shell and panel hierarchy](references/dashboard-shell.md)
- [Motion safety for operational UI](references/motion-safety-rules.md)
- [Visual design principles](references/visual-design-principles.md)

Read the dashboard shell reference when the task includes:

- command center layouts
- task detail panels
- evidence and status sections
- empty, loading, and error states
- dense information without visual noise

## Examples

- [Good dashboard command center](examples/good_dashboard_command_center.md)
- [Bad overdesigned dashboard shell](examples/bad_overdesigned_dashboard.md)

## Validation

- `scripts/validate-links.ps1` checks that all local markdown links in this skill still resolve.

## Level 3 Reference Pack

Use this level when the task needs sharper design judgment, not just basic polish.

Reference topics:

- [Impeccable-inspired design vocabulary](references/level-3-impeccable.md)
- [Dashboard shell and panel hierarchy](references/dashboard-shell.md)
- [Motion safety for operational UI](references/motion-safety-rules.md)

Level 3 means:

- detect slop before it ships
- separate product UI from brand-style decoration
- write designs that are reviewable in source
- prefer live iteration with deterministic output
