# CURRENT HANDOFF — TASK-046 THAI EDITORIAL COPY (2026-10-11; LOCAL VALIDATED / RELEASE PENDING)

- Baseline `main@b053f74` CLEAN on 2026-10-11 02:37 ICT. Canonical current packet: `.tasks/TASK-046/`; copy owner `src/config/content.ts` and Experience steps `src/config/services.ts`.
- Refined non-Hero What We Notice, Moments Between, Behind The Lens, Experience and Final CTA with observational Thai. Four process steps localized. Added only necessary `lang="th"` accessibility attributes to Thai UI content.
- Hero, Selected Stories, Kind Words quote/credit, Brand Bridge, Footer, image selection, Navigation, contact hrefs, CSS/motion and dependencies unchanged.
- Parallel read-only AGY workers dispatched: UX review completed; Thai review timed out partially; Nexus independently validated.
- Exact local candidate: lint/build/TypeScript PASS; Node protected-copy comparison PASS; Chrome 390px/1440px HTTP 200, no overflow, links and click anchors PASS, lang markers PASS. Visual captures in ignored `.runtime-captures/lumina/TASK-046/`.
- **State: LOCAL_VALIDATED, NOT YET RELEASED.** PR/production confirmation pending. Hero still FROZEN; 21st.dev bookmarks deferred.

---

# HISTORICAL HANDOFF — TASK-045 VERIFIED PRODUCTION (2026-10-10)

- **Canonical audit/cleanup:** `.tasks/TASK-045/reports/final-report.md`; run started 18:02:09 ICT on `main@acabd21` after HARD BOOTSTRAP.
- **Workers:** two AGY Gemini read-only CLI jobs dispatched in parallel; W1 completed, W2 timed out with partial output. Nexus independently reconciled decisions against current repository and GitHub.
- **Skill inventory:** 49 -> 47; two redundant legacy skills retired with Git recovery retained. Kept Microsoft Foundry (unique content/dependencies), Impeccable, Thai language skill, locked brand docs. BRAND/DESIGN are now compatibility summaries under locked V2 owner.
- **Local Git housekeeping:** nine validated squash-merged task branches retired; only `main` and `recovery/TASK-040-main-pre-ff` retained, stash/backups untouched.
- **Open PR:** GitHub #2 Ads conversion tracking (unrelated, no merge/deletion of its validation folder). TASK-031..035 old headers are historical, not active-state proof.
- **Gate:** PR #16 MERGED at main@7b7daa0; Vercel production READY (dpl_GqSjFewqiLw5ApeXG9SE9UHAkpBZ); live Home 390px/1440px HTTP 200, nav and overflow smoke PASS. Working tree clean after PR #16 sync. This follow-up closure changes documentation only. No Hero/source behavior change.

---

# HISTORICAL HANDOFF — 2026-10-10 (TASK-044 DOCUMENTATION AUDIT)

**Current task:** TASK-044 — documentation and plan-state audit completed; see `.tasks/TASK-044/reports/final-report.md`.
**Git baseline at audit:** main@e453eb3 (initially clean; one root worktree).
**Unmerged GitHub work:** PR #2 `feat/openai-ads-conversions` remains OPEN, unrelated to documentation cleanup. PR #1 and #3–14 are MERGED.
**Historical task statuses:** TASK-031–035 have older READY/IN_PROGRESS text; do not treat these headers as current Git truth without reconciling later PRs.
**Skill/doc decisions:** Preserve canonical Context Index, Constitution, Visual Language and Thai UX skill. BRAND.md and DESIGN.md have live skill references. Three questioned skills are candidates for separate deprecation/consumer review; nothing deleted. Owner-approved cleanup is limited by evidence and preservation gates.
**Next bounded step:** reconcile exact references and consumers of redundant skill/docs before any removal; PR #2 remains a separate business/release decision.

---

# HISTORICAL HANDOFF — 2026-10-10 (TASK-043 RELEASE VERIFIED)

**Current task:** NONE — TASK-043 VERIFIED_MERGED_AND_DEPLOYED.
**Prior task:** TASK-042 — Read-only Home Copy/Navigation audit COMPLETE; evidence in `.tasks/TASK-042/reports/final-report.md`.
**Current Git:** main@40edf3a (matches origin/main); PR #13 squash merged.

