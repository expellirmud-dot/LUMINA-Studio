# TASK-042 — Home Copy and Navigation Canonical Audit

Status: COMPLETED_AUDIT_NO_CODE_CHANGE
Started: 2026-10-10, ICT (local start time resolved from execution log)
Baseline: main@28da59f4ba8f352295c26796d831787ab3a24f48, clean after TASK-041 PR #12 verified merge

## Goal
Follow Phase 1's next bounded roadmap task: compare current Home copy, navigation, contact/CTA and mobile typography against locked V2 brand and actual local implementation/runtime. Document supported discrepancies and a minimal scoped proposal before editing user-facing words.

## File boundaries
- Read: `PROJECT_RULES.md`, `AGENTS.md`, `docs/CONTEXT_INDEX.md`, brand locks, `app/page.tsx`, `src/config/content.ts`, `navigation.ts`, `contact.ts`, `portfolio.ts`, `services.ts`, historical task copy reports.
- Write: only `.tasks/TASK-042/task.md`, `plan.md`, `reports/final-report.md` and normal handoff/docs status after verification.
- Forbidden: change Hero, source copy/config, UI, images, dependencies, contact accounts, production, bookmarks or third-party animation.

## Checklist
- [x] Bootstrap Continuity/Kernel, Git branch/HEAD/worktrees, canonical read order
- [x] Verify TASK-041 PR #12 merged, root main fast-forward and clean
- [x] Exact-source copy/UX review versus locked brand docs (AGY independent reviewer timed out; no worker result used)
- [x] Check live rendered Home at desktop 1440 and mobile 390; exact CTA hrefs and overflow
- [x] Rank exact copy/nav discrepancies and propose TASK-043
- [x] Create evidence-backed audit report (final Git review follows task integration)
