# TASK BRIEF

## Task ID

LUMINA-HOMEPAGE-NARRATIVE-POLISH-001

## Assigned Model

Gemini 3.1 Pro

## Objective

Rebalance the existing homepage so photography carries more emotional weight, and reduce repeated explanatory copy without redesigning structure.

## Required Read First

- AGENTS.md
- GEMINI.md
- .ai/SKILL_PROFILES.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- skills/LUMINA_STARTUP/skill.md
- skills/LUMINA_REVIEW_CHECKLIST/skill.md

## Allowed Files

- src/config/content.ts
- app/globals.css
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- .ai/TASK_REPORT.md

## Forbidden Files / Areas

- app/page.tsx
- src/components/HeroSlideshow.tsx
- src/components/RotatingMicrocopy.tsx
- src/config/motion.ts
- backend
- database
- auth
- booking
- CMS
- dashboard
- API routes
- dependencies

## Exact Changes Required

1. Adjust Hero CSS selectors to increase photograph brightness slightly, reduce overlay density, reduce gold corner luminosity, lower focal-grid opacity, and soften the microcopy frame border.
2. Replace copy in src/config/content.ts to reduce repetitive use of words like "people" and "feeling".
3. Preserve the Portfolio sequence, signature image crop, hover labels, and motion timings.
4. Do not redesign or add new effects.
5. Update reports and AI_HANDOFF.md after validation.
6. Update .ai/TASK_REPORT.md.

## Validation Required

- git diff --name-only
- npm run lint
- npm run build
- Desktop and Mobile QA

## Stop Conditions

Stop and report if:
- the Hero becomes too bright, too flat, or the microcopy becomes unreadable
- lint fails
- build fails
- any forbidden file must be edited

## Expected Report

Return:
- Task ID
- Files changed
- Hero rebalance summary
- Copy replacements
- Lint result
- Build result
- Desktop & Mobile QA result
- Portfolio preservation check
- Motion preservation check
- Scope check
- Pre-existing modified file check
- Risk level
- Decision
