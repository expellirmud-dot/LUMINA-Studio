---
name: impeccable-project-workflow
description: Guide on how to combine Impeccable Style with existing project-local skills for utility-disbursement-app.
---

# Impeccable Style Project Integration

This guide explains how Impeccable Style operates alongside the existing skills in the `utility-disbursement-app`.

## Required Order of Execution

1. **Read-First Governance**: `read-first-governance` must run first for all repo-aware tasks.
2. **Business Rules**: `utility-disbursement-domain` controls all business rules.
3. **UI Foundations**: The skills `frontend-design`, `frontend-visual-design`, `tailwind-design-system`, `responsive-design`, and `interaction-design` must be used to control core UI development.
4. **Visual Polish**: Impeccable is allowed **only** for UI critique, polish, design vocabulary, and visual refinement after the core UI functional scope is complete and understood.

## Strict Limitations

- **No Business Logic Alterations**: Impeccable must not change fiscal year logic, budget validations, readiness constraints, evidence handling, or tax calculations.
- **No Legacy Frameworks**: Impeccable must not introduce the old `ai_runtime` governance.
- **No Unapproved Dependencies**: Impeccable must not add dependencies unless explicitly approved by the controller.

## Impeccable Commands Reference

To run these commands, you can invoke them via your terminal or agent runner (e.g., `npx impeccable <command>`).

### Create
- **`craft`**: Design it, then build it, all in one flow.
- **`impeccable`**: Get a next-step recommendation, or describe design work in plain English.
- **`shape`**: Think before you build. Produce a design brief through discovery, not guesswork.

### Evaluate
- **`audit`**: Five-dimension technical quality check with P0 to P3 severity.
- **`critique`**: A design review with scoring, persona tests, and automated detection.

### Refine
- **`animate`**: Purposeful motion that conveys state, not decoration.
- **`bolder`**: Push safe designs toward impact without sliding into chaos.
- **`colorize`**: Add strategic color to monochrome interfaces without going garish.
- **`delight`**: Small moments of personality that turn functional into memorable.
- **`layout`**: Fix layout, spacing, and visual rhythm.
- **`overdrive`**: Push an interface past conventional limits. Shaders, physics, 60fps, cinematic transitions.
- **`quieter`**: Tone down designs that are shouting without losing their intent.
- **`typeset`**: Fix typography that feels generic, inconsistent, or accidental.

### Simplify
- **`adapt`**: Make designs work across screens, devices, and contexts without amputating features.
- **`clarify`**: Rewrite confusing UX copy so interfaces explain themselves.
- **`distill`**: Ruthless subtraction. Strip designs to their essence.

### Harden
- **`harden`**: Make interfaces production-ready. Edge cases, i18n, error states, overflow.
- **`onboard`**: Design first-run experiences, empty states, and paths to value.
- **`optimize`**: Diagnose and fix UI performance from LCP to bundle size.
- **`polish`**: The meticulous final pass between good and great.

### System
- **`document`**: Generate a spec-compliant DESIGN.md that captures your visual system so every AI agent stays on-brand.
- **`extract`**: Pull reusable components, tokens, and patterns into the design system.
- **`live`**: Iterate on UI in the browser. Pick an element, drop a comment, get three variants. Accept one and it writes to source.

## Internal Skill Assets

The core Impeccable installation resides in `.\.agents\skills\impeccable\`. As an AI agent, you can read these files to gain deeper context on how to perform specific tasks:

- **Reference Documentation (`.\.agents\skills\impeccable\reference\`)**: Contains detailed instructions for each command (e.g., `audit.md`, `critique.md`, `polish.md`, `craft.md`). Read the corresponding reference file if you need exact step-by-step methodology for a specific command.
- **Scripts (`.\.agents\skills\impeccable\scripts\`)**: Contains utility scripts (e.g., `palette.mjs`, `detect.mjs`, live browser helpers) that support the design review and iteration process.
- **Agents (`.\.agents\skills\impeccable\agents\`)**: Specialized prompts for sub-agents to handle specific tasks.
