# TASK-031 — Fastwork Portfolio Landing Page

DOCUMENT_ROLE=DEVELOPMENT_TASK_PACKET
ACTOR_PLANE=DEVELOPMENT
STATUS=ISSUED / READY_FOR_WORKER
OWNER_AUTHORIZATION=CREATE_FASTWORK_LANDING_PAGE_ONLY
IMPLEMENTATION_AUTHORITY=THIS_TASK_SCOPE_ONLY
COMMIT_ALLOWED=false
PUSH_ALLOWED=false
DEPLOY_ALLOWED=false
FINAL_GATE=OWNER_REVIEW_REQUIRED

## Context

The Owner has approved a narrow new route for LUMINA Studio to support the Fastwork photography service. This is an intentional, limited exception to the current single-homepage Phase 1 boundary: add **one isolated portfolio landing page at `/fastwork`** without redesigning or changing the existing Home page.

The page is intended to be shared with prospective Fastwork clients as professional portfolio evidence while keeping all inquiry and hiring activity inside Fastwork.

The evening Codex workflow discussed around 19:00 on 2026-09-01 is preserved here as a staged timeline: **read/context -> curate/spec -> implement -> validate -> Owner preview -> only then consider commit/deploy**.

## Primary Goal

Create a polished, photography-first Fastwork portfolio landing page at:

`/fastwork`

The page must make a prospective client understand within seconds that LUMINA can cover:

- Wedding photography
- Ordination photography
- Ceremony / family ritual photography
- Event / celebration photography
- Portraits and human moments
- Detail / atmosphere coverage

The page should feel like the existing LUMINA brand, not like a generic marketplace microsite.

## Non-Negotiable Safety Boundary

The `/fastwork` route must contain **no external personal contact path**.

Forbidden on `/fastwork`:

- Phone number
- LINE ID or LINE link
- Facebook link
- Email address
- Social links
- External contact form
- Buttons or navigation that expose the Home page contact section
- A logo/header link that sends the client back to the Home page if that would expose external contact details
- Any wording inviting the client to contact outside Fastwork

Required closing message should communicate the equivalent of:

`สำหรับการติดต่อ สอบถามรายละเอียด และจ้างงาน กรุณาดำเนินการผ่านระบบ Fastwork`

Do not alter the existing Home contact system as part of this task.

## Visual Direction

Preserve the existing LUMINA identity:

- Photography first
- Human Documentary
- Warm Premium / Quiet Luxury
- Editorial spacing
- Motion restrained and supportive only
- Reuse the existing design/config system where practical
- No heavy glassmorphism, WebGL, Three.js, Canvas, optical gimmicks, or new visual language

The existing Home Hero remains frozen and must not be redesigned or repurposed.

## Image Curation Direction

Use only real existing LUMINA portfolio images. Do not generate substitute photography.

Starting shortlist for `/fastwork`:

1. `/images/portfolio/wedding-ceremony-v1/PTO-556.jpg`
2. `/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp`
3. `/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp`
4. `/images/portfolio/phra-louis-v1/PTO-296.jpg`
5. `/images/portfolio/2569-03-09/A M/PTO_5779.jpg`
6. `/images/portfolio/2569-03-09/A M/PTO_5723.jpg`
7. `/images/portfolio/lumina-harvest-v1/000002_detail_IMG_0637.webp`
8. `/images/portfolio/wedding-party-trial/hero_5/340.jpg`
9. `/images/portfolio/wedding-party-trial/hero_5/PTO_3041.jpg`
10. `/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp`

Worker may refine the final 8–10 image sequence only after visual inspection. Any replacement must come from the existing repository portfolio and the final report must state what changed and why.

Target narrative sequence:

`Wedding hero -> Wedding/Ceremony/Ordination proof -> Family emotion feature -> Detail/Atmosphere/Celebration grid -> Service/Equipment/Delivery -> Fastwork-only notice`

Avoid multiple near-duplicate frames from the same moment.

## Required Content

### Hero

Purpose: establish professional photography capability immediately.

Suggested direction:

- LUMINA Studio brand
- Clear Thai service headline for wedding / ordination / ceremony / event photography
- Short documentary-style supporting line
- A portfolio-focused CTA that scrolls within `/fastwork` only
- No contact CTA

### Portfolio Proof

Show a curated mix rather than a long archive.

The page should prove:

- people / emotion
- ceremony coverage
- ordination coverage
- wedding coverage
- movement / celebration
- detail photography
- venue / atmosphere

### Service Scope

Use concise Thai copy covering, as appropriate:

- งานแต่งงาน
- พิธีสงฆ์ / ขันหมาก / หมั้น / รับไหว้ / รดน้ำสังข์ / งานเลี้ยง
- งานบวช / ปลงผม / อาบน้ำนาค / ฉลองไตร / รับนาค / อุปสมบท
- งานพิธี / งานครอบครัว
- งานอีเวนต์ / งานเลี้ยง
- งานรับปริญญา / งานบุคคลตามตกลง

Do not claim services or experience not supported by existing project evidence.

### Equipment

Display the recorded equipment inventory accurately:

- Nikon D750 x2
- 24–70mm f/2.8
- 85mm f/1.8
- LED 300W x2
- LED 200W x2

Do not add flash/speedlight or other equipment that is not recorded.

### Delivery

Communicate the expected delivery concept:

- Selected photographs
- Exposure / color adjustment
- High-resolution JPEG
- Google Drive delivery by agreement

