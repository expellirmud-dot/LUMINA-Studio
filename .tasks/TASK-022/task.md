# TASK-022 — LUMINA Identity Lock Review

## Goal
Review current visual and documentation evidence and lock what must be preserved versus what may be polished in TASK-023 through TASK-028.

## Scope
- Documentation-only review.
- Use existing reports and runtime captures as the baseline evidence.
- Create the identity lock review report for downstream task packets.
- Update handoff/reporting docs after successful completion.

## Risk Level
L1 — documentation and review only.

## Allowed Files
- `.tasks/TASK-022/task.md`
- `.tasks/TASK-022/plan.md`
- `.tasks/TASK-022/status.md`
- `.tasks/TASK-022/reports/identity-lock-review.md`
- `AI_HANDOFF.md`
- `reports/implementation_report.md`

## Forbidden Files
- `app/**`
- `src/**`
- `public/**`
- `tools/**`
- `.runtime-captures/**`
- Any file outside the allowed list

## Acceptance Criteria
- Identity lock review is written at `.tasks/TASK-022/reports/identity-lock-review.md`.
- Review covers hero direction, Warm Premium tone, Quiet Luxury spacing, Human Documentary image language, Thai typography direction, mobile hero balance, Selected Stories sequence, Moments Between rhythm, and explicit non-change rules.
- Report clearly separates:
  - what is locked and must not change
  - what may be polished in TASK-023 through TASK-028
  - what requires GPT-5.5 / owner escalation
- No website code/config/runtime artifacts are modified.
- `AI_HANDOFF.md` and `reports/implementation_report.md` reflect TASK-022 completion.

## Validation Commands
```powershell
git status --short
```

## Stop Conditions
- Working tree is unexpectedly dirty before starting.
- Review would require changing website code during this task.
- Existing evidence is too weak to judge identity lock topics reliably.
- A subjective art-direction decision is required to complete the review.
- Files outside the allowed list are touched.

## Worker Handoff
- Read only the approved governance/context files plus recent evidence artifacts.
- Do not edit website code, config, images, runtime capture files, or tooling.
- Base conclusions on existing captures and reports.
- If evidence is insufficient, stop and recommend capture via `tools/capture-lumina-evidence.mjs` rather than guessing.

## Final Report Requirements
- Files read / evidence used
- Identity lock conclusions by topic
- Locked elements to preserve
- Controlled polish opportunities for TASK-023 through TASK-028
- Escalation triggers
- Validation result
- Scope compliance confirmation
