# TASK-046 — Non-Hero Thai Documentary Copy, Phase 1
Status: LOCAL_VALIDATED / RELEASE_PENDING
Start (ICT): 2026-10-11 02:37
Git baseline: main@b053f7445f8495f98b6f9cd2638f1b6bb5dd3510, CLEAN; one root worktree.
Owner request: proceed with approved bounded Thai-copy editorial refinement based on supplied October 11 document and TASK-042 review. User-provided source text remains evidence/input, not a new policy owner.

## Goals / Checklist
- [x] HARD BOOTSTRAP Continuity, Kernel, Git, AGENTS.md and Context Index; existing task check.
- [x] Read current Home copy and locked brand/blueprint/Thai UX skill.
- [x] Independent read-only AGY CLI linguistic and UX/layout reviews in parallel (W1 partial timeout, W2 completed; Nexus verified).
- [x] Draft and implement concise Thai non-Hero copy for five designated sections and four Experience items.
- [x] Nexus as sole writer; existing canonical config only, plus language attributes in existing components.
- [x] Scoped diff, Hero/section preservation, lint/build/TypeScript, Chrome desktop/mobile, language attributes, anchor clicks/overflow PASS.
- [ ] Reconcile docs/status and close with scoped PR, merge and live production verification if passes.

## Allowed writes
src/config/content.ts non-Hero fields for sections named above; src/config/services.ts for 4-step Experience labels; app/page.tsx and src/components/ExperienceSequence.tsx for **language attributes only** on newly translated strings (screen-reader language correctness verified during candidate QA); task packet/reports; AI_HANDOFF.md, reports/implementation_report.md, reports/visual_audit.md and docs/ROADMAP.md for audit evidence/phase progress.
Forbidden: contentConfig.hero (all fields), current story card photos/order, selectedStories, Kind Words testimonial quote/credit, nav, app/page.tsx, CSS, animation, dependencies, contact hrefs, other apps. No new sections or third-party components.
No invented customer endorsements, photos, outcomes, prices, service promises or consent claims. Preserve current bilingual tone where deliberate. If Thai text cannot be read comfortably at both widths, stop rather than force redesign. Per Project Rules: Hero FROZEN.
