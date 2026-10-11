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
