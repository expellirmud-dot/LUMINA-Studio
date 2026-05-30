# TASK BRIEF — LUMINA-INTERACTION-003-B

## Task ID
LUMINA-INTERACTION-003-B

## Status
Phase A — Brief / Scope Lock

## Objective
Implement "Editorial Breathing Frame Premium" — a subtle, tangible visual enhancement to the hero frame to make it feel like a premium gallery object.

## Project Identity Check
Project: LUMINA Studio
Phase: Phase 1
Task: LUMINA-INTERACTION-003-B
Result: PASS

## Scope
Enhance the hero frame with a slow, breathing rhythm and subtle luminosity. The goal is a high-end gallery feel without distracting from the cinematic photography sequence.

### Allowed Work
- Frame-only motion (breathing rhythm).
- Subtle corner luminosity / metallic edge feeling.
- Reuse existing architectural patterns for the hero frame.
- Reuse existing CSS transitions/animations for the breathing effect.
- Integration within existing hero components.

### Forbidden Work
- **No Image Modifications:** Do not touch the photography or slideshow logic.
- **No Typography Modifications:** Do not alter fonts, sizes, or layout.
- **No Optical/Lens Effects:** No lens flares, lens sweeps, optical streaks, or blurs.
- **No New Structural Parallax:** Do not implement new parallax logic.
- **No New Dependencies:** No external libraries.
- **No Heavy Tech:** No Three.js, WebGL, or Canvas.
- **No UI Overhaul:** Do not change the overall page structure.

## Required Read First
- AGENTS.md
- GEMINI.md
- AI_HANDOFF.md
- .ai/ARCHITECTURE_STATE.md
- .ai/PHASE_GATE_WORKFLOW.md
- reports/visual_audit.md
- reports/implementation_report.md

## Allowed Files to Edit
- app/globals.css (for new breathing animation keyframes)
- src/components/HeroSlideshow.tsx (or relevant Hero wrapper/frame component)
- src/config/visual.ts (for timing/luminosity constants)

## Forbidden Files
- app/page.tsx (unless strictly needed for wiring)
- package.json
- src/config/images.ts
- portfolio section
- contact section
- about section

## Additional Lock Rules

- **Frame Scale Limit:** Maximum scale 1.000 $\rightarrow$ 1.005. Never exceed 1.005. (Reason: Above this becomes visible motion).
- **Luminosity Limit:** Corner luminosity must remain visible only when actively observed. If visible during casual browsing: FAIL.
- **Motion Hierarchy Rule:** Photography $>$ Typography $>$ Frame Motion. Frame Motion must always be the weakest visual element.

## Implementation Requirements
- **Breathing Rhythm:** Implement a very slow, subtle scale or opacity pulse on the frame border/overlay (e.g., 1.0 to 1.005 scale or subtle glow).
- **Corner Luminosity:** Add a soft, metallic-feeling light gradient to the frame corners that subtly shifts with the breathing rhythm.
- **Tangibility:** The frame should feel "physical" and "premium," not like a digital overlay.
- **Performance:** Ensure animations use `will-change` and `transform` to maintain 60/120fps.
- **Accessibility:** Respect `prefers-reduced-motion` by disabling all breathing/luminosity effects.

## Validation Plan
1. **Visual Review:** Verify the frame feels "alive" but subtle.
2. **Interaction Check:** Ensure it does not clash with the existing Cinematic Sequence.
3. **Performance Check:** Confirm no layout shifts or frame drops.
4. **Accessibility Check:** Verify motion is disabled when `prefers-reduced-motion` is active.
5. **Technical Check:** `npm run lint` and `npm run build` must pass.

## Stop Conditions
- Build or lint fails.
- Motion becomes the subject (too aggressive).
-- Typography or images are accidentally shifted.
- Forbidden files are modified.

## Definition of Done
- Frame "breathing" and luminosity implemented according to the "Premium" art direction.
- All forbidden constraints respected.
- `npm run lint` and `npm run build` pass.
- .ai/tasks/LUMINA-INTERACTION-003-B/REPORT.md created.
- User approves the visual feel in Phase C.
