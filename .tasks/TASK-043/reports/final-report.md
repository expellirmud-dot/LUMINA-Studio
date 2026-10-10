# TASK-043 — Canonical Navigation Correction: Candidate Validation

Date: 2026-10-10 ICT
Started: ~16:51+07
Validation completed: 16:56+07
Baseline: main@28da59f4ba8f352295c26796d831787ab3a24f48
Decision: **VALIDATED_LOCAL_CANDIDATE / RELEASE_PENDING**

## Goal and exact change
- In `src/config/navigation.ts`, replace the old labels `Stories, Approach, About, Inquire` plus `Inquire` CTA with the five **rendered** navigation labels in Constitution order: `Home, Stories, About, Experience, Contact`.
- Hrefs unchanged for existing destinations; add Home -> #hero, set Experience -> #experience, and maintain separate CTA as Contact -> #final-cta (from existing app/page.tsx).
- Desktop renders 4 text links plus one Contact button; mobile keeps original compact logo + Contact button. This matches five user-facing navigation labels on desktop and preserves compact responsive behavior.
- No Hero, contentConfig, contactConfig, images, animation, app/page.tsx, dependencies, CSS or /fastwork edits.

## Validation on exact candidate
- `npm run lint`: **PASS** (exit 0).
- `npm run build`: **PASS** (Next.js 16.4.0; Turbopack 20.9s; TypeScript 6.1s; static routes /, /fastwork, /_not-found).
- Production Next server from this candidate on localhost:3410: ready; Chromium headed executable in headless test visited 390x844 and 1440x900.
- Automated DOM assertions: five exact navigation labels/anchors in order; on 390px Contact visible, other nav item links intentionally hidden by existing CSS; on 1440px all five visible.
- Contact anchor click -> `#final-cta` **PASS** at both sizes; `document.documentElement.scrollWidth > innerWidth` = **false** at both sizes.
- Hero title still `Stories live in the moments\nwe almost miss.` on both tested viewports; unchanged.
- Visual first-viewport captures under ignored `.runtime-captures/lumina/TASK-043/candidate-{390,1440}.jpg` examined directly; no header collision, headline obstruction, or obvious clipping.
- Temporary local server stopped after QA. No production effect initiated during local validation.

## Related preceding audit
TASK-042 report is the canonical evidence for the locked-Blueprint vs actual copy gaps. The current narrow correction solves the objectively constrained navigation labels, **not** the subjective Thai vs English content strategy. Hero remains FROZEN. 21st.dev references remain deferred in ROADMAP.

## Scope / risk / acceptance
Files allowed: `src/config/navigation.ts`, `.tasks/TASK-042/**`, `.tasks/TASK-043/**`, `docs/ROADMAP.md`, `AI_HANDOFF.md`, `reports/implementation_report.md`.
External reference code imported: none. New dependencies: none.
Risk: external production deployment still needs post-merge verification if automatic Vercel triggers. No claim of new production release until checked. Existing page animation/mobile behavior otherwise unchanged.
Next bounded step: propose non-Hero copy wording for What We Notice, Moments Between, Behind The Lens, Experience and Final CTA, with specific Thai/English choice and mobile wraps; do NOT change Hero without explicit Owner approval.

Release state: pending commit/PR at this report revision; verify merge and production from live sources, then record follow-up closure.
