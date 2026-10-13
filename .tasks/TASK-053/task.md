# TASK-053 — Isolated Phase 1 SEO / Headers release candidate

- **Started:** 2026-10-13 10:22 ICT
- **Owner goal:** Continue LUMINA roadmap safely: prepare a clean release candidate from current `origin/main`, without merging unapproved TASK-048/049/050/052 narrative/photo changes.
- **Worktree:** `D:\lumina-studio_worktrees\TASK-053`, branch `feat/task053-seo-release-candidate`, exact base `086d8b96719e5619495b76cbfd2c595c4c4183da`.
- **Canonical roadmap:** `docs/ROADMAP.md`; this task reports on PF-01 only.
- **Known prior evidence:** TASK-050 local combined-branch SEO, sitemap and headers lint/build/browser QA PASS on a different HEAD; reproduce on TASK-053 before declaring verified. Existing Production is public but new changes NOT deployed.

## Allowed changes
- Reuse prior proven changes from TASK-050 only in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `next.config.ts` and `src/config/site.ts`, if still appropriate on main.
- Existing `docs/DEPLOYMENT.md` may be extended only if needed; prefer canonical existing document. Write task packets/reports under `.tasks/TASK-053/`, update `AI_HANDOFF.md` and `reports/implementation_report.md` when verified.
- Read-only CLI review independent of Nexus; Nexus alone writes files in this worktree.
- Preserve exact locked Homepage content, image files, typography and config owners.
- Prepare a scoped PR only if current independent checks pass and effect permissions permit; no automatic Production merge or deploy while broader release hold remains.

## Forbidden
- No files from `app/story-spike`, `app/stories`, or TASK-048/049/050/052 mixed implementation in this candidate.
- No Hero, story inventory, inquiry UX, testimonials, photo permissions, client contact, backend, databases, authentication, purchases, domain/DNS changes or unverified claims.
- No branch/worktree deletion before merged and clean evidence; no `git add .` or speculative framework upgrade.

## Stop / Acceptance
- Exact diff limited to named files and task bookkeeping, `git diff --check` PASS.
- Live CLI reviewer of scope and SEO risk returned grounded findings (or timeout clearly recorded).
- Lint/build/TypeScript PASS on exact candidate.
- Local Production server: Home HTTP 200, robots/sitemap HTTP 200, valid canonical + OG/Twitter image, safety headers present; previews deny crawling; disallowed private routes omitted.
- Browser smoke 390/768/1440 and Homepage section count/hero unchanged.
- Report clearly whether release gate is HOLD vs eligible to merge. Cleanup only after actual landed verification.