Do not expose a personal Drive portfolio URL on this page.

### Fastwork Boundary Notice

The final section must make it explicit that inquiry, job discussion, and hiring should proceed through Fastwork.

Do not include external contact details anywhere in the page source, visible content, metadata, or links for this route.

## Allowed Files

Worker may modify/create only the minimum files needed for this route, expected to include:

- `app/fastwork/page.tsx`
- `app/fastwork/**` if a route-local style/component file is justified
- `src/config/fastwork.ts` or equivalent route-specific config if useful
- existing shared style/config files only when necessary and only if the Home page remains visually unchanged
- `.tasks/TASK-031/**`
- `AI_HANDOFF.md`
- `reports/implementation_report.md`
- `reports/visual_audit.md`

If a different existing shared component must be touched, stop and document why before expanding scope.

## Forbidden Files / Changes

- No redesign of `app/page.tsx`
- No change to Home Hero concept or image selection
- No change to existing Home contact details
- No backend
- No API routes
- No database
- No auth
- No booking system
- No payment
- No CMS
- No client gallery system
- No unrelated dependency additions
- No portfolio source-image deletion or destructive asset changes
- No production deploy under this task without a later explicit Owner approval

## Technical Requirements

- Follow the existing Next.js architecture.
- Reuse existing typography / visual tokens where practical.
- Keep content and image selection config-driven where reasonable; do not create a second competing config architecture.
- Use `next/image` for portfolio imagery.
- Preserve accessibility: meaningful alt text, keyboard focus, readable contrast, semantic headings.
- Responsive from 320px upward.
- No horizontal overflow.
- Images must use intentional crops on desktop and mobile.
- Avoid oversized page weight caused by unnecessary image loading; use sensible `sizes`, priority only where justified, and lazy loading for downstream images.

## Timeline / Execution Gates

### T0 — Context & State Check

- Read `AGENTS.md`, `PROJECT_RULES.md`, `LUMINA_CONFIG_SYSTEM.md`, `AI_HANDOFF.md`, latest implementation/visual reports, and this task packet.
- Confirm working tree state.
- Confirm no unrelated active task conflict.
- Stop if the workspace is unexpectedly dirty in a way that would mix scopes.

### T1 — Curate & Specify

- Inspect the proposed image shortlist and relevant contact sheets / current portfolio config.
- Select final 8–10 images.
- Decide crop/object-position for desktop and mobile.
- Write the final page section order and visible copy before implementation.
- Verify no visible or hidden external contact path is planned.

### T2 — Implement `/fastwork`

- Build the isolated route using the existing LUMINA design system.
- Keep Home untouched except for a truly necessary shared primitive change.
- Keep all calls-to-action internal to `/fastwork` or Fastwork-only explanatory text.

### T3 — Validate

Run at minimum:

```powershell
npm run build
npm run lint
```

Then perform real visual QA on desktop and mobile.

Required checks:

- `/fastwork` renders successfully
- all selected images load
- no horizontal overflow
- hero crop is strong on desktop and mobile
- ceremony / wedding / ordination / atmosphere variety is obvious
- no Phone / LINE / Facebook / Email / social/contact leakage
- no link returns the Fastwork visitor to the Home contact section
- Home page still renders without visual regression
- existing frozen Home Hero remains unchanged

### T4 — Owner Preview Gate

Stop and prepare evidence for Owner review.

Required evidence:

- Desktop `/fastwork` screenshot
- Mobile `/fastwork` screenshot
- Final image list and order
- Files changed
- Build result
- Lint result
- Contact-leak audit result
- Home regression check
- Remaining known issues, if any

Do **not** commit, push, merge, or deploy yet.

### T5 — Post-Approval Only

Only after explicit Owner approval:

- freeze candidate
- commit/push if authorized
- perform final Controller review
- deploy to Vercel production if separately authorized
- verify the production `/fastwork` URL

## Acceptance Criteria

TASK-031 is implementation-ready for Owner preview when all are true:

1. `/fastwork` exists and renders as a professional LUMINA portfolio landing page.
2. Final gallery contains approximately 8–10 real portfolio images with intentional sequencing.
3. A client can immediately see Wedding + Ordination + Ceremony + Event/Atmosphere capability.
4. Equipment list is accurate.
5. Delivery information is clear.
6. No external contact path or personal contact data is exposed on `/fastwork`.
7. Home page and frozen Home Hero are unchanged.
8. Desktop and mobile visual QA pass.
9. `npm run build` passes.
10. `npm run lint` passes, or only previously known unrelated warnings remain and are documented.
11. Owner preview evidence is produced.
12. No commit/push/deploy occurs before the explicit post-preview gate.

## Stop Conditions

Stop and report instead of guessing if:

- A requested image is missing/broken.
- The final page would require altering the frozen Home Hero.
- Fastwork-safe presentation would require exposing external personal contact information.
- A major shared-style change would risk Home regression.
- Build fails for a task-related reason that cannot be fixed within this scope.
- The implementation needs a new dependency or architecture change.
- A subjective art-direction decision materially changes the approved LUMINA identity.

## Worker Final Report Requirements

Report:

- exact files changed
- final section order
- final image list/order and any shortlist substitutions
- desktop/mobile visual observations
- contact-leak audit
- Home regression audit
- build result
- lint result
- unresolved risks
- confirmation that commit/push/deploy were not performed
- explicit `READY_FOR_OWNER_PREVIEW` or `BLOCKED`
