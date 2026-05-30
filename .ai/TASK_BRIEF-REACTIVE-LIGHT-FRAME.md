# TASK BRIEF — LUMINA-INTERACTION-001: Configurable Reactive Light Frame

## Status
PROPOSED / DESIGN PHASE

## Objective
Design a premium, mouse-reactive hero layout variant for LUMINA Studio. The component preserves the existing cinematic image sequence but overlays a hardware-accelerated "reactive light frame" (an editorial optical viewfinder highlight) and subtle viewport parallax that follows the viewer's cursor. The design must be configurable, run at 120fps without React re-renders, and safely fall back on mobile and prefers-reduced-motion viewports.

---

## 1. Proposed Architecture

The reactive experience will be built using a **direct DOM state injection** model to ensure maximum rendering performance:
1. **Interactive Client Component:** `src/components/HeroSlideshow.tsx` acts as the event capture area, binding pointer tracking listeners directly.
2. **Direct CSS Custom Property Updates:** Mouse coordinates are calculated on pointer moves and written directly to the container's inline CSS style sheet using a React `useRef` reference. This bypasses React's virtual DOM reconciliation loop, preventing performance bottlenecks or lag during high-frequency mouse actions.
3. **Layered Parallax Stack:** The background container (.hero-focal) encapsulates three distinct translation layers:
   - **Image Sequence Layer:** Shifts subtly by 4–8px (`translate(calc(var(--mouse-x-rel) * -8px), calc(var(--mouse-y-rel) * -8px))`).
   - **Viewfinder Grid Overlay (`.focal-grid`):** Shifts in the opposite direction or offset by 8–12px (`translate(calc(var(--mouse-x-rel) * 12px), calc(var(--mouse-y-rel) * 12px))`).
   - **Typography Layer (`.crystal-reserve`):** Stays statically centered (`translate(-50%, -48%)`) to ensure copy remains completely stable and accessible.

---

## 2. Config Changes

We will declare the experience variants within `src/config/visual.ts`:

### Modifications in `src/config/visual.ts`
```typescript
export type HeroExperienceVariant = "cinematic-sequence" | "reactive-light-frame";

export const visualConfig: {
  activeHeroVariant: HeroExperienceVariant;
  // ... existing configuration properties
} = {
  activeHeroVariant: "reactive-light-frame",
  // ... existing values
};
```

---

## 3. Component Changes

`src/components/HeroSlideshow.tsx` will be updated to handle the active variant. When `activeHeroVariant === "reactive-light-frame"`, it hooks cursor events:

```tsx
interface HeroSlideshowProps {
  images: ConfigImage[];
  variant?: HeroExperienceVariant;
  interval?: number;
  transitionDuration?: number;
}

export default function HeroSlideshow({
  images,
  variant = "reactive-light-frame",
  // ... properties
}: HeroSlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  // Cache bounding rect on mouse enter/resize to prevent layout thrashing on move
  const updateRect = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (variant !== "reactive-light-frame" || !rectRef.current || prefersReducedMotion) return;

    const rect = rectRef.current;
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    const xRel = (e.clientX - rect.left) / rect.width - 0.5;
    const yRel = (e.clientY - rect.top) / rect.height - 0.5;

    // Directly set properties to DOM bypass virtual DOM paint cycles
    const el = containerRef.current;
    if (el) {
      el.style.setProperty("--mouse-x-pct", xPct.toFixed(2));
      el.style.setProperty("--mouse-y-pct", yPct.toFixed(2));
      el.style.setProperty("--mouse-x-rel", xRel.toFixed(4));
      el.style.setProperty("--mouse-y-rel", yRel.toFixed(4));
    }
  };

  const handleMouseLeave = () => {
    // Smoothly transition values back to center when user leaves container
    const el = containerRef.current;
    if (el) {
      el.style.setProperty("--mouse-x-pct", "50");
      el.style.setProperty("--mouse-y-pct", "50");
      el.style.setProperty("--mouse-x-rel", "0");
      el.style.setProperty("--mouse-y-rel", "0");
    }
  };

  // ... slideshow loop logic continues
}
```

---

## 4. CSS Strategy

We will introduce classes inside `app/globals.css` to handle translation layers and mask borders:

```css
/* Reactive Variable Defaults */
:root {
  --mouse-x-pct: 50;
  --mouse-y-pct: 50;
  --mouse-x-rel: 0;
  --mouse-y-rel: 0;
}

/* Gold view-finder border highlight */
.light-frame-highlight {
  position: absolute;
  inset: -1px;
  pointer-events: none;
  z-index: 10;
  border: 1px solid var(--muted-gold);
  opacity: 0.65;
  
  /* Mask coordinates update dynamically via mouse percentage variables */
  mask-image: radial-gradient(
    circle 160px at calc(var(--mouse-x-pct) * 1%) calc(var(--mouse-y-pct) * 1%),
    black 0%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    circle 160px at calc(var(--mouse-x-pct) * 1%) calc(var(--mouse-y-pct) * 1%),
    black 0%,
    transparent 100%
  );
  
  /* Smooth transition back to center */
  transition: mask-image 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Image translation rules */
.hero-visual {
  transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(1.02) translate(calc(var(--mouse-x-rel) * -8px), calc(var(--mouse-y-rel) * -8px));
}

/* Grid viewfinder shift */
.focal-grid {
  transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
  transform: translate(calc(var(--mouse-x-rel) * 12px), calc(var(--mouse-y-rel) * 12px));
}
```

---

## 5. Pointer Tracking Strategy
* **Mouse Coordinate Normalization:** Absolute screen pixels are converted to local percentages and relative coordinates (ranging from `-0.5` at the left/top edges to `0.5` at the right/bottom edges).
* **Caching Coordinates:** The bounding rect of the container is cached on `onMouseEnter` or `onResize` rather than calculated inside `onMouseMove`. This prevents browser reflow calculations (which usually cause micro-stutters).
* **Bypass React Render Cycle:** All writes go directly to `containerRef.current.style.setProperty` to maintain high performance.

---

## 6. Reduced-Motion Strategy
If `prefers-reduced-motion` is detected:
* All pointer move tracking calculations are disabled.
* Custom properties are locked to default center coordinates (`0` and `50`).
* Slideshow is halted, mounting only the first slide dynamically with standard layout properties.

---

## 7. Mobile / Touch Fallback
On screens without hover capabilities (detected using the `@media (hover: none)` CSS query and React-side window checks):
* Pointer tracking is completely disabled to avoid interference with swipe-scrolling.
* A gentle, automated ambient drift is run using CSS animation:
  ```css
  @media (hover: none) {
    .light-frame-highlight {
      animation: ambient-grazing-light 16000ms infinite ease-in-out alternate;
    }
  }

  @keyframes ambient-grazing-light {
    0% {
      --mouse-x-pct: 10;
      --mouse-y-pct: 50;
    }
    50% {
      --mouse-x-pct: 90;
      --mouse-y-pct: 20;
    }
    100% {
      --mouse-x-pct: 50;
      --mouse-y-pct: 80;
    }
  }
  ```
  This simulates a soft golden sweep light running along the viewfinder border automatically.

---

## 8. Performance Risks & Mitigations

| Performance Risk | Impact | Mitigation Strategy |
| :--- | :---: | :--- |
| **Hydration Layout Shift (CLS)** | High | Coordinates fallback to static CSS values (`50%` and `0`) during compilation and initial hydration. |
| **Recalculating Bounding Box** | Medium | Cache bounding box on `onMouseEnter` and resize events instead of on mousemove. |
| **Main Thread Overhead** | Low | Transform layers use GPU acceleration and bypass Virtual DOM rendering. |

---

## 9. Exact Allowed Files For Implementation

* [src/config/visual.ts](file:///D:/lumina-studio/src/config/visual.ts) — Add `activeHeroVariant` configuration token.
* [src/components/HeroSlideshow.tsx](file:///D:/lumina-studio/src/components/HeroSlideshow.tsx) — Add cursor listeners, refs, and element styles.
* [app/globals.css](file:///D:/lumina-studio/app/globals.css) — Implement `.light-frame-highlight`, `@keyframes ambient-grazing-light`, and layer shift transforms.
* [app/page.tsx](file:///D:/lumina-studio/app/page.tsx) — Update slideshow invocation parameters.
* [reports/implementation_report.md](file:///D:/lumina-studio/reports/implementation_report.md) — Document changes.
* [AI_HANDOFF.md](file:///D:/lumina-studio/AI_HANDOFF.md) — Document completed tasks.
* `.ai/qa/TASK_REPORT-REACTIVE-LIGHT-FRAME.md` — New report document.

---

## 10. Validation Plan

1. **Local Test Checks:** Verify build status using `npm run lint` and `npm run build`.
2. **Reduced Motion Test:** Toggle reduced motion and verify that tracking listeners are inactive.
3. **Cursor Interactivity Test:** Hover over the hero panel on desktop and verify translation values.
4. **Mobile Verification:** Test under mobile device emulation and confirm that pointer tracking is ignored while the ambient CSS animation sweeps the gold border.