- Constitution-ordered rendered navigation is now Home, Stories, About, Experience, Contact. Single source of truth: `src/config/navigation.ts`; no Hero or site-copy changes.
- On exact local candidate, `npm run lint`, `npm run build`/TypeScript PASS; localhost:3410 Chrome QA at 390x844 and 1440x900 confirms five labels, Contact #final-cta, no horizontal overflow or header collision.
- Verified screenshots ignored under `.runtime-captures/lumina/TASK-043/`; temporary server stopped.
- Release state: **VERIFIED PRODUCTION** — PR #13 merged, Vercel production READY deployment dpl_2NehhvkLXSozuBvvoyMT7MEffAGX at exact main@40edf3a. Live https://lumina-studio-iota-ten.vercel.app/ HTTP 200, five links PASS at mobile 390px and desktop 1440px, no horizontal overflow.
- Next bounded task after release: non-Hero bilingual copy options; Hero remains FROZEN. 21st.dev animation references remain deferred in `docs/ROADMAP.md`.

---

# HISTORICAL HANDOFF — 2026-10-10 (TASK-041)

**Current Active Task:** NONE — TASK-041 documentation-only references and Phase 1 sequencing recorded.
**Decision:** LOCAL_ROADMAP_REFERENCES_SAVED / NO_APP_CHANGE / NOT_DEPLOYED.
**Canonical roadmap:** `docs/ROADMAP.md`; task record: `.tasks/TASK-041/reports/final-report.md`.

- Stored verified 21st.dev bookmarked component links in the existing ROADMAP as deferred design references, not approved implementation.
- Phase 1 next bounded task: inspect current English-heavy copy and Thai/English consistency against brand locks and actual Home layout; propose changes before implementation. Hero remains FROZEN.
- Shipped MiniAlbum, StoryImageFocus and ExperienceSequence stay unchanged. No new component packages, animation prototypes, production changes, or deployment.
- Source inspected on main@d0e98e9 with initially clean working tree. TASK-041 documentation edits remain local until explicitly reconciled/committed.

---

# HISTORICAL HANDOFF — 2026-10-09 (TASK-040)

**Current Active Task:** NONE — TASK-040 local repository reconciliation complete.
**Decision:** LOCAL_MAIN_FAST_FORWARD_VERIFIED, 0408de5; preserved prior changes without replay.
**Canonical report:** `.tasks/TASK-040/reports/final-report.md`

- Root main fast-forwarded eight commits from eba90db to 0408de5, matching origin/main; local working tree clean.
- Before mutation, SHA-256 verified 744 copied files, plus 982 original tracked deletions recorded; recovery at `D:\project_backups\lumina-studio\TASK-040-pre-main-ff-20261009-2006`.
- Git stash `e84ce4b6` and recovery branch `recovery/TASK-040-main-pre-ff` preserve all earlier differences.
- Old TASK-035 release worktree safely retired after backup of its only changed AGENTS.md and verified squash patch equivalence.
- Isolated exact-candidate npm ci, lint, Next 16.4.0 build/TypeScript/static routes and production npm audit (0 vulnerabilities) PASS.
- Previous local Fastwork/config differences remain recoverable in backup/stash but were not promoted. Existing root dev server was not restarted.

---

# HISTORICAL HANDOFF — 2026-10-09 (TASK-039)

**Current Active Task:** NONE — TASK-039 implementation and production released.
**Decision:** VERIFIED_MERGED_AND_DEPLOYED; GitHub PR #9 squash `e1552631e2c02915ba45969223203671a17b31d4`.
**Canonical report:** `.tasks/TASK-039/reports/final-report.md`

- Mini Album keyboard handling now includes Escape from toggle or open rail, focus restoration, Tab reachability and ArrowRight horizontal navigation.
- Desktop/mobile keyboard QA and 4/4 Home/Fastwork regression PASS; prior TASK-038 Image Focus remains PASS.
- Next.js lint/build/TypeScript PASS; production security audit 0 vulnerabilities.
- Vercel production deployment `dpl_DGZm16JQKwSjgMhz2iYWfXY9X4Eb` READY; Home and Fastwork HTTP 200.
- Ignored QA evidence preserved at `D:\lumina-studio\.runtime-captures\lumina\TASK-039-*-20261009`, 14 SHA-256 verified files.
- Original mixed/dirty local main and old dirty TASK-035 worktree intentionally preserved. No new package or 21st.dev MCP registration.

