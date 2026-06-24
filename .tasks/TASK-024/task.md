# TASK-024 — Mobile Hero Balance

## Goal
Tune the mobile hero so text and photograph breathe together better without redesigning the hero or altering its core concept.

## Scope
- Mobile-only hero balance polish.
- Adjust only typography-adjacent spacing, overlay weight, and first-screen text/image balance.
- Use `TASK-023` mobile evidence as the immediate before-state baseline.

## Risk Level
L2 — narrow responsive visual polish.
Stop if the work starts to become structural hero redesign.

## Allowed Files
- `app/globals.css`
- `src/config/typography.ts`
- `.tasks/TASK-024/task.md`
- `.tasks/TASK-024/plan.md`
- `.tasks/TASK-024/status.md`
- `.tasks/TASK-024/reports/final-report.md`
- `AI_HANDOFF.md`
- `reports/implementation_report.md`
- `reports/visual_audit.md`

## Forbidden Files
- `app/page.tsx`
- `src/config/content.ts`
- `src/config/images.ts`
- `public/**`
- `tools/**`
- `.runtime-captures/**`
- Any image asset or image ordering file
- Any file outside the allowed list

## Acceptance Criteria
- Mobile hero feels less crowded and breathes better with the photograph.
- Photograph remains the emotional lead.
- No hero redesign occurs.
- No new animation/effects are added.
- Desktop feel remains effectively unchanged.
- Validation passes:
  - `npm run build`
  - `npm run lint`
  - `$env:LUMINA_CAPTURE_TASK="TASK-024"; $env:LUMINA_CAPTURE_URL="http://127.0.0.1:3001"; node tools\capture-lumina-evidence.mjs`
  - `git status --short`

## Stop Conditions
- Mobile changes begin to alter hero concept or structure.
- Fix would require changing images, copy, or layout architecture.
- Build, lint, or visual capture fails.
- Files outside approved scope are needed.
- The hero starts feeling more designed than invisible.

## Worker Handoff
- Implement the smallest viable mobile-only hero balance fix.
- Preserve current hero image and content.
- Report exact CSS/token changes, before/after observations, validation results, and remaining risks.
