# TASK BRIEF — LUMINA Hero Concept A: Cinematic Sequence

## Task ID
LUMINA-HERO-001

## Assigned Role
LUMINA Art Direction / Senior Frontend Engineer

## Objective
Transform the static Hero image in the reserved focal area into a luxury editorial storytelling experience using a sequenced, slow cinematic crossfade of five real portfolio photographs. The design must preserve Phase 1 simplicity, respect the existing brand guidelines, and introduce no external animation or rendering libraries.

---

## 1. Technical Implementation Approach

### Core Transition Mechanism
To maintain the luxury editorial feeling and high performance, the sequence will use:
- **State-driven Active Slide:** A simple React state hook (`activeIndex`) to cycle through the image sequence.
- **Pure CSS Crossfade:** An opacity-based transition defined in Tailwind/CSS rather than JS animation loops.
- **Slow Zoom (Ken Burns Effect):** A hardware-accelerated CSS keyframe animation (`scale-ken-burns`) applied to the active image to create a subtle, slow motion effect (scaling from `1.0` to `1.04` over the slide duration). This adds editorial depth without relying on WebGL or Three.js.
- **Render Opt-in:** Only the active slide and the previous slide are rendered in the DOM during transition, minimizing layout paint cost.

### Timing Profile
- **Slide Duration:** 6500ms (6.5s per image to allow the visual story to breathe).
- **Crossfade Duration:** 1500ms (1.5s slow dissolve for a premium, non-jarring transition).
- **Zoom Duration:** 7500ms (7.5s animation curve, ensuring the zoom continues through the crossfade and doesn't snap abruptly).

---

## 2. Recommended React/Next.js Architecture

### Encapsulation of Client Interactivity
To keep the main page (`app/page.tsx`) as a Server Component for search engine indexing and fast initial paint, we will create a dedicated Client Component for the slideshow.

```
app/
 └── page.tsx (Server Component, handles layout and static meta)
src/
 ├── components/
 │    └── HeroSlideshow.tsx [NEW] (Client Component, handles timer & state)
 └── config/
      ├── images.ts (Configures slideshow images array)
      └── visual.ts (Defines timing config tokens)
```

### Slideshow Component Signature (`src/components/HeroSlideshow.tsx`)
```tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ConfigImage } from "../config/images";

interface HeroSlideshowProps {
  images: ConfigImage[];
  interval?: number;
  transitionDuration?: number;
}

export default function HeroSlideshow({
  images,
  interval = 6500,
  transitionDuration = 1500,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Auto-advance loop
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(true);
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, images.length, interval]);

  // Transition status window
  useEffect(() => {
    if (isTransitioning) {
      const transTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
      return () => clearTimeout(transTimer);
    }
  }, [isTransitioning, transitionDuration]);

  // Reduced motion media query check
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden bg-[var(--charcoal)]"
      aria-label="Cinematic portfolio showcase"
      role="region"
    >
      {images.map((img, idx) => {
        const isActive = idx === activeIndex;
        const isPrev = idx === prevIndex;
        
        // DOM pruning: Only render active and transition-previous slides
        if (!isActive && !isPrev) return null;

        return (
          <div
            key={img.path}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
              transitionDuration: prefersReducedMotion ? "0ms" : `${transitionDuration}ms`,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              style={{ objectPosition: img.position }}
              className={`hero-visual absolute inset-0 h-full w-full object-cover ${
                isActive && !prefersReducedMotion
                  ? "animate-[scale-ken-burns_7500ms_ease-out_both]"
                  : ""
              }`}
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}
    </div>
  );
}
```

---

## 3. Required Config Changes

We must declare the sequence within `src/config/images.ts` and define properties for each slide. The existing static `heroImage` will be replaced with a `heroSequence` array:

### Modifications in `src/config/images.ts`
```typescript
// New imports for sequence candidates
import waterCeremonyImage from "../../docs/pic/2/IMG_0673.jpg";
import firstDanceImage from "../../docs/pic/2/IMG_2232.jpg";
import whisperImage from "../../docs/pic/2/IMG_1159.jpg";

export const heroSequence: ConfigImage[] = [
  {
    src: weddingLightImage, // IMG_1718.jpg
    path: "docs/pic/2/IMG_1718.jpg",
    alt: "Outdoor wedding ceremony stage with soft floral styling and guests",
    position: "50% 45%",
  },
  {
    src: waterCeremonyImage, // IMG_0673.jpg
    path: "docs/pic/2/IMG_0673.jpg",
    alt: "Traditional water ceremony pouring details highlighting close-up textures",
    position: "50% 50%",
  },
  {
    src: firstDanceImage, // IMG_2232.jpg
    path: "docs/pic/2/IMG_2232.jpg",
    alt: "First dance portrait capturing ambient fairy lights and wide room perspective",
    position: "50% 40%",
  },
  {
    src: whisperImage, // IMG_1159.jpg
    path: "docs/pic/2/IMG_1159.jpg",
    alt: "Intimate portrait crop detailing high-contrast ceremony moments",
    position: "50% 47%",
  },
  {
    src: sparklerExitImage, // IMG_2677.jpg
    path: "docs/pic/2/IMG_2677.jpg",
    alt: "Cinematic sparkler exit at a premium evening reception",
    position: "50% 40%",
  },
];
```

### Modifications in `src/config/visual.ts`
Introduce animation values to standard tokens:
```typescript
export const slideshowConfig = {
  interval: 6500, // Duration per slide
  transitionDuration: 1500, // Crossfade speed
};
```

---

## 4. Mobile Behavior

### Responsive Crop Coordinates
Large editorial photos cropped to a vertical screen space risk cutting off crucial focal points (faces, hands).
- **Position Strategy:** The `position` parameter of `ConfigImage` is parsed dynamically. To prevent issues, we will verify that the chosen coordinate ranges (e.g., `50% 40%`) keep key subjects centered on a `390x844` layout.
- **Height Lock:** The container `.hero-focal` maintains `min-height: clamp(27rem, 54vw, 42rem)`, ensuring that on mobile, the aspect ratio is controlled and the center overlay texts remain readable.
- **No Swipe Gestures:** Since this is a cinematic visual backdrop rather than an interactive image carousel, swipe events will NOT be registered. This avoids gesture conflict with vertical scrolling on mobile browsers.

---

## 5. Accessibility Considerations

- **Screen Reader Separation:** The slideshow handles background visuals only. The typography overlay (`crystal-reserve`) remains static. The slideshow container will have `role="region"` and `aria-label="Cinematic portfolio showcase"` to describe its content.
- **Respect Motion Preferences:** The `prefers-reduced-motion` media query must override transitions:
  - Transition duration drops to `0ms` (instant snap).
  - Ken Burns scale animation is disabled.
- **Focus Pause:** If interactive elements in the hero (e.g. CTA buttons) receive keyboard focus, the cycle loop must be paused.

---

## 6. Performance Considerations

### Optimizing the Loading Chain
- **Single Priority Entry:** Only the first image in the sequence (`IMG_1718.jpg`) has `priority={true}` to prevent layout shift and maximize LCP.
- **Lazy Hydration:** Next images inside the loop are rendered with standard Next.js lazy-loading and dynamic prefetching.
- **DOM Pruning:** Instead of rendering all 5 image layers constantly (which causes significant GPU paint overhead during scrolling), the slideshow uses a pruning logic (`isActive || isPrev`) to keep maximum 2 images mounted.
- **Strict Cleanup:** The interval timer is registered in `useEffect` and strictly cleared on component unmount to prevent background memory leaks.

---

## 7. Risk Assessment

| Risk | Impact | Mitigation Strategy |
| :--- | :---: | :--- |
| **Initial load delay / FOUC** | High | First image uses `priority={true}` and is static until React hydraton finishes. |
| **Double hero image download** | Medium | First slide uses `IMG_1718` which is already cached if user looks at portfolio, reducing overall transfer. |
| **CPU spikes from scale animation** | Low | Zoom uses CSS `transform: scale()` which is compiled in GPU, preventing browser layout recalculations. |

---

## 8. Recommended Implementation Plan

1. **Step 1:** Modify `src/config/images.ts` to import new assets (`IMG_0673`, `IMG_2232`, `IMG_1159`) and export the `heroSequence` array.
2. **Step 2:** Add standard timing attributes to `src/config/visual.ts`.
3. **Step 3:** Add the `scale-ken-burns` keyframe animation to `app/globals.css`:
   ```css
   @keyframes scale-ken-burns {
     from { transform: scale(1); }
     to { transform: scale(1.04); }
   }
   ```
4. **Step 4:** Create `src/components/HeroSlideshow.tsx` Client Component.
5. **Step 5:** Modify `app/page.tsx` to import and render `<HeroSlideshow images={heroSequence} />` within the `.hero-focal` container.
6. **Step 6:** Run `npm run lint` and `npm run build` to confirm TypeScript and Next.js compiler accept the client component.
7. **Step 7:** Run local QA with Puppeteer to confirm zero visual shifts on viewport changes.
