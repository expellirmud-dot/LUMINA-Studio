# TASK-031 Plan — Fastwork Portfolio Landing Page

## Timeline

1. **T0 — Context & State**
   - Read governance, current handoff, config architecture, and visual reports.
   - Confirm clean/isolated working state.

2. **T1 — Curate & Specify**
   - Visually inspect the proposed 10-image shortlist and existing portfolio evidence.
   - Lock final 8–10 image sequence and crop strategy.
   - Lock visible copy and section order.
   - Run a pre-implementation contact-leak check.

3. **T2 — Implement `/fastwork`**
   - Create the isolated route.
   - Reuse LUMINA typography/visual language and existing config patterns.
   - Keep the Home page and frozen Home Hero unchanged.
   - Include service scope, equipment, delivery, and Fastwork-only closing notice.

4. **T3 — Validate**
   - Run `npm run build`.
   - Run `npm run lint`.
   - Perform desktop/mobile visual QA.
   - Verify images, crop, responsive behavior, no overflow, and no external-contact leakage.
   - Recheck Home for regression.

5. **T4 — Owner Preview Gate**
   - Produce desktop/mobile screenshots and implementation report.
   - Report final image sequence, files changed, validation results, and contact-leak audit.
   - Stop with `READY_FOR_OWNER_PREVIEW`.
   - No commit/push/deploy by Worker.

6. **T5 — Post-Approval Only**
   - After explicit Owner approval, freeze candidate and proceed through Controller review.
   - Commit/push/deploy only when separately authorized.
   - Verify the final production `/fastwork` route after deployment.

## Working Principle

`READ -> CURATE -> IMPLEMENT -> VALIDATE -> OWNER PREVIEW -> APPROVE -> FREEZE/COMMIT/DEPLOY`

The earning/revenue path must not be slowed by unrelated redesign or infrastructure work.
