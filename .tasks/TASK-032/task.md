# TASK-032 — Moments Between Mini Album Prototype

DOCUMENT_ROLE=DEVELOPMENT_TASK_PACKET
ACTOR_PLANE=DEVELOPMENT
STATUS=ISSUED / IN_PROGRESS
OWNER_AUTHORIZATION=APPROVED_IN_CHAT_2026-10-08
RISK_LEVEL=L3_MOTION_LAYOUT_SENSITIVE
COMMIT_ALLOWED=true
PUSH_ALLOWED=false
DEPLOY_ALLOWED=false
FINAL_GATE=OWNER_VISUAL_REVIEW_REQUIRED

## Goal

Prototype the Owner-approved interaction principle:

`1 small animation point = 1 mini album`

Apply it only to the existing **The Moments Between** section on Home. Preserve the locked section order, Hero, navigation, contact flow, and overall Human Documentary / Quiet Premium identity.

## Design Intent

- One quiet stacked-photo object at rest.
- On click/tap, reveal a small 5-frame album.
- The album must read as one real story, not a mixed portfolio grid.
- Animation supports discovery only; it must not become an effect showcase.
- Use existing real LUMINA photography only.
- No new dependency.
- Reduced-motion support is mandatory.
- Mobile must remain usable from 320px upward.

## Approved Reference Direction

Inspiration was reviewed from the Owner's saved 21st.dev components:
- Motion Scroll Horizontal Gallery
- Layout Grid

Do not copy their visual language wholesale. Borrow only the interaction grammar: hidden photographic depth revealed through a small purposeful interaction.

## Image Story

Use a coherent ordination sequence from `public/images/portfolio/phra-louis-v1/`:
1. PTO-13.jpg — ceremonial establishing detail
2. PTO-101.jpg — family hair-cutting ritual
3. PTO-250.jpg — offering / elder relationship moment
4. PTO-296.jpg — water-blessing human moment
5. PTO-318.jpg — quiet portrait / closing beat

## Allowed Files

- `app/page.tsx`
- `app/globals.css`
- `src/components/MiniAlbum.tsx` (new)
- `src/config/portfolio.ts`
- `.tasks/TASK-032/**`
- `AI_HANDOFF.md` and rolling reports only after candidate passes validation

## Forbidden / Preserve

- No Hero redesign.
- No new homepage section.
- No changes to `/fastwork`.
- No backend/API/database/auth/booking/CMS/payments.
- No WebGL/Three.js/Canvas.
- No new npm dependency.
- Do not touch or clean unrelated existing dirty files:
  - `.serena/project.yml`
  - `app/fastwork/`
  - `src/config/fastwork.ts`

## Acceptance

- Resting state is quiet and clearly photographic.
- One click/tap reveals 5 coherent frames.
- Motion settles in roughly 0.8s with a slow, calm reveal and respects reduced motion.
- Keyboard-accessible toggle with `aria-expanded`.
- Desktop and mobile show no horizontal page overflow.
- `npm run build` passes.
- Scoped `npx eslint app src` passes.
- Runtime browser QA passes on Home.
- Stop for Owner preview; no commit/push/deploy.
