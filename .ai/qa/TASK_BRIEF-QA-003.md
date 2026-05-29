# TASK BRIEF QA-003

## Task ID
LUMINA-QA-003

## Objective
Review Portfolio image curation.

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
- src/config/images.ts
- reports/visual_audit.md
- .ai/TASK_REPORT.md

## Forbidden Files / Areas
- app/page.tsx
- app/layout.tsx
- app/globals.css
- src/config/site.ts
- src/config/visual.ts
- src/config/typography.ts
- backend
- database
- auth
- booking
- CMS
- dashboard
- API routes
- dependencies

## Exact Checks Required
1. Inspect current portfolio image config.
2. Review all 4 portfolio images.
3. Check crop consistency.
4. Check emotional flow.
5. Check category balance.
6. Check whether hero/portfolio image reuse weakens brand impact.
7. Do not change app/page.tsx or CSS.
8. Update reports/visual_audit.md with Portfolio QA section.
9. Update .ai/TASK_REPORT.md.

## Validation Required
- npm run lint
- npm run build

## Post-Pass Actions
Run:
git status --short
git diff --stat

If only expected files changed:
git add .
git commit -m "qa-003 portfolio curation review"
git push

## Expected Report
Return:
- PASS / FAIL
- current portfolio images
- files changed
- visual QA findings
- keep/change recommendation
- next task
