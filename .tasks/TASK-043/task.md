# TASK-043 — Restore Canonical Home Navigation

Status: VERIFIED_MERGED_AND_PRODUCTION
Start: 2026-10-10T16:51+07:00
End: 2026-10-10T17:00:24+07:00
Owner goal: Continue Phase 1 Roadmap after preserving 21st.dev references and TASK-042 copy/UX audit.
Baseline: main@28da59f; clean tracked worktree; only new TASK-042 report packet untracked (Nexus-owned).

## Goal
Make the rendered desktop navigation match the five exact locked Constitution labels in order: Home, Stories, About, Experience, Contact. Keep responsive mobile primary Contact reachable. Scope must not touch Hero or underlying photography; no general translation/redesign.

## Allowed
- src/config/navigation.ts
- .tasks/TASK-043/task.md, plan.md, reports/final-report.md
- docs/ROADMAP.md, AI_HANDOFF.md, reports/implementation_report.md (status reconciliation)
- Existing TASK-042 packet/report status, no source files otherwise

## Forbidden
- Hero copy/visual/section, CSS/layout refactor, app/page.tsx, images, dependencies, /fastwork, contact accounts/links, deployment secrets
- Other unrelated branches, tools, repos and accounts

## Steps
- [x] Verify current branch/HEAD/Kernel/brand docs and actual runtime navigation
- [x] Change nav config only, preserving existing href targets
- [x] Run lint/build; functional browser QA desktop 1440 and mobile 390 (anchors/contact/overflow)
- [x] Verify focused diff, images, report and reconcile canonical docs (final staged check pending)
- [x] Scope commit, PR #13 merged, exact squash content verified, local branch cleaned, production READY and public DOM rechecked
