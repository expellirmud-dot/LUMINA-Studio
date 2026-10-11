# TASK-047 — Bilingual Editorial Typography Preview: Technical Closeout
Date: 2026-10-11 Asia/Bangkok
Start: 2026-10-11 06:01:25 ICT (initial candidate); continuation preflight: 2026-10-11 11:29:19 ICT
Status: TECHNICAL_QA_PASS / AWAITING_OWNER_ART_DIRECTION
Base: `main@de8f7ad8564b6c3abd0d30e8f61175a351fe010e`
Branch: `experiment/task047-bilingual-editorial`

## Goal and bounded edits
Preview-only bilingual editorial presentation of five non-Hero sections; no production release. The Project Constitution, Visual Language and Home Blueprint remain canonical.
- `src/config/content.ts`: five large headings changed to concise English, Thai bodies shortened. Duplicate Thai photographer statement removed; existing Kind Words quote and Hero untouched.
- `src/config/typography.ts`: centralized `thaiBody` font token using already-installed IBM Plex Sans Thai Looped.
- `app/page.tsx`: five restored English H2 have English inherited language; six Thai paragraphs explicitly render with Thai font; redundant quote block renders only if non-empty.
- `app/globals.css`: Experience scroll-margin to account for fixed header; mobile-only active-image caption hidden because same step appears in the interactive numbered list (desktop retains caption).
- `AI_HANDOFF.md`, existing task packet/report: current references, status and evidence. No new dependencies, images, routes, backend, price, navigation, Hero, Selected Stories, Kind Words, service step content, Brand Bridge or Footer modifications.

## Worker evidence
2026-10-11 06:01–06:04 ICT: two parallel read-only AGY Gemini reviewers validated direction independently: bilingual English editorial headline / Thai supporting paragraph and mobile vertical rhythm/Thai font. No worker wrote files. Nexus made scoped changes as single writer on candidate branch.

## Exact-candidate validation
- 2026-10-11 11:29–11:33 ICT: `npm run lint` PASS (exit 0)
- `npm run build` PASS (Next.js 16.4; TypeScript; static /, /fastwork, /_not-found)
- Prior protected content verifier `.runtime-captures/lumina/TASK-046/verify-protected.cjs`: 5/5 protected sections exact-match main baseline (hero/selectedStories/brandBridge/kindWords/footer).
- Browser deterministic `.runtime-captures/lumina/TASK-047/validate-candidate.cjs`: 50/50 PASS on 390x844 and 1440x900 after correcting tester-only navigation selector to include Contact CTA. Evidence `validation-postfix.json`, `candidate/*-postfix.png`.
- Browser checks: HTTP 200, no horizontal overflow, five nav labels including CTA, original LINE href, English Cormorant heading, Thai paragraph computed IBM Plex Sans Thai Looped, no heading overflow, Behind The Lens quote removed, four interactive Experience steps and `aria-pressed` state, caption hidden only mobile, Experience anchor heading/label below fixed nav.
- Reviewed screenshots manually via Remote Desktop Commander: mobile Behind The Lens quiet layout with only one Thai paragraph; Experience mobile steps 01-04 once, image remains central; anchor screenshot shows THE EXPERIENCE and A Thoughtful Process unobscured; desktop portrait retained. Images are not proof of user aesthetic acceptance.
- `git diff --check` PASS (line-ending warning only). Single-writer no collisions. Existing recovery branch, stash, backup and other project repos preserved.

## Release and art-direction gate
**Decision: PREVIEW_READY_AWAITING_OWNER_ART_DIRECTION, NOT APPROVED FOR PRODUCTION.** Only Draft PR / Vercel Preview may be used to let Owner review actual pages. No merge, production deployment or unrelated issue cleanup in this task. Any further copy/font refinements are scoped to this candidate and must be revalidated at exact HEAD.
Technical tests do not attest to emotional/editorial quality. Kind Words testimonial provenance remains UNKNOWN and out of scope.

## Draft PR, Vercel Preview and final gate — 2026-10-11 11:34 ICT
- GitHub **Draft PR #20**, open, head `experiment/task047-bilingual-editorial`, first candidate Commit `c7c8e3aff58d052ca8d5e4f14d175677704256af`: https://github.com/expellirmud-dot/LUMINA-Studio/pull/20
- Vercel Preview deployment `dpl_DKfAom33ikVDK7JkpRq1QUa1BHMm` **READY** on candidate SHA; target not production: https://lumina-studio-emtgxxbue-expellirmud-dots-projects.vercel.app/
- External anonymous Chrome verification **BLOCKED_BY_ACCESS**, redirected to `https://vercel.com` login page (both 390/1440). This is an access control, not a failed Next.js build. Preview only for appropriately authenticated Owner; do not remove protection just for this test.
- Independent Production Vercel deployment `dpl_ABxF3ZpUJBfvAU8PkAviNrZMPZbP` is still **READY** and points to `main@de8f7ad`. No production deployment or merge performed.
- Decision: TECHNICAL QA COMPLETE, DRAFT PREVIEW OPEN. Owner art-direction approval and authenticated preview UX remain outstanding. This is the intended stop condition, not an engineering failure.