---

# HISTORICAL HANDOFF — 2026-10-09 (TASK-038)

**Current Active Task:** NONE — TASK-038 completed.
**Decision:** MERGED_AND_DEPLOYED; verified GitHub PR #7 and Vercel production `cc5b009`.
**Canonical report:** `.tasks/TASK-038/reports/final-report.md`

- Selected Stories now supports an accessible photo-focus dialog with Escape, close button, focus return and loaded-image handling.
- Browser QA desktop/mobile and /fastwork regression PASS; current candidate lint/build/TypeScript PASS and production audit 0 vulnerabilities.
- Original local main remains dirty with unrelated Owner/provenance data; do not reset or clean it blindly.
- Ignored QA captures archived at `D:\lumina-studio\.runtime-captures\lumina\TASK-038-release-20261009` and `TASK-038-page-smoke-20261009`.
- No 21st.dev MCP registration or API credits required for this bounded improvement.

---

# HISTORICAL HANDOFF — 2026-10-09 (TASK-037)

**Current Active Task:** NONE — TASK-035, TASK-036 and TASK-037 have been released.
**Decision:** TASK-037 MERGED_AND_DEPLOYED; production verified 2026-10-09.
**Authoritative report:** `.tasks/TASK-037/reports/final-report.md`

- Final lint/build/TypeScript validation: PASS on the current candidate.
- Exact runtime gate passed at desktop 1440×900 and mobile 390×844.
- No overflow, broken images, console/page errors, or mobile anchor obstruction.
- MiniAlbum opens 5 frames and closes via disclosure toggle; Escape-close is optional polish, not a blocker.
- CodeGraph is up to date at 200 files / 3,402 nodes / 8,610 edges.
- TASK-036 merged in PR #4 (`112d7de`) and TASK-037 merged in PR #5 (`f6157a4`); Vercel production for TASK-037 is READY.
- Canonical local `main` retains unrelated pre-existing dirty files; do not reset or stage these without task-specific reconciliation.

---

# CURRENT HANDOFF — 2026-10-08 (TASK-035)

**Current Active Task:** TASK-035 — Next.js Security Upgrade Gate
**Decision:** PRODUCTION DEPENDENCY SECURITY GATE PASS / READY_FOR_OWNER_REVIEW

- `next` + `eslint-config-next`: 16.2.6 → 16.4.0
- `npm audit --omit=dev`: 0 vulnerabilities
- lint/build/TypeScript: PASS
- desktop/mobile mini-album runtime: PASS
- Fastwork desktop/mobile runtime integrity: PASS; generic capture anchor finding is a route-checklist mismatch
- full dev audit still has 19 High tooling findings; separate from production bundle
- commit/push/deploy not performed by TASK-035

Recommended follow-up: TASK-036 Dev Toolchain Security & QA Harness Cleanup.

---
# CURRENT HANDOFF — TASK-035 (2026-10-08)

**Current Active Task:** TASK-035 — Next.js Security Upgrade Gate
**Status:** READY_FOR_OWNER_REVIEW

- next / eslint-config-next upgraded 16.2.6 → 16.4.0.
- production `npm audit --omit=dev`: 0 vulnerabilities.
- lint/build/TypeScript: PASS.
- MiniAlbum desktop/mobile runtime regression: PASS.
- Fastwork desktop/mobile runtime smoke: no broken images, overflow, console/page/network errors.
- Full npm audit still has 19 High findings in dev/tooling chains; track separately.
- No deploy, commit, or push performed for TASK-035.

Authoritative report: `.tasks/TASK-035/reports/security-gate.md`.

---
# CURRENT HANDOFF — 2026-10-08

**Current Active Task:** TASK-034 — Full Project Audit and Release Gate
**Current Decision:** APPROVED_WITH_NOTES_FOR_COMMIT_PUSH / NOT APPROVED FOR NEW PRODUCTION DEPLOY

Latest completed/ready work:
- TASK-032: Moments Between mini-album prototype validated on desktop/mobile, keyboard, reduced-motion, build and scoped lint.
- TASK-033: `.agent/skills` curated cleanup; duplicate nesting removed, Gridgeist promoted to root source, computer-use bridge configured for `gemini-3.5-flash-lite`.
- TASK-034: Full audit completed. `npm run lint` scope corrected to `app src scripts`; lint/build/diff-check pass.

