# TASK-046 — Thai Editorial Copy (non-Hero): Candidate Validation

Status: LOCAL_VALIDATED / PR_RELEASE_PENDING
Start: 2026-10-11 02:37 ICT
Baseline: main@b053f7445f8495f98b6f9cd2638f1b6bb5dd3510, clean, one root worktree

## Authority and source
User-supplied Thai writing document: observational examples of people, families, rituals; no marketing clichés, no proof that specific pictured scenes occurred. Canonical owners are src/config/content.ts and src/config/services.ts. Constraints: docs/LUMINA_V2_CONSTITUTION.md; docs/LUMINA_VISUAL_LANGUAGE.md; docs/HOME_PAGE_BLUEPRINT.md, project Thai UX skill, and TASK-042 findings.

## Exact edits
- src/config/content.ts: Thai headline/body for whatWeNotice, momentsBetween, behindTheLens, experience, finalCta; short localized Behind action, Final CTA action/secondary. Retain English editorial eyebrow labels.
- src/config/services.ts: four short Thai Experience flow phrases; exact four-item structure preserved.
- app/page.tsx: lang="th" only on translated headings, paragraphs and action text; no DOM structure, link destinations, CSS, image or animation change.
- src/components/ExperienceSequence.tsx: lang="th" on localized flow/caption item spans only.
- docs/ROADMAP.md and handoff/report state: updated within existing canonical owners.
- No Hero, selectedStories or story cards, brandBridge, kindWords (testimonial/credit), footer, nav, contact config or runtime dependencies touched. KindWords' authorship is not verified in this task and should not be invented or rewritten.

## Evidence
- HARD BOOTSTRAP Continuity NAVIGATION_ONLY, Kernel ESTABLISHED/GUARDED_INTERNAL_ONLY/CLEAN; exact Git baseline inspected. Followed AGENTS/CONTEXT_INDEX/Phase 1 brand lock.
- Two independent parallel read-only AGY CLI reviewers; W1 partial timeout, W2 complete; see parts/workers.md. All accepted claims rechecked by Nexus.
- git diff --check PASS.
- npm run lint PASS; npm run build/TypeScript/static generation PASS for /, /fastwork and /_not-found.
- Exact byte-level section comparison against Git HEAD using Node Buffer-decoded UTF-8: hero, selectedStories, brandBridge, kindWords and footer PASS unchanged. An initial PowerShell comparison failed due to shell encoding; independently redone with Node and passed.
- Local Next 16.4 production server on localhost:3411. Headless Chrome at 390x844 and 1440x900 each: HTTP 200; no document horizontal overflow; exact existing five nav items; unchanged Hero h1; Behind button clicked and navigated to #experience; final secondary clicked #contact-details; primary retained exact existing LINE href (not clicked); all translated h2 and service UI labels have lang th. QA script and section captures under ignored .runtime-captures/lumina/TASK-046/.
- Visual screenshots inspected: Thai headings on phone fit, short paragraph rhythm intact, no visibly clipped typography/buttons. Existing sticky header and testimonial handling not changed. Temporary localhost server stopped after checks.

## Scope and release decision
- APPROVED_WITH_NOTES for release: natural Thai observant language while keeping photo primary, no sales hype, no guaranteed no-posing statement.
- No on-page CSS changes. Remaining risk: fonts currently use serif heading token with browser Thai fallback, visually acceptable in tested widths but a separate typography-wide task would be needed for broader font harmonization.
- PR/merge/production state PENDING at this report revision; do not claim deployed until verified by GitHub/Vercel plus live smoke.

## Future follow-up
- Separate authenticated-source review of Kind Words quote provenance; don't treat it as verified testimonial without source.
- Hero remains FROZEN; 21st.dev components remain deferred.
