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
