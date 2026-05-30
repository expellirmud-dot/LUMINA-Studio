# TASK BRIEF — LUMINA-INTERACTION-002: Lens Light Sweep Experience

## Status
PROPOSED / DESIGN PHASE

## Objective
Increase perceived premium quality and create a memorable hero interaction for the LUMINA Studio portfolio, without using Three.js, WebGL, Canvas, shaders, or additional dependencies. Replace the too-subtle Reactive Light Frame with a "luxury optical reflection" feeling (akin to Leica/Hasselblad style optical highlights). 

---

## 1. Concept: Lens Light Sweep
The goal is to simulate light hitting a premium curved lens or a luxury watch crystal. This is achieved by creating a high-contrast, gold-tinted optical highlight that softly sweeps across the hero image following the pointer, layered over a subtle depth-focused parallax shift.

**Discovery Moment:** Within 2-3 seconds of hovering, the user should immediately notice the diagonal optical streak dynamically tilting and shifting position relative to the cursor, creating an "aha" moment of premium interaction.

### Key Elements:
*   **Lens Light Sweep:** A soft, diagonal light streak (using `linear-gradient` and blending modes) that translates and rotates slightly based on cursor X/Y coordinates.
*   **Edge Reflection:** A subtle bright rim at the edge of the bounding box that intensifies as the light sweep nears the boundary.
*   **Depth Focus:** The hero image itself shifts slightly in the opposite direction of the sweep, enhancing the illusion of a convex glass layer over the photograph.

---

## 2. Proposed Architecture & CSS Implementation
The experience will leverage the existing high-performance architecture: React hooks binding pointer events on `HeroSlideshow` and writing to CSS Custom Properties to bypass React re-renders. 

### CSS Strategy
We will add a new variant, `lens-light-sweep`, driving a new overlay in `.hero-focal`.

```css
/* The optical lens overlay */
.lens-flare-sweep {
  position: absolute;
  inset: -40%; /* Bleed past edges for rotation and translation */
  pointer-events: none;
  z-index: 10;
  
  /* Creates the diagonal optical streak */
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(185, 154, 95, 0.05) 40%,
    rgba(255, 255, 255, 0.20) 48%, /* Peak brightness */
    rgba(185, 154, 95, 0.08) 52%,
    transparent 60%
  );
  
  /* Blend mode to interact beautifully with the photo behind it */
  mix-blend-mode: overlay;
  
  /* 
    Transform driven by cursor percentages 
    Uses existing --mouse-x-rel and --mouse-y-rel variables 
  */
  transform: translate(
    calc(var(--mouse-x-rel) * 150px), 
    calc(var(--mouse-y-rel) * 150px)
  ) rotate(calc(var(--mouse-x-rel) * 15deg));
  
  transition: transform 150ms ease-out, opacity 300ms ease;
  opacity: 0.8;
}

/* Edge Reflection */
.lens-edge-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 11;
  /* Dynamic shadow based on distance from center */
  box-shadow: inset 0 0 40px rgba(185, 154, 95, 0.15);
  transition: box-shadow 150ms ease-out;
}
```

### Component Changes (`HeroSlideshow.tsx`)
*   No new dependencies required. 
*   We reuse the existing `requestAnimationFrame` loop that calculates `--mouse-x-rel` and `--mouse-y-rel`.
*   We add `<div className="lens-flare-sweep" />` and `<div className="lens-edge-glow" />` when the `lens-light-sweep` variant is active.

### Config Changes (`src/config/visual.ts`)
*   Add `"lens-light-sweep"` to `HeroExperienceVariant`.
*   Set it as the recommended default.

---

## 3. Motion Specs
*   **Sweep Translation:** Moves horizontally/vertically to sweep across the frame, following the cursor but scaled.
*   **Sweep Rotation:** Tilts between -7.5° and +7.5° dynamically as the cursor moves left-to-right, simulating the curvature of an optical lens.
*   **Parallax Depth:** The background image continues to shift `maxImgShift` (4-8px) in the opposite direction.
*   **Easing:** CSS transitions (`150ms ease-out`) applied to transforms to smooth out high-frequency mouse movements while maintaining snappy responsiveness.
*   **Blend Mode:** `overlay` or `soft-light` ensures the highlight brightens the image elegantly without washing out the blacks.

---

## 4. Fallbacks & Mobile Considerations
### Mobile / Touch (`@media (hover: none)`)
*   Pointer tracking is disabled.
*   **Ambient Animation:** The lens sweep uses a continuous, slow `@keyframes` animation to glide gracefully over the image periodically, providing ambient luxury even without interaction.

### Reduced Motion (`prefers-reduced-motion`)
*   All interactive tracking and ambient animations are disabled.
*   Opacity of the lens sweep is set to 0.
*   The hero maintains the static first image as per existing architectural rules.

---

## 5. Performance Analysis
| Risk Area | Assessment | Mitigation |
| :--- | :--- | :--- |
| **Paint/Composite Overdraw** | Low-Medium | `transform` and `opacity` are GPU-accelerated. `mix-blend-mode` adds minor overhead but is highly optimized in modern browsers. No `backdrop-filter` is used. |
| **Main Thread Blocking** | Low | DOM properties are updated via `requestAnimationFrame` outside React's render cycle. |
| **Bundle Size** | Zero Impact | Completely CSS/DOM-driven. 0 extra KB. |

---

## 6. Recommended Default
We recommend setting **`activeHeroVariant: "lens-light-sweep"`** in `src/config/visual.ts` upon implementation, as it satisfies the requirement for a highly noticeable, premium discovery moment without compromising the strict performance and dependency budgets.