## 2026-10-11 Automated Visual Review Continuation
Start 13:31:14 ICT; end (technical checks) 13:45:16 ICT. Owner requested re-use existing automated screenshot/review tooling, not a new system or a business strategy redesign.

**Existing canonical owner found:** `scripts/capture_review.js` with npm `capture:sections`, `capture:review`, `capture:hero`; Visual Review skill `.agents/skills/LUMINA_VISUAL_REVIEW/SKILL.md`. Re-used existing `validate-candidate.cjs` under ignored `.runtime-captures/lumina/TASK-047/` for DOM/interaction QA; no new script/tool directory.

**Observed (VERIFIED):**
1. Initial automated all-viewport capture: 21 screenshots, `qaFindings=1` on 390px. Only 2 `PTO-296.jpg` / `PTO-318.jpg` mobile lazy image nodes appeared incomplete; actual files exist, Next image HTTP HEAD returned 200, and Chrome inspected nodes were `loading=lazy` under `aria-hidden=true`, inside a collapsed/decorative MiniAlbum layer. The prior script incorrectly reported hidden deferred image as broken.
2. In the existing capture script, keep genuinely failed/visible image checks but skip waiting for intentionally hidden pending lazy images and report those in separate `deferredLazyImages`. Added previously omitted `what-we-notice` and `kind-words` section IDs to make primary narrative capture coverage complete.
3. Retested existing script on 390/768/1440: `9 sections × 3 sizes = 27` screenshots, `qaFindings=0` all sizes; `brokenImages=0`, no missing anchors/overflow/page/console/failed network requests, one H1 per page. Mobile reports 2 deferred (not broken) lazy images. Manifest: `.runtime-captures/lumina/TASK-047/review-20261011/complete/2026-10-11T06-39-14-564Z/manifest.json`. Manifest times are UTC (06:39Z = 13:39 ICT).
4. Manual tablet screenshot revealed the Experience step '01' caption repeated beneath the image and again in the numbered list at 768px. CSS previously hid duplicate only <=767px, while layout stays stacked until 900px. Moved just this hiding rule into <=899px query. Verified 768px screenshot after fix; 1440px desktop retains caption in side-by-side layout. No component or step text changes.
5. `npm run lint` exit 0; `npm run build` (Next.js 16.4 and TypeScript) exit 0; protected-copy verifier 5/5 exact equality (Hero, Selected Stories, Brand Bridge, Kind Words, Footer); `git diff --check` exit 0. Chrome DOM/interaction QA at 390, 768 and 1440 = **90/90 PASS**; verifies English serif + Thai font, nav/anchors, hero unchanged, responsive caption, four Experience actions, five-frame MiniAlbum open/close/aria, contact LINE destination, no overflow. Tablet automated screenshot after CSS fix 9/9, `qaFindings=0`: `.runtime-captures/lumina/TASK-047/review-20261011/final-tablet/2026-10-11T06-43-17-838Z/manifest.json`.
6. Visual review: quiet typography and photo priority retained; What We Notice and Behind The Lens read as English editorial headline + short Thai prose; selected stories remain the three curated editorial cards, not a dense gallery. Mobile and tablet vertical rhythm consistent. Kind Words quotation provenance remains unverified, as previously documented, and was not changed.

**Changed code scope:** `scripts/capture_review.js` (existing QA script, no new dependency) and one Experience breakpoint rule in `app/globals.css`. Task packet/hand-off/report evidence only. Original Draft PR #20 stays DRAFT pending subjective Owner art-direction. No production merge/deploy. No temporary scripts scattered under `D:\tools`; captured evidence is under the repo's ignored `.runtime-captures/`.

**Final decision:** TECHNICAL VISUAL QA **APPROVED_WITH_NOTES**; Owner aesthetic acceptance **PENDING**. Remaining nontechnical gate: approve bilingual typography and editorial mood in authenticated Preview. The 3–5-image Story expansion is Phase 2 research, not silently implemented here.