Immediate P0 next action:
- TASK-035: upgrade `next` + `eslint-config-next` 16.2.6 → 16.4.0 and rerun production dependency audit + browser regression before intentional deploy.

Important unresolved source state:
- `.serena/project.yml` is locally modified by Serena and is not part of the approved commit.
- `app/fastwork/` and `src/config/fastwork.ts` remain untracked and are excluded until production/local Fastwork source is reconciled.

Authoritative audit: `.tasks/TASK-034/reports/full-audit.md`.

---
# AI HANDOFF

## Project

LUMINA Studio

**Current Active Task:** TASK-030 (Micro Lock Polish) - COMPLETE
**Overall Status:** PASSED / READY FOR DEPLOY

## What Was Just Done
1. **TASK-026**: Rhythm and typography spacing polish.
2. **TASK-027**: Copy and tone alignment.
3. **TASK-028**: Final Visual QA, Build validation, Lint validation, and Evidence Capture.
4. **TASK-030**: Micro Lock Polish (Header clipping fix and footer contact labels).

All visual requirements have been met. The site builds, lints, and captures successfully. Ready for Vercel production deploy.

## Latest Completed Scope

TASK-028: Final visual QA pass completed. Verified responsiveness, image loading sequences, and typography scaling across viewport breakpoints. Build and lint passes confirmed. Status: READY.

TASK-027: Copy Polish. Replaced agency/UX internal language and generic wedding template phrasing with warm, documentary-style human copy. Verified with local desktop/mobile visual capture.

TASK-026: Rhythm polish implemented strictly for the Moments Between section to improve mobile spacing and heading flow. Verified with local desktop/mobile visual capture.

TASK-025: Image sequence logic updated to use the approved narrative sequence from the image audit. Verified with local desktop/mobile visual capture.

TASK-024: Mobile hero balance polished without redesign. Mobile-only hero overlay density was softened slightly, the copy block was given more breathing room below the fixed header, and subtitle/body/CTA spacing was tightened so text and photograph sit together more calmly on first screen. Validation passed with local evidence captured under `.runtime-captures/lumina/TASK-024/`.

TASK-023: Conservative Thai typography polish completed under GPT-5.5 "Softer Editorial Thai" approval. Mobile hero headline scale/line-height was softened slightly, section Thai headline weight/rhythm was relaxed, and supporting Thai copy line-height was tuned without redesigning the page, changing imagery, or altering layout structure. Validation passed with local evidence captured under `.runtime-captures/lumina/TASK-023/`.

TASK-022: Identity lock review completed for the final homepage polish sequence. Existing evidence from reports and `TASK-021-TEST` runtime captures was reviewed and the current direction was locked as Warm Premium / Quiet Luxury / Human Documentary with Stories-before-Portfolio preserved. Approved polish targets for the next sequence are Thai typography, mobile hero balance, image ordering logic, rhythm spacing, and quiet copy refinement. No website code changed.

LUMINA-V2-QUIET-POLISH-001: Visual fine-tuning and premium editorial layout adjustments on the home page (headline visual weight reduced, warmer/softer hero overlay, relaxed line heights/spacing, "de-cardified" Selected Stories grid with stagger, and asymmetric collage styling in Moments Between).

LUMINA-V2-HOME-CONSTITUTION-001: Rebuilt the Home page from the locked LUMINA V2 Constitution, Visual Language, and Home Page Blueprint.

Implemented Home section order:
1. Hero
2. What We Notice
3. Selected Stories
4. The Moments Between
5. Behind The Lens
6. Kind Words
7. Experience
8. Final CTA

Validation:
- Passed: `npm run build`
- Passed: `npm run lint` with existing warnings only in copied skill/external folders
- Browser QA: desktop and mobile local render verified; section order matches blueprint; no horizontal overflow; all rendered images load after scroll; no visible Home text matches `Portfolio`, `Investment`, `Package`, `Price`, or `Gallery`

## Current Phase

Phase 1 — Landing Page

## Art Direction Lock

Approved:
- Cinematic Sequence
- Reactive Light Frame
- Editorial Minimalism
- Photography-first Hero

Rejected by QA:
- Lens Light Sweep
- Heavy Optical Overlays
- Hero Focus Blur In
- Heavy Glassmorphism
- Large Cursor Spotlight
- WebGL / Three.js / Canvas

