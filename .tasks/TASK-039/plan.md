# TASK-039 — Checklist and stop condition

Start: 2026-10-09 19:10 ICT (investigation and bootstrap).
- [x] Reproduce original Escape/keyboard-rail gap on desktop and mobile.
- [x] Implement Escape dismissal and focus return on existing Mini Album.
- [x] Enable keyboard focus and arrow scrolling only while expanded; preserve visual language.
- [x] Verify npm ci, lint, production build, production audit, desktop/mobile keyboard QA, reduced-motion and no image/console/overflow defects.
- [x] Re-run existing Home/Fastwork (4 cases) and Image Focus regression (2 cases).
- [x] Scope git diff; commit, push, PR #9 green check, verified merge and Vercel production deployment.
- [x] Preserve 14 ignored QA evidence files with SHA-256 verification, remove clean implementation worktree.
- [x] Reconcile authoritative report, current AI_HANDOFF and implementation report in follow-up docs PR.
Post-release: remove the clean documentation worktree after its PR merge and Vercel READY; retain dirty original main and TASK-035 worktree.
Stop condition: exact production SHA confirmed and task stack cleared. End time recorded after all external receipts.
