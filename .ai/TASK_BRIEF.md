# TASK BRIEF

## Task ID

LUMINA-QA-001

## Assigned Model

Gemma 4 / Gemini Coding

## Objective

Run visual QA for the current LUMINA landing page and compare the active contact variant.

## Required Read First

- AGENTS.md
- GEMINI.md
- .ai/ARCHITECTURE_STATE.md
- .ai/SKILL_PROFILES.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- skills/LUMINA_STARTUP/skill.md
- skills/LUMINA_VISUAL_REVIEW/skill.md
- skills/LUMINA_CONFIG_CHANGE/skill.md

## Allowed Files

- src/config/visual.ts
- reports/visual_audit.md
- reports/implementation_report.md
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
- dependencies

## Exact Changes Required

1. Inspect current activeContactVariant.
2. If current variant is contact-strip, keep it.
3. Run visual QA notes for Contact section:
   - desktop readability
   - mobile readability risk
   - phone number hierarchy
   - Line hierarchy
   - Facebook hierarchy
   - luxury/editorial feeling
4. Do not change app/page.tsx or CSS.
5. Update reports/visual_audit.md with a Contact Variant QA section.
6. Update .ai/TASK_REPORT.md.

## Validation Required

- npm run lint
- npm run build

## Stop Conditions

Stop and report if:

- visual.ts does not expose activeContactVariant
- the contact variant requires editing app/page.tsx
- lint fails
- build fails
- any forbidden file must be edited

## Expected Report

Return:

- current contact variant
- files changed
- validation result
- visual QA findings
- keep/revert recommendation