Core Principle:
Photography First.
Motion Supports Photography.
Motion Must Never Become The Subject.

## Hero Status

Status: FROZEN

Approved Hero Stack

* Cinematic Sequence
* Reactive Light Frame
* Editorial Breathing Frame Premium

Design Principle

Photography First.
Motion Supports Photography.
Motion Must Never Become The Subject.

Future Rule

Further Hero redesign requires explicit user approval.

Hero experimentation is closed.
Future visual exploration should focus on:

* Portfolio Experience
* About Storytelling
* Contact Experience

## Current Status


Phase 2 limited Human Documentary redesign implemented through the existing config system.

## Repository State

Bootstrap: Completed

Next.js: Initialized

Tailwind: Initialized

Deployment: Completed

Production URL: https://lumina-studio-iota-ten.vercel.app

## Completed

- Project root structure
- Core documentation
- Skill activation file
- Agent prompt files
- Report templates
- Phase 1 single-page landing page foundation
- SEO metadata
- Responsive premium editorial layout
- Reserved hero focal area for future Crystal Experience
- Owner identity: ToTo Therdsak
- Contact trust details: phone, Line, Facebook
- Service categories for weddings, ordinations, house blessings, ceremonies, family celebrations, and editorial portraits
- Placeholder-only portfolio slots prepared for future real photos
- About section portrait using `docs/Profile Pic.jpg`
- Refined editorial About copy and photographer quote
- Refined contact typography and footer balance
- Subtle portfolio card hover refinement
- Four selected portfolio images integrated from `docs/pic/`: `docs/pic/2/IMG_1718.jpg`, `docs/pic/2/IMG_1754.jpg`, `docs/pic/2/PTO_8484.jpg`, `docs/pic/1/125.jpg`
- Portfolio cards now use real images via Next.js Image while preserving single-page scope
- Brand lockup refinement: Updated LUMINA wordmark in header and footer to include a small italic gold “Studio” mark
- Hero visual upgrade: `docs/pic/2/IMG_1754.jpg` added as a darkened editorial image layer behind the Future Crystal concept label
- Small “Studio” mark increased slightly in header and footer
- Visual config system added under `src/config/`
- Brand, hero image, portfolio images, profile image, contact details, typography tokens, and active contact variant are config-driven
- Visual audit created at `reports/visual_audit.md`
- Browser MCP (Puppeteer) tool installed for agent visual QA and automation
- Captured full-set section screenshots (Home, Story, Work, Studio, Contact) at 1440x900
- Captured full-page desktop screenshot at 1440x900
- Repaired lint errors in utility scripts (LUMINA-FIX-001)
- Completed photography curation and ranking (QA-013)
- Finalized Hero image selection: Candidate B (IMG_2677) after visual comparison (QA-014)
- Implemented lightweight client-side cinematic slideshow sequence in Hero section using 5 real photography assets with clean crossfade, keyframes, DOM pruning, and prefers-reduced-motion media query validation (LUMINA-HERO-CINEMATIC-001)
- Refactored prefers-reduced-motion detection inside HeroSlideshow component to use a clean lazy state initializer, removing the temporary setTimeout handler (LUMINA-CLEANUP-001)
- Implemented configurable, mouse-reactive light frame layout variants, gold lens mask, and hardware-accelerated viewport parallax shifts updating at 120fps with mobile and prefers-reduced-motion fallbacks (LUMINA-INTERACTION-001)
- Replaced the subtle reactive frame with the Lens Light Sweep experience, adding a highly-visible optical viewfinder streak utilizing linear gradients, mix-blend-mode, and hardware-accelerated transforms (LUMINA-INTERACTION-002)
- Established the Art Direction Lock listing approved/rejected features and core principles (LUMINA-ART-DIRECTION-LOCK-001)
- Implemented the LUMINA config system by moving configurable website data (content, portfolio, services, navigation, contact) and motion behavior out of components into dedicated config files without adding new dependencies (LUMINA-CONFIG-SYSTEM-001)
- Implemented limited Human Documentary redesign through existing config files: visible Luxury / Premium / Crystal / Exclusive direction removed from app copy and metadata; portfolio now uses verified `Portfolio/TOP10` photography assets; Hero changed only through config-controlled copy, image sequence, and motion values; no Hero structure redesign, routing change, backend, database, or dependency added.
- Refined landing page toward premium modern documentary photography, including typography (Inter & IBM Plex Sans Thai Looped), bilingual copywriting, and hero portrait layout with rotating microcopy (LUMINA-REFINEMENT-001)
- Executed user-authorized override of Art Direction Lock to update Hero and Gallery copy to English ("Storytelling, Authentic, Minimal, Warmth, Memories"), slowed down global motion, added scroll snapping, and updated image curation from Portfolio 1-5 (LUMINA-REDESIGN-001).
- Designed and integrated an Interactive Portfolio Album component to support curated narrative image sequencing with slow, seamless opacity transitions and layout refactoring (LUMINA-PORTFOLIO-CURATION-001).
- Executed LUMINA-HOMEPAGE-NARRATIVE-POLISH-001: Rebalanced the homepage hero by increasing photograph brightness, reducing overlay density, and lowering focal-grid opacity while preserving the Human Documentary Photography direction. Reduced repeated copy phrasing across the portfolio, services, and about sections. Status: APPROVED_WITH_NOTES.
- Executed LUMINA-DEPLOYMENT-EXECUTION-001: Deployed to production using `vercel --prod`. Status: DEPLOYED.
- Executed LUMINA-POST-DEPLOY-VERIFICATION-001: Verified production URL (https://lumina-studio-iota-ten.vercel.app/) matches the approved local candidate. Desktop and mobile visual QA passed with no stale copy. Status: PASS.
- Executed TASK-000: Created AI Workflow Ready task scaffold under `.tasks/` directory. Status: COMPLETED.
- Executed TASK-001: Created unified context index (`docs/CONTEXT_INDEX.md`), skills registry (`docs/SKILL_SOURCE_REGISTRY.md`), and sync plan (`docs/SKILL_SYNC_PLAN.md`). Removed STT correction scope to external project `D:\stt_typing`. Status: COMPLETED.
- Executed TASK-002: Performed dry-run comparison and backup mapping of mirror folders without performing deletions or mutations. Status: COMPLETED.
- Executed BATCH-001 / TASK-003-006: Backup and dry-run sync workflow created. Status: COMPLETED.
- Executed BATCH-002 / TASK-007-010: `.gemini/skills/skills` duplicate cleanup and safe sync applied without `-ForceDeleteUnknown`. Status: COMPLETED.
- Executed BATCH-003 / TASK-011-013: Final context verification and mirror verification. Status: COMPLETED.
- Executed TASK-014: Duplicate `read-first-governance/read-first-governance` cleanup documented and executed. Status: COMPLETED.
- Executed TASK-016: Imported and adapted `computer-use-runtime-bridge` and `windows-ui-review-runtime` skills from `D:\stt_typing` to root `skills/` folder, updated skill registry and context index maps, and synced environment mirrors. Status: COMPLETED.
- Executed TASK-017: Clarified runtime review skill roles for `computer-use-runtime-bridge` and `windows-ui-review-runtime`, and added python/capture ignore rules to `.gitignore`. Status: COMPLETED.
- Executed TASK-030: Verified header Let's Talk button wrapping and added white-space: nowrap fix. Polished footer contact formatting to "Phone {value}", "LINE {value}", "Facebook {value}" instead of raw metadata format. Checked mobile typography and intentionally left it untouched. Status: COMPLETED.

## Current Architecture State
- Current skill structure is closed and clean, featuring 47 project skills.
- `skills/` is the source of truth.
- `.gemini/skills`, `.opencode/skills`, `.agent/skills` are mirrors/adapters.
- Active Model and Worker Policy is defined in `docs/LUMINA_MODEL_AND_WORKER_POLICY.md`.
- Working tree contains newly added skills, updated docs, and task packet under `.tasks/TASK-016/`.

## Pending

- None.

## Next Task

- Await owner's instruction for the next active work slice.


---
## TASK-037 — Homepage Interaction Story Map (2026-10-09)

Status: READY_FOR_OWNER_REVIEW.

Selected Stories now uses a restrained editorial heading with two inline stills and an asymmetric story spread. Moments Between remains the only stacked mini album. Experience now links four process steps to one changing documentary still and reserves future micro-cinematic replacement slots.

Validation passed: lint, build, TypeScript, scoped diff-check, desktop/mobile overflow and broken-image checks, Experience interaction, reduced motion, CodeGraph sync. No commit, push, or deploy.
