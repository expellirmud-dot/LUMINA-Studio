"use client";

import { useState, useEffect } from "react";
import { contentConfig } from "../config/content";
import { typographyConfig } from "../config/typography";

export default function RotatingMicrocopy() {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const lines = contentConfig.hero.rotatingMicrocopy;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !lines || lines.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
      setKey((prev) => prev + 1); // trigger animation re-render
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, [lines, prefersReducedMotion]);

  if (!lines || lines.length === 0) return null;

  return (
    <div key={key} className={`microcopy-fade-slide ${typographyConfig.tokens.heroConceptTitle}`}>
      {lines[index]}
    </div>
  );
}
