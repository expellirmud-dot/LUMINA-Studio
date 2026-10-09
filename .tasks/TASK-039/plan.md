# TASK-039 — Checklist and stop condition

Start: 2026-10-09 19:10 ICT (initial investigation); task begun after bootstrap.
- [ ] Baseline reproduction on remote-main candidate: open Mini Album, send Escape; inspect rail keyboard reachability.
- [ ] Implement Escape dismissal when focus remains within album; return focus to toggle.
- [ ] Make open horizontal rail keyboard-focusable only while expanded; visible focus indicator and no visual redesign.
- [ ] Current-candidate tests: npm ci, lint, build, production audit, desktop/mobile Puppeteer, no overflow/console/request failures, photo focus regression.
- [ ] Scoped git diff, commit, push, PR, green checks, verified merge and Vercel deployment.
- [ ] Reconcile task report/handoff, preserve unique ignored QA evidence, cleanup clean worktree.
Stop: release verified with exact SHA and local process terminated; no unrelated file mutation.
