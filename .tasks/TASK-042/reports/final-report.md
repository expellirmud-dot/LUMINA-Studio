# TASK-042 — Home Copy, Navigation and Contact Audit (2026-10-10)

## State and scope
Decision: **AUDIT_COMPLETED / PROPOSAL_READY / NO_PUBLIC_COPY_MUTATION**
Starting candidate: `main@28da59f4ba8f352295c26796d831787ab3a24f48` after TASK-041 PR #12 squash merged. Current Git was clean before this task. Continuity: NAVIGATION_ONLY; Kernel: ESTABLISHED / GUARDED_INTERNAL_ONLY / CLEAN.

### Canonical sources
- `PROJECT_RULES.md` locks Hero FROZEN and config-first development.
- `docs/LUMINA_V2_CONSTITUTION.md`: exactly Home, Stories, About, Experience, Contact navigation; honest bilingual copy and no generic marketing; forbid "Gallery", "Packages", "Portfolio" in Home/nav.
- `docs/HOME_PAGE_BLUEPRINT.md`: Thai-first copy for Hero, What We Notice, Moments Between, Behind The Lens, Experience and Final CTA. Hero text remains frozen despite mismatch.
- `src/config/content.ts`, `navigation.ts`, `contact.ts`, `portfolio.ts`, `services.ts`, `app/page.tsx`: current implementation owner.
- Historical `.tasks/TASK-027/reports/final-report.md` marked a previous Thai/English copy candidate PASS; it is historical and not proof of compliance by the current Git HEAD.

## Verified findings (ranked)
1. **HIGH — Navigation differs from locked constitution.** `src/config/navigation.ts` has exactly four links: Stories -> #selected-stories; Approach -> #experience; About -> #behind-the-lens; Inquire -> #final-cta, plus a separate Inquire CTA. Constitution requires Home/Stories/About/Experience/Contact (5). The actual live desktop DOM shows the four links + CTA. Proposed first candidate: restore the five navigation labels with verified anchors (#hero, #selected-stories, #behind-the-lens, #experience, #final-cta), while keeping one separate nav CTA only if desktop/mobile QA proves it does not duplicate/confuse. Scope: navigation config and associated responsive nav only if necessary.
2. **HIGH — Body copy language/hierarchy drift.** `src/config/content.ts` is predominantly English; the locked `HOME_PAGE_BLUEPRINT.md` supplies warm Thai-first copy for several major sections. Thai currently appears in the personal quote/signature but not dominant section headlines, introductory copy, or final invitation. The live site confirms this. Do not simply paste Blueprint Thai verbatim; compare line length, naturalness, brand voice, meaning, visual rhythm, language tags and card headings before a bounded non-Hero copy proposal.
3. **MEDIUM — Hero text discrepancy is BLOCKED BY BRAND LOCK, not a fix in this task.** Locked Blueprint Hero Thai differs from current live English headline `Stories live in the moments / we almost miss.`; `PROJECT_RULES.md` marks Hero FROZEN. Report conflict to Owner; do not change Hero copy/image/layout without explicit approval. The current Hero output is not broken merely because it differs from older Blueprint wording.
4. **MEDIUM — About link/CTA language.** `app/page.tsx` renders "More about the approach" under Behind The Lens but links to `#experience` rather than a separate About page; this currently may be intentional. Proposed content-only improvement: clarify this action as "How it works" / equivalent Thai, or change the destination only with an exact section/UX decision. Avoid creating Phase 2 pages.
5. **MEDIUM — Final contact invitation should be checked for Thai visitor comprehension.** `src/config/content.ts` renders "Start a conversation" and "View contact details"; the Blueprint uses a Thai invitation and CTA "Let's Talk". On current live 390px and 1440px, the first action resolves to `https://line.me/ti/p/~expellirmud`; contact details resolve to `#contact-details`, and Phone, LINE, Facebook anchors exist in the footer. Link markup is verified; actual external contact account response was not tested.
6. **LOW — Editorial composition and microcopy.** Exactly three story cards remain; `src/config/portfolio.ts` subtitles are human/documentary in tone. `brandBridge` adds one quiet aside between Moments and Behind; it is not listed in the lock's core eight-section sequence. Preserve pending specific visual/owner review, as removing it changes rhythm/structure.

## Actual live surface observed (2026-10-10 ICT)
- URL: `https://lumina-studio-iota-ten.vercel.app/` returned HTTP 200.
- Headless system Chrome visited with desktop 1440x900 and mobile 390x844; H1 text matched current `contentConfig.hero`.
- Primary navigation text DOM: LUMINA / Stories / Approach / About / Inquire / Inquire (last one is nav CTA).
- No document-level horizontal overflow detected at the tested widths; not a complete responsive or accessibility certification.
- Captures: ignored `.runtime-captures/lumina/TASK-042/live-390.jpg` and `live-1440.jpg`. FullPage screenshot initially showed blank below-the-fold lazily-loaded images; **do not count these as broken without scroll/load verification**.
- Independent AGY Gemini 3.8 Flash Low plan-mode reviewer was attempted but timed out at 60s with no usable findings; no worker assertions relied on. Nexus directly reconciled current files and live DOM.

## Next bounded implementation task (NOT executed here)
A. First correct navigation labels/anchor configuration to the five constitution items; test desktop/mobile layout, keyboard reachability, no overflow, links, lint/build and visual before/after.
B. Separately prepare **non-Hero** Thai editorial copy options for What We Notice, Moments Between, Behind The Lens, Experience, and Final CTA. Preserve the existing photo content and layout. Review Thai naturalness and actual mobile wraps. The Hero remains frozen; any major language strategy change requires an explicit Owner decision.
C. Keep all 21st.dev components deferred in `docs/ROADMAP.md` until Phase 1 copy/navigation is settled.

## Validation and rollbacks
Docs-only task; no source or production mutation. Validate scoped docs diff with `git diff --check`; no new lint/build validation is claimed. Revert only TASK-042 documentation if necessary. Existing TASK-041 merged records and proof of release remain authoritative.
