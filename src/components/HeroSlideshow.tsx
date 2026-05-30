"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { ConfigImage } from "../config/images";
import { visualConfig } from "../config/visual";
import { motionConfig } from "../config/motion";

interface HeroSlideshowProps {
  images: ConfigImage[];
}

export default function HeroSlideshow({ images }: HeroSlideshowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none)").matches;
  });

  const variant = visualConfig.heroExperienceVariant;
  const intensity = visualConfig.heroInteractionIntensity;
  
  const { interval, transitionDuration, animationDuration, easing, scale } = motionConfig.hero.slideshow;

  // Check for prefers-reduced-motion updates
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Check if hover capability is missing (indicating touch device/mobile)
  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: none)");
    const listener = (e: MediaQueryListEvent) => setIsMobileOrTouch(e.matches);
    hoverQuery.addEventListener("change", listener);
    return () => hoverQuery.removeEventListener("change", listener);
  }, []);

  // Slide advancement loop (disabled if reduced motion is requested)
  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return;

    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex, images.length, interval, prefersReducedMotion]);

  // Effect for "Editorial Breathing Frame"
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    if (variant === "editorial-breathing-frame" && !prefersReducedMotion) {
      parent.classList.add("breathing-frame");
    } else {
      parent.classList.remove("breathing-frame");
    }

    return () => {
      parent.classList.remove("breathing-frame");
    };
  }, [variant, prefersReducedMotion]);

  // Pointer tracking & Parallax logic
  useEffect(() => {
    const el = containerRef.current;
    if (
      !el ||
      isMobileOrTouch ||
      prefersReducedMotion ||
      (variant !== "reactive-light-frame" && variant !== "lens-light-sweep") ||
      intensity === "off"
    ) {
      return;
    }

    const parent = el.parentElement;
    if (!parent) return;

    // Cache the bounding box of .hero-focal on mouse enter / window resize
    let rect = parent.getBoundingClientRect();
    const handleMouseEnter = () => {
      rect = parent.getBoundingClientRect();
    };

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      const xRel = (e.clientX - rect.left) / rect.width - 0.5;
      const yRel = (e.clientY - rect.top) / rect.height - 0.5;

      const maxImgShift = intensity === "subtle" ? motionConfig.hero.parallax.subtle.maxImgShift : intensity === "medium" ? motionConfig.hero.parallax.medium.maxImgShift : 0;
      const maxGridShift = intensity === "subtle" ? motionConfig.hero.parallax.subtle.maxGridShift : intensity === "medium" ? motionConfig.hero.parallax.medium.maxGridShift : 0;

      // Sync property writes with the browser render loop via requestAnimationFrame
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        parent.style.setProperty("--mouse-x-pct", xPct.toFixed(2));
        parent.style.setProperty("--mouse-y-pct", yPct.toFixed(2));
        parent.style.setProperty("--img-shift-x", `${(xRel * maxImgShift).toFixed(2)}px`);
        parent.style.setProperty("--img-shift-y", `${(yRel * maxImgShift).toFixed(2)}px`);
        parent.style.setProperty("--grid-shift-x", `${(xRel * maxGridShift).toFixed(2)}px`);
        parent.style.setProperty("--grid-shift-y", `${(yRel * maxGridShift).toFixed(2)}px`);
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        // Reset translation and masks smoothly back to center
        parent.style.setProperty("--mouse-x-pct", "50");
        parent.style.setProperty("--mouse-y-pct", "50");
        parent.style.setProperty("--img-shift-x", "0px");
        parent.style.setProperty("--img-shift-y", "0px");
        parent.style.setProperty("--grid-shift-x", "0px");
        parent.style.setProperty("--grid-shift-y", "0px");
      });
    };

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      
      // Clean up properties on unmount/variant change
      parent.style.removeProperty("--mouse-x-pct");
      parent.style.removeProperty("--mouse-y-pct");
      parent.style.removeProperty("--img-shift-x");
      parent.style.removeProperty("--img-shift-y");
      parent.style.removeProperty("--grid-shift-x");
      parent.style.removeProperty("--grid-shift-y");
    };
  }, [isMobileOrTouch, prefersReducedMotion, variant, intensity]);

  if (!images || images.length === 0) return null;

  // If prefers-reduced-motion is active, display only the first image statically
  if (prefersReducedMotion) {
    const firstImage = images[0];
    return (
      <div 
        ref={containerRef}
        className="absolute inset-0 z-0 overflow-hidden bg-[var(--charcoal)]"
        aria-label="Portfolio showcase (reduced motion mode)"
        role="region"
      >
        <Image
          src={firstImage.src}
          alt={firstImage.alt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          style={{ objectPosition: firstImage.position }}
          className="hero-visual absolute inset-0 h-full w-full object-cover"
          priority
        />
      </div>
    );
  }

  const nextIndex = (activeIndex + 1) % images.length;
  const showLightFrame =
    variant === "reactive-light-frame" &&
    intensity !== "off" &&
    !isMobileOrTouch;

  const showLensSweep =
    variant === "lens-light-sweep" &&
    intensity !== "off"; // Still render on mobile for ambient animation

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden bg-[var(--charcoal)]"
      aria-label="Cinematic portfolio showcase"
      role="region"
    >
      {images.map((img, idx) => {
        const isActive = idx === activeIndex;
        const isPrev = idx === prevIndex;
        const isNext = idx === nextIndex;

        // DOM pruning: Only render active, transitioning-out, and pre-loading next slide
        if (!isActive && !isPrev && !isNext) return null;

        return (
          <div
            key={img.path}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              transitionDuration: `${transitionDuration}ms`,
              transitionTimingFunction: easing,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              style={{ 
                objectPosition: img.position,
                animationDuration: isActive ? `${animationDuration}ms` : '0s',
                animationTimingFunction: easing,
                animationFillMode: 'both',
                animationName: isActive ? 'scale-ken-burns' : 'none',
                '--ken-burns-scale': scale,
              } as React.CSSProperties}
              className="hero-visual absolute inset-0 h-full w-full object-cover"
              priority={idx === 0}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {showLightFrame && <div className="light-frame-highlight" />}
      {showLensSweep && (
        <>
          <div className="lens-flare-sweep" />
          <div className="lens-edge-glow" />
        </>
      )}
    </div>
  );
}
