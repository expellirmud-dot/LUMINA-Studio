# TASK BRIEF QA-004

## Task ID
LUMINA-QA-004

## Objective
Review Typography system.

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
- src/config/typography.ts
- reports/visual_audit.md
- .ai/TASK_REPORT.md

## Forbidden Files / Areas
- app/page.tsx
- app/layout.tsx
- app/globals.css
- src/config/site.ts
- src/config/images.ts
- src/config/visual.ts
- backend
- database
- auth
- booking
- CMS
- dashboard
- API routes
- dependencies

## Exact Checks Required
1. Inspect current typography config.
2. Review heading readability.
3. Review body readability.
4. Review contact typography.
5. Review mobile text wrapping risk.
6. Do not change app/page.tsx or CSS.
7. Update reports/visual_audit.md with Typography QA section.
8. Update .ai/TASK_REPORT.md.

## Validation Required
- npm run lint
- npm run build

## Post-Pass Actions
Run:
git status --short
git diff --stat

If only expected files changed:
git add .
git commit -m "qa-004 typography system review"
git push

## Expected Report
Return:
- PASS / FAIL
- current typography config
- files changed
- visual QA findings
- keep/change recommendation
- next task
