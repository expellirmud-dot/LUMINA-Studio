"use client";

import Image from "next/image";
import { useState } from "react";

type ExperienceImage = {
  src: string;
  path: string;
  alt: string;
  position?: string;
};

type ExperienceSequenceProps = {
  items: string[];
  images: ExperienceImage[];
};

export function ExperienceSequence({ items, images }: ExperienceSequenceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return null;
  }

  return (
    <div className="experience-sequence">
      <figure
        className="experience-media"
        data-future-media-slot="micro-cinematic"
      >
        <div className="experience-media-frame">
          <Image
            key={activeImage.path}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(min-width: 900px) 44vw, 100vw"
            className="experience-media-image"
            style={{ objectPosition: activeImage.position }}
          />
        </div>
        <figcaption className="experience-media-caption">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span lang="th">{items[activeIndex]}</span>
        </figcaption>
      </figure>

      <ol className="experience-list" aria-label="LUMINA working process">
        {items.map((item, index) => (
          <li key={item} className={activeIndex === index ? "is-active" : ""}>
            <button
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span lang="th">{item}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
