# TASK BRIEF QA-002

## Task ID
LUMINA-QA-002

## Objective
Review Hero visual quality.

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
1. Inspect current hero image config.
2. Review hero image crop.
3. Review contrast and text readability.
4. Review first impression / luxury editorial feeling.
5. Check whether hero image duplicates portfolio image in a harmful way.
6. Do not change app/page.tsx or CSS.
7. Update reports/visual_audit.md with Hero QA section.
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
git commit -m "qa-002 hero visual review"
git push

## Expected Report
Return:
- PASS / FAIL
- current hero image
- files changed
- visual QA findings
- keep/change recommendation
- next task
