# TASK-023 — Thai Typography Experiment

## Goal
Experiment with Thai typography direction without redesigning the website, using only small and reversible changes after a GPT-5.5 art-direction gate.

## Current Gate State
- `TASK-022` approved typography polish as the next controlled work slice.
- GPT-5.5 decision memo is now available and clears implementation under a conservative "Softer Editorial Thai" boundary.
- This approval is explicitly not a redesign approval.
- Implementation is authorized only for the smallest viable typography adjustment that improves Thai rhythm and mobile hero balance.

## Scope
- Typography-only polish for:
  - hero headline
  - section Thai headlines
  - mobile headline line-height / visual heaviness
  - Thai body readability where obviously needed

## Risk Level
L2 by default.
Escalate to GPT-5.5 / stop if the decision materially changes brand character.

## Allowed Files
- `app/page.tsx`
- `app/globals.css`
- `src/config/typography.ts`
- `src/config/visual.ts`
- `src/config/content.ts`
- `AI_HANDOFF.md`
- `reports/implementation_report.md`
- `reports/visual_audit.md`
- `.tasks/TASK-023/task.md`
- `.tasks/TASK-023/plan.md`
- `.tasks/TASK-023/status.md`
- `.tasks/TASK-023/reports/01-gpt55-gate.md`
- `.tasks/TASK-023/reports/final-report.md`

## Forbidden Files
- `public/**`
- `tools/**`
- `.runtime-captures/**`
- backend, database, auth, booking, CMS, dashboard, API, payment, WebGL, Three.js, Canvas related files
- Any file outside the allowed list

## Acceptance Criteria
- GPT-5.5 gate memo is recorded and translated into explicit approval boundaries.
- Typography work stays narrow, conservative, and reversible.
- No image changes.
- No layout redesign.
- No new effects.
- Validation must pass before commit:
  - `npm run build`
  - `npm run lint` if available
  - `$env:LUMINA_CAPTURE_TASK="TASK-023"; node tools\capture-lumina-evidence.mjs`
  - `git status --short`

## Stop Conditions
- Typography choice becomes taste-driven or brand-defining rather than clearly readability-driven.
- Any approved change starts to alter layout structure instead of typography rhythm.
- Build, lint, or visual capture fails.
- Forbidden files are touched.

## Worker Handoff
- GPT-5.5 gate is cleared for a conservative pass only.
- Worker may touch only typography-related files explicitly listed here.
- Worker must report files changed, commands run, exit codes, validation results, scope compliance, and remaining risks.

## Final Report Requirements
- GPT-5.5 memo summary
- Files changed
- Validation commands and results
- Before/after typography findings
- Scope compliance confirmation
- Remaining risks
