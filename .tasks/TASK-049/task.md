# TASK-049 — Two-Story Editorial Presentation Spike

- Status: EXPERIMENT_VERIFIED_LOCAL / PENDING_OWNER_ART_DIRECTION / NOT_RELEASED
- Started: 2026-10-12 12:46 ICT
- Worktree: D:\lumina-studio_worktrees\TASK-049
- Branch: feat/task049-story-presentation-spike
- Baseline: feat/task048-narrative-enhancements@38f4eacedd6403834081fc18558762d7267ef77c
- Owner goal: evaluate three 21st.dev references and prototype a photography-first presentation for exactly two additional curated photo stories.
- Source references:
  - https://21st.dev/@sumonadotwork/components/parallax-scroll-feature-section
  - https://21st.dev/@minhxthanh/components/animated-scroll
  - https://21st.dev/@felipemenezes098/components/hero-07

## Boundaries
- Preserve frozen Hero and current PR #22.
- Do not merge, push, deploy, add dependencies, modify production, or create backend/CMS/gallery system.
- Do not change locked homepage order without a separate explicit art-direction decision.
- Prototype work only on detached experiment scope or isolated worktree; favor existing StoryImageFocus/MiniAlbum/config.
- Treat 21st.dev as inspiration, not a license to copy implementation blindly.
- Avoid new synthetic image assets in product; real image candidates must be checked for project provenance.
- CLI workers are read-only reviewers in parallel. Only Nexus may write/reconcile this worktree.
- Only use verified live models/routes; no paid fallback/contributor tier without separate approval.

## Acceptance
- Analyze actual source, requirements, motion dependencies and responsive behavior with uncertainty labels.
- Two independent read-only reviews with evidence and disagreements reconciled.
- Select smallest technical approach for two photo sets with protected Home sequence.
- If prototype proceeds: compare desktop 1440px, tablet 768px, mobile 390px, reduced motion and keyboard; validate lint/build on exact candidate.
- Report next release gate. Do not merge TASK-048 or TASK-049 as part of this experiment.


## Goal Loop Closeout (2026-10-12 13:16 ICT)
- [x] Curated two additional project photo sets and implemented two independent visual presentations on internal `/story-spike` route.
- [x] Canonical portfolio config preserved; no new dependencies, Hero or Home changes.
- [x] Final lint/build PASS; browser QA 57/57 on 390/768/1440; screenshots reviewed.
- [x] Read-only worker findings reconciled; incomplete engineering worker noted without claiming approval.
- [ ] Out-of-scope release gate: Owner Art Direction choice, then separately authorize Home Blueprint integration/release.
