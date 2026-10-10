# ROADMAP

## Phase 1

Landing Page + Deploy Test

### Current bounded follow-up (2026-10-11; prior TASK-041 baseline was main@d0e98e9)

**TASK-046 — non-Hero Thai Editorial Copy:** local candidate validated on 2026-10-11 (lint/build, mobile 390px and desktop 1440px, links and language accessibility); PR #18 merged and Production Vercel READY at main@3a5903e, with live Chrome mobile/desktop verification. This changes only observational Thai copy in five existing sections and four Experience steps, with `lang="th"` markup. Hero FROZEN; Selected Stories and Kind Words untouched. Canonical evidence: `.tasks/TASK-046/reports/final-report.md`.

1. **TASK-042 Copy Audit complete (2026-10-10).** Compared the live Home at 1440px/390px with brand locks and current config; discrepancies are documented in `.tasks/TASK-042/reports/final-report.md`. Hero remains FROZEN; non-Hero Thai/English editorial changes need a separate scoped proposal/review.
2. **Contact baseline checked in TASK-042.** Live CTA targets LINE, footer includes phone/LINE/Facebook anchors, and tested desktop/mobile widths have no document-level horizontal overflow. Actual external account response and full interactive accessibility QA remain separate validation.
3. **TASK-043 navigation correction RELEASED (2026-10-10):** Constitution-ordered Home / Stories / About / Experience / Contact, with the last item retained as the compact Contact CTA. Candidate lint, build, TypeScript, desktop and mobile QA pass; PR #13 merged, production Vercel READY at main@40edf3a, live page verified. Continue only evidence-backed, reversible Phase 1 polish; preserve existing MiniAlbum, StoryImageFocus and ExperienceSequence.
4. Postpone new micro-album animation prototypes until copy/UX priorities are reconciled and a separate bounded task is approved.

## Phase 2

Real portfolio pages

## Phase 3

Booking inquiry form

## Phase 4

Client gallery

## Phase 5

Business website / studio platform

## Deferred component references (21st.dev bookmarks; reviewed 2026-10-10)

**Reference only — NOT approval to install or redesign.** These exact links were observed in the Owner's authenticated 21st.dev saved list, with some interaction demos reviewed through Chrome. Technical dependencies, licensing, mobile and accessibility acceptance have **not** been verified. Re-evaluate only when the active phase/task calls for a specific interaction. The canonical implementation remains under `src/components/` and `src/config/`.

- [Owner's saved components](https://21st.dev/community/bookmarks/components) — private-bookmark index (requires the relevant account).
- [Expandable Gallery — 0xUrvish](https://21st.dev/@0xUrvish/components/expandable-gallery) — candidate for a restrained small photo-stack hover; compare to existing MiniAlbum.
- [Stack Spread — hyperiux](https://21st.dev/@hyperiux/components/stack-spread) — scroll-driven photo unfolding reference; do not introduce forced scroll or heavy animation.
- [Morph Gallery — kedhareswer](https://21st.dev/@kedhareswer/components/morph-gallery) — optional image-viewer navigation reference, not a replacement for shipped StoryImageFocus.
- [Portfolio and Image Gallery — iamsatish4564](https://21st.dev/@iamsatish4564/components/portfolio-and-image-gallery) — future Phase 2 editorial/story-detail layout inspiration.
- [Layout Grid — manuarora700](https://21st.dev/@manuarora700/components/layout-grid) — layout research only; avoid dense mosaic walls on Home.
- [Grayscale Mosaic Gallery — olewandowski1](https://21st.dev/@olewandowski1/components/gallery-4) — hover/color/lightbox interaction reference; not an approved Home grid.
- [Interactive Image Gallery — ruixen.ui](https://21st.dev/@ruixen.ui/components/interactive-image-gallery) — deferred comparison against shipped image viewer.

Source and evidence: local Chrome interaction captures under ignored `.runtime-captures/lumina/`; these are historical research evidence, not runtime approval of any external component.
