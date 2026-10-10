# ROADMAP

## Phase 1

Landing Page + Deploy Test

### Current bounded follow-up (2026-10-10; evidence: current Git main@d0e98e9)

1. **Copy and content-consistency review first** — compare actual `src/config/content.ts`, `src/config/navigation.ts`, and `app/page.tsx` to the locked brand/blueprint and live rendering. Check Thai-first vs English editorial accents, section headings, story clarity, CTA language, and mobile line breaks. Produce a scoped proposal before any user-visible copy changes. **Hero remains FROZEN**; no Hero text/visual change without explicit Owner approval.
2. Verify current Phase 1 contact actions and mobile presentation against existing release QA before making any new changes.
3. Continue small, reversible polish only where evidence shows a gap. Existing `MiniAlbum`, `StoryImageFocus`, and `ExperienceSequence` are shipped patterns; do not replace them to chase new effects.
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
