# TASK-025 — Image Sequence Logic

## Goal
Improve the narrative logic of the homepage image ordering, especially in `Selected Stories` and `The Moments Between`, without redesigning the site or turning it into a larger portfolio.

## Scope
- Audit the current configured image sequence first.
- Produce a recommendation packet only in this phase.
- Do not implement image, config, copy, or layout changes in this packet phase.

## Risk Level
L2 — visual sequencing polish with art-direction sensitivity.
Stop if image choices become guesswork or require broader redesign.

## Allowed Files
- `.tasks/TASK-025/task.md`
- `.tasks/TASK-025/plan.md`
- `.tasks/TASK-025/status.md`
- `.tasks/TASK-025/reports/image-sequence-audit.md`

## Forbidden Files
- `src/config/**`
- `app/**`
- `src/config/images.ts`
- `src/config/typography.ts`
- `public/**`
- `tools/**`
- `.runtime-captures/**`
- Any backend, CMS, booking, dashboard, or new asset pipeline file
- Any file outside the allowed list

## Acceptance Criteria
- Audit report documents current sequence, proposed sequence, keep/move/replace decisions, and risk notes.
- Packet clearly defines allowed/forbidden files, stop conditions, and worker boundaries for any later implementation.
- No website code or config is changed in this phase.
- Validation passes:
  - `git status --short`

## Stop Conditions
- The available image pool cannot support a stronger sequence without guessing.
- The audit depends on subjective art-direction judgment that needs GPT-5.5 or owner selection.
- The change would require touching `public/**` or adding assets.
- Files outside approved scope are needed.
- Packet is complete and awaiting GPT-5.5 / owner gate.

## Worker Handoff
- No worker implementation is authorized in this phase.
- Use this packet only to review sequence logic and decide whether implementation may be approved later.
- If implementation is later approved, a separate execution step must report changed files, commands run, exit codes, validation results, scope compliance, forbidden-file status, and remaining risks.
