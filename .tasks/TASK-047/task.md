# TASK-047 — Bilingual Editorial Typography Preview (Owner Art Direction Gate)
Status: PREVIEW_READY_AWAITING_OWNER_ART_DIRECTION (NOT APPROVED FOR PRODUCTION)
Start: 2026-10-11T06:01:25+07:00
Baseline: main@de8f7ad8564b6c3abd0d30e8f61175a351fe010e; clean, one root worktree.
Owner feedback: TASK-046 Thai-only headlines feel awkward, unnatural and visually inconsistent; Thai font not acceptable; English and Thai should be designed together.
Intent of assent "ครับผม": proceed with bounded comparison preview, NOT accept production/art-direction approval.

## Goal
Create an editorial bilingual variant A for objective side-by-side review: English serif headline + shorter natural Thai support in explicitly IBM Plex Sans Thai Looped. Existing site is baseline B. Save mobile/desktop screenshots and optional Draft PR/Vercel Preview for the Owner. Do not merge/deploy production without substantive visual owner approval.

## Allowed
- src/config/content.ts: only titles/body texts of What We Notice, Moments Between, Behind The Lens (including its signature), Experience (including supporting) and Final CTA.
- app/page.tsx: adjust lang on restored English H2, set Thai paragraph font from typographyConfig, and conditionally suppress an empty duplicate Behind The Lens quote; all anchors and structure otherwise unchanged.
- src/config/typography.ts: add dedicated Thai body font token; no global CSS override.
- app/globals.css: bounded Experience anchor scroll offset under fixed navigation, and mobile-only suppression of duplicate active-image caption (list remains present, interactive and unchanged). No animation, image or service content modifications.
- .tasks/TASK-047 packet, parts, reports; existing AI_HANDOFF and reports only if needed when approval becomes final.
- scripts/capture_review.js: correct the existing visual QA's false-positive classification for not-yet-loaded lazy images under aria-hidden content. Keep public capture CLI and output contract stable; no change to app components, protected photography, or CI.

## Forbidden
Hero (all fields and layout), photo assets/order, Selected Stories, Kind Words, footer, logo/navigation, service step content, animation/timing, new dependencies or routes, client information, production deploy/merge. No new docs authority.
## Checklist
- [x] HARD BOOTSTRAP, Git integrity and Tier 0/1 sources, Thai skill, model inventory
- [x] Parallel CLI readers: Thai editorial critique / bilingual typography CSS and QA
- [x] Scoped candidate in task-specific branch; preserve baseline
- [x] lint/build, DOM, responsive screenshot/visual difference 390 and 1440, validate protected content and semantics
- [x] Draft PR (not ready for merge) with Preview URL only if automated checks PASS
- [x] Close as PREVIEW_READY_AWAITING_OWNER_ART_DIRECTION, no production effect

## Preview gate — 2026-10-11
- GitHub Draft PR #20: https://github.com/expellirmud-dot/LUMINA-Studio/pull/20 (DRAFT, open; NO MERGE)
- Vercel Preview deployment READY (non-production), Git SHA c7c8e3a; view https://lumina-studio-emtgxxbue-expellirmud-dots-projects.vercel.app/ while signed into the appropriate Vercel account.
- Unauthenticated Chrome was redirected to Vercel Login; therefore external public Preview QA is BLOCKED_BY_ACCESS, not passed. Local 390/1440 Chrome PASS 50/50.
- Production remains READY on main@de8f7ad. Await Owner subjective typography/art-direction approval before release.

## Follow-up QA — existing automatic capture (2026-10-11 13:31 ICT)
- [x] Inspect existing `scripts/capture_review.js` and Visual Review skills; reuse, do not duplicate
- [x] Capture candidate desktop/tablet/mobile and inspect manifest
- [x] Reproduce two flagged mobile images as hidden lazy images; source files exist and optimized HTTP 200
- [x] Update only existing capture script to distinguish deferred lazy images from genuine broken images
- [x] Repeat desktop/tablet/mobile screenshot QA; compare existing Production baseline and mobile visual composition
- [x] Lint/build/exact diff; update report, Draft PR, and stop at Owner art-direction gate
- [x] Tablet 768 screenshot: hide duplicate active step caption wherever Experience uses stacked layout (<900px); verify again at 390/768/1440

Image QA result (13:45 ICT): original automated all-viewport capture had one *false positive* for 2 hidden lazy images; source image URLs returned 200. Corrected the existing script; rerun 9 sections x 3 viewport = 27 captures, qaFindings=0 (mobile deferredLazyImages=2). On 768px visual, repeated '01' under stacked image was real; extended Experience caption hiding to <=899px. Post-build DOM + MiniAlbum interactive QA 90/90 PASS at 390, 768, 1440. Tablet screenshot QA 9/9, qaFindings=0. No Hero/Stories/Kind Words/photography content changes; Draft PR only. Art-direction Owner approval remains open.
