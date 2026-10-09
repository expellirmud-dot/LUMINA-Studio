[Reading 85 lines from start (total: 85 lines, 0 remaining)]

# TASK-037 — Homepage Interaction Story Map Design Pass

STATUS=READY_FOR_OWNER_REVIEW
FINAL_REVIEW=PASS_WITH_NOTE
FINAL_REPORT=.tasks/TASK-037/reports/final-report.md
OWNER_AUTHORIZATION=APPROVED_IN_CHAT_2026-10-09
RISK_LEVEL=L2_FRONTEND_DESIGN
COMMIT_ALLOWED=OWNER_STANDING_DELEGATION
PUSH_ALLOWED=OWNER_STANDING_DELEGATION
DEPLOY_ALLOWED=OWNER_STANDING_DELEGATION
AUTHORITY_SOURCE=AGENTS.md#Owner Standing Delegation

## Goal

Move the LUMINA homepage forward without waiting for future generated video assets.

Design the page around restrained discovery moments instead of a gallery or effect showcase.

## Startup Report

Project State:
- Homepage source files in this task are currently clean relative to HEAD.
- Working tree is dirty from separate TASK-035, TASK-036, Fastwork, Serena, and skill-migration work. Those changes are protected and out of scope.

Current Phase:
- Phase 1 — Premium Photography Landing Page / Human Documentary direction.

Active Skills:
- LUMINA_BOOTSTRAP
- LUMINA_STARTUP
- LUMINA_Frontend-Visual-Design
- interaction-design
- thai-language-and-ux-writing for owner communication

Serena:
- Health check reached "Health check completed successfully".
- Windows CP874 print failure occurs only after successful checks when Serena tries to print the checkmark.

CodeGraph:
- Existing graph available; refresh after implementation before relying on final relationship state.

Expected Files To Change:
- app/page.tsx
- app/globals.css
- src/config/content.ts
- src/config/portfolio.ts
- src/components/ExperienceSequence.tsx
- .tasks/TASK-037/**
- reports/visual_audit.md
- AI_HANDOFF.md
- reports/implementation_report.md

Protected / Forbidden:
- Hero structure, hero image, hero copy, hero motion
- app/fastwork/**
- src/config/fastwork.ts
- package.json / package-lock.json / next-env.d.ts
- .serena/project.yml
- TASK-035 / TASK-036 implementation state
- backend, database, auth, CMS, booking, API, payment, WebGL, Three.js, Canvas
- audio/video generation in this task

## Design Rules

1. Hero stays frozen.
2. What We Notice stays intentionally still.
3. Selected Stories becomes an editorial threshold: typography and small embedded stills, not another gallery effect.
4. Moments Between remains the only stacked mini-album interaction.
5. Brand Bridge, Behind The Lens, Kind Words, Final CTA remain calm.
6. Experience gets one distinct interaction: a still image changes with the four process steps.
7. Future micro-cinematic media must be able to replace a still later without redesigning the section.
8. No autoplay audio/video now.
9. Respect prefers-reduced-motion.
10. No new dependency.

## Validation

- npm run lint
- npm run build
- desktop 1440x900 capture
- mobile 390x844 capture
- no horizontal overflow
- no broken images
- experience keyboard/focus/tap behavior
- reduced-motion transition suppression
- git diff --check
- CodeGraph refresh
- owner review before commit/push/deploy

[executed on device: Expellirmud (0d053191-03bd-4854-a812-769681eae04e)]