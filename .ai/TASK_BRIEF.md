# TASK BRIEF

## Task ID

TEST-001

## Assigned Model

Gemma 4 / Gemini Coding

## Objective

Switch activeContactVariant from editorial-minimal to contact-strip.

## Required Read First

- AGENTS.md
- GEMINI.md
- .ai/SKILL_PROFILES.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- skills/LUMINA_STARTUP/skill.md
- skills/LUMINA_CONFIG_CHANGE/skill.md

## Allowed Files

- src/config/visual.ts
- .ai/TASK_REPORT.md

## Forbidden Files / Areas

- app/page.tsx
- app/layout.tsx
- app/globals.css
- src/config/site.ts
- src/config/images.ts
- src/config/typography.ts
- backend
- database
- auth
- booking
- CMS
- dashboard
- API routes

## Exact Changes Required

1. Open src/config/visual.ts
2. Change activeContactVariant to contact-strip
3. Do not change any UI/component/layout file
4. Write result into .ai/TASK_REPORT.md

## Validation Required

- npm run lint
- npm run build

## Stop Conditions

Stop and report if:

- src/config/visual.ts does not contain activeContactVariant
- changing the variant requires editing app/page.tsx
- lint fails
- build fails
- any file outside Allowed Files must be edited

## Expected Report

Return:

- files changed
- exact change made
- validation result
- scope check
- risks
- recommendation



