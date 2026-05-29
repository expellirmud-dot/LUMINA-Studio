# TASK BRIEF QA-005

## Task ID
LUMINA-QA-005

## Objective
Review Mobile experience.

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

## Allowed Files
- reports/visual_audit.md
- .ai/TASK_REPORT.md

## Forbidden Files / Areas
- app/page.tsx
- app/layout.tsx
- app/globals.css
- src/config/site.ts
- src/config/images.ts
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
1. Review Hero mobile risk.
2. Review Contact mobile risk.
3. Review Portfolio mobile risk.
4. Review About/Profile mobile risk.
5. Review Footer mobile risk.
6. Check wrapping, spacing, and touch usability.
7. Do not change app/page.tsx or CSS.
8. Update reports/visual_audit.md with Mobile QA section.
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
git commit -m "qa-005 mobile experience review"
git push

## Expected Report
Return:
- PASS / FAIL
- files changed
- mobile QA findings
- keep/change recommendation
- next task
