# ROADMAP

## Completion Roadmap — Public-Ready Human Documentary Website (assessment 2026-10-12)

**Purpose and authority.** This section extends the existing Phase 1–5 roadmap; it does not replace the locked `docs/HOME_PAGE_BLUEPRINT.md`, `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, task packets, or live runtime truth. "Website complete" has two meanings:
- **Phase 1 public-ready (launchable):** a trustworthy one-page Human Documentary photography website that communicates who LUMINA is, shows real stories, and lets a prospective client reach the photographer reliably.
- **Expanded full studio platform (optional later phases):** detail portfolio pages, booking inquiry form, private client gallery, and business tools. These are **not required** for Phase 1 completion. Do not implement their backend in Phase 1.

**Evidence classification as of 2026-10-12:** TASK-046 and TASK-047 have historical verified production releases (see their canonical task reports). TASK-048 at `feat/task048-narrative-enhancements@38f4eac` is `TECHNICAL_QA_PASS / PENDING_OWNER_ART_DIRECTION`, GitHub PR #22 **Draft, not merged**; its app candidate and previous browser 42/42 belong to that HEAD. TASK-049 at `feat/task049-story-presentation-spike@de69bca` is **local-only experimental prototype** for two additional photo sets (Editorial Spread A preferred; Quiet Scroll B alternative), lint/build/57-browser-check PASS on its own candidate; no remote merge/deploy. Existing Vercel Production is **not** TASK-048/049. Never treat a successful old-head check as validation for a future merged candidate.

### Completion criteria for Phase 1 (proposed acceptance gates)

A Phase 1 launch is complete only when **all P0 gates** below are VERIFIED on the exact release Git HEAD and Owner approves the photographic/editorial direction. The checks are task proposals, **not claims that the current website fails**.

| Gate | Evidence required on release candidate | Current evidence / action |
| --- | --- | --- |
| Brand / narrative | Owner accepts representative desktop/mobile screenshots; Human Documentary, quiet warm linen, emotional/observational Thai, photography-first; Hero unchanged | Owner art direction acceptance for TASK-048 still pending; TASK-049 presentation choice remains experimental |
| Curated photography | Each public image file exists, is owned/licensed for display, represents genuine people/rituals, has appropriate crop, alt text and no misleading captions | Real project image inventory exists; final photo selections, permission/release suitability and full published photo audit must be confirmed |
| Homepage narrative | Eight locked sections in exact order; Selected Stories exactly three editorial cards unless Owner separately approves a Blueprint change; responsive story reading works | Blueprint lock is verified; reconcile the Owner-requested two extra photo sets without silently appending cards or adding a ninth section |
| Contact / lead path | Reachable LINE/phone/Facebook targets; actual external destination and end-to-end inquiry flow tested from mobile and desktop; no unverified booking promises | Links previously inspected; real account/message handoff not yet documented as verified |
| Trust and factual copy | Real permissioned Kind Words quote (or truthful alternative); genuine photographer introduction, contact details, services and delivery language; no invented clock times or unsupported client claims | Audit against `src/config/`; collect Owner-confirmed content and proof before release |
| UX / accessibility | 390/768/1440 + keyboard/focus/Escape/reduced-motion, Thai readability, accessible forms/labels, no overflow or broken images | TASK-048 historical Chrome 42/42 and TASK-049 local 57/57 are scoped evidence only; reproduce on exact integrated release candidate |
| Performance / SEO | Real-world Core Web Vitals where available, Lighthouse/WebPageTest lab baseline, mobile image loading, image dimensions, font/loading behavior, SEO title/description, canonical/open graph, robots/sitemap | Verify exact deployed page. No numeric performance score should be declared PASS without measurement |
| Operations / release | Branch/PR scope verified; lint/build/typecheck; deployment preview and actual Production READY at correct HEAD; HTTPS, URLs, 404 and cache; post-deploy smoke; rollback route documented | Production exists but current experiments are not released; repeat validation only after Owner accepts final direction |

### Ordered work packages / dependencies

| Order | Work package | Priority | Scope / deliverable | Definition of done / stop condition |
| --- | --- | --- | --- | --- |
| 1 | **AD-01: Art direction decision** | P0 / BLOCKER | Review real TASK-048 visuals plus TASK-049 Concept A/B screenshots, pick one visual plan for **two additional image sets**, resolve the three-card Blueprint conflict without altering the frozen Hero. | Written Owner Art Direction acceptance; if Home structure changes, amend existing canonical `docs/HOME_PAGE_BLUEPRINT.md` through a separately scoped decision before source edits. No silent change. |
| 2 | **ST-01: Two-story integration plan** | P0 if two sets are launch requirement | Specify exact destination within selected three stories or optional Phase 2 story detail; identify photos, sequence, crops, alt and captions; reuse `StoryImageFocus` / canonical `src/config/portfolio.ts`. | 2 complete documentary sequences approved by Owner and photo provenance confirmed. Do not create a generic gallery grid, parallax effect showcase or duplicate config. |
| 3 | **CT-01: Content and trust verification** | P0 | Audit Kind Words authenticity, profile, contact/LINE format, photographic representation and factual CTA/copy; replace unverifiable claims with neutral truthful copy. | Signed-off content sheet or documented Owner source; no unsupported testimonial, timeline or service promise. |
| 4 | **QA-01: Release-candidate accessibility & responsive sweep** | P0 | Validate integrated exact HEAD at 390/768/1440: Home, story dialogs, Experience, inquiry, keyboard and touch, reduced motion, image load/crop, console, overflow and semantic HTML. | Relevant automated tests and independent screenshot review PASS; defects resolved on same HEAD. |
| 5 | **PF-01: Performance, SEO and security baseline** | P0 | Check measured LCP/CLS/INP (field data when available), images/fonts, HTTP caching, metadata/OG, robots/sitemap, link security and exposed environment/secrets; no premature framework changes. | Baseline evidence + remediation of material issues; remaining noncritical improvements documented. |
| 6 | **RL-01: Release reconciliation** | P0 | Reconcile Draft PR #22 with task gate, exact candidate, protected Home, clean worktree, branch scope, preview, checks and Owner permission. Merge/deploy only when all prior gates pass and any standing hold has been expressly resolved. | Production READY at landed HEAD, post-deploy mobile/desktop smoke PASS, rollout receipt, documented safe rollback. |
| 7 | **OP-01: Low-maintenance operations** | P1 / after launch | Lightweight update procedure for photo captions/contacts/config, dependency advisories, broken-link review and rollback runbook. Reuse existing files/skills. | One canonical runbook reference, named maintenance owner and periodic check; no unnecessary dashboard. |

**Priority interpretation:** P0 is essential for Phase 1 public-readiness and applies only after confirming the issue exists; P1 improves reliability after public launch; P2 is product expansion. These are ordered dependencies, not fixed calendar deadlines. TASK-048 merge and TASK-049 worktree cleanup **must not** precede their actual approval/landed verification.

### Later phases — conditional, not blockers for Phase 1

- **Phase 2 / P2 — Real editorial portfolio/story pages:** distinct photo-essay detail views, controlled image curation, SEO per story, intentional navigation. Promote TASK-049 Concept A only if the Owner approves how it relates to the locked Home. Do not make the experimental `/story-spike` URL public as-is.
- **Phase 3 / P2 — Booking inquiry form:** optional structured lead intake only if LINE-based contact proves insufficient. Before implementation decide privacy notices, spam controls, data-retention, delivery channel and explicit external-service authorization; no backend just to create a form.
- **Phase 4 / P2 — Client gallery:** separate private delivery/review product with access control, data retention, download permissions and storage costs; not a public masonry section and not Phase 1 scope.
- **Phase 5 / P2 — Studio platform:** evaluate actual studio operating needs, demand, cost and privacy before proposing CRM, CMS, database or payments. No speculative infrastructure.

### Open evidence / decisions that change the outcome

1. Owner must confirm whether "two additional sets" means **extra stories available beyond the three Homepage cards** or **additional frames within the existing three-story experience**; never infer consent to remove or replace current story cards.
2. Final photo permission/credit and customer-testimonial authenticity must be checked against their actual owners; a file being in `public/images` proves availability, **not** consent to display.
3. Live inquiry/account delivery, SEO behavior, traffic performance and production accessibility cannot be marked VERIFIED from task-history alone.
4. Full source code and licensing of the two 21st.dev scroll examples remained unverified in TASK-049. It is safe to use broad design inspiration; do not introduce or copy dependencies until source, licensing, and benefits are examined.
5. No percentage-complete estimate is defensible until P0 checklist evidence is collected on one exact candidate.

### Suggested next bounded action

Create a **read-only Phase 1 release-gap audit** against the current Production and exact PR #22; inventory all public images/links/config and use a 390/768/1440 screenshot comparison. Package the Owner's art-direction decision as a short side-by-side of TASK-049 A/B. Do not touch the frozen Hero, create new systems, merge Draft PR #22 or deploy while the hold remains.


---

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
