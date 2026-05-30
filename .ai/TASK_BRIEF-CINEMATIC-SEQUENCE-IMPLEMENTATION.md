# TASK BRIEF — CINEMATIC SEQUENCE IMPLEMENTATION

## Task ID

LUMINA-HERO-CINEMATIC-001

## Status

APPROVED WITH LIMITS

## Assigned Model

Gemma 4 / Gemini Coding / GPT-5.5 Codex if needed

## Objective

Implement a lightweight cinematic hero image sequence for LUMINA Studio using five real photographs.

The goal is to replace the single static Hero image with a slow editorial crossfade sequence while preserving the current layout, copy, typography, and Phase 1 simplicity.

## Required Read First

* AGENTS.md
* GEMINI.md
* .ai/ARCHITECTURE_STATE.md
* .ai/SKILL_PROFILES.md
* .ai/TASK_BRIEF-CINEMATIC-SEQUENCE.md
* AI_HANDOFF.md
* reports/implementation_report.md
* reports/visual_audit.md
* skills/LUMINA_STARTUP/skill.md
* skills/LUMINA_CONFIG_CHANGE/skill.md
* skills/LUMINA_VISUAL_REVIEW/skill.md
* .mcp/serena.md
* .mcp/codegraph.md
* .serena/project.yml

## Serena Check

Confirm:

* Project is LUMINA Studio.
* Current phase remains Phase 1.
* No backend, database, auth, booking, dashboard, CMS, payments, API routes, Three.js, WebGL, or production canvas exists.
* Scope remains frontend-only.

## CodeGraph Check

Confirm:

* Hero is rendered from app/page.tsx.
* Hero image data comes from src/config/images.ts.
* Visual timing/config can live in src/config/visual.ts.
* No architecture rewrite is needed.

## Approved Files To Edit

* src/config/images.ts
* src/config/visual.ts
* src/components/HeroSlideshow.tsx
* app/page.tsx
* app/globals.css
* .ai/qa/TASK_REPORT-CINEMATIC-SEQUENCE.md
* reports/implementation_report.md
* AI_HANDOFF.md

## Forbidden Files / Areas

Do not edit:

* Portfolio layout
* Contact section
* About/Profile section
* app/layout.tsx unless absolutely required
* package.json
* package-lock.json
* backend
* database
* auth
* CMS
* booking
* dashboard
* API routes
* dependencies

## Image Sequence

Use exactly these five images:

1. Beauty
   docs/pic/2/IMG_1718.jpg

2. Ceremony
   docs/pic/2/IMG_0673.jpg

3. Family
   docs/pic/2/IMG_2232.jpg

4. Memory
   docs/pic/2/IMG_1159.jpg

5. Afterglow
   docs/pic/2/IMG_2677.jpg

## Implementation Requirements

### Component

Create:

src/components/HeroSlideshow.tsx

Rules:

* This must be a client component.
* Use useState / useEffect only inside this component.
* Do not convert app/page.tsx into a client component.
* Keep app/page.tsx as a Server Component.
* Use Next.js Image.
* No new dependencies.

### Motion

Use:

* slow crossfade only
* optional very subtle scale no more than 1.02
* no heavy Ken Burns
* no carousel controls
* no aggressive zoom
* no autoplay video
* no Three.js
* no WebGL
* no Canvas

### Reduced Motion

If prefers-reduced-motion is enabled:

* show first image only
* disable timed crossfade
* disable scale motion

### Performance

* First slide should preserve LCP as much as possible.
* Do not render unnecessary complex DOM.
* Keep implementation simple.
* No preloading system beyond normal Next/Image behavior unless already supported.

### Visual Rules

Do not change:

* Hero headline copy
* Hero left-side text layout
* Story section
* Portfolio section
* Contact section
* About/Profile section
* Footer

The image sequence should enhance the existing hero, not redesign the page.

## Validation Required

Run:

* npm run lint
* npm run build

If either fails:

* Stop
* Report exact error
* Do not attempt broad fixes unless explicitly approved

## Documentation Update

Update:

* .ai/qa/TASK_REPORT-CINEMATIC-SEQUENCE.md
* reports/implementation_report.md
* AI_HANDOFF.md

## Required Final Report

Return:

* Serena status
* CodeGraph status
* files changed
* implementation summary
* image sequence used
* reduced-motion behavior
* validation result
* risks
* next recommended QA task

## Success Criteria

* Hero displays a cinematic sequence using the five approved images.
* app/page.tsx remains a Server Component.
* HeroSlideshow owns all client-side timing logic.
* No new dependencies.
* lint passes.
* build passes.
* Phase 1 scope remains intact.
