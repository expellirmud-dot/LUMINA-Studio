"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import type { NarrativeFrame } from "../config/portfolio";

type StoryImage = {
  src: StaticImageData | string;
  alt: string;
  position?: string;
};

type StoryImageFocusProps = {
  image: StoryImage;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  frames?: NarrativeFrame[];
  openLabel: string;
  closeLabel: string;
  loadingLabel: string;
};

export function StoryImageFocus({
  image,
  title,
  eyebrow,
  subtitle,
  frames,
  openLabel,
  closeLabel,
  loadingLabel,
}: StoryImageFocusProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const hasNarrativeFrames = Boolean(frames && frames.length > 0);

  function openImage() {
    setIsLoaded(false);
    setIsOpen(true);
    dialogRef.current?.showModal();
  }

  function closeImage() {
    dialogRef.current?.close();
  }

  function handleClose() {
    setIsOpen(false);
    setIsLoaded(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        className="story-image-trigger"
        type="button"
        aria-label={`${openLabel}: ${title}`}
        onClick={openImage}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 900px) 30vw, 100vw"
          style={{ objectPosition: image.position }}
        />
        {hasNarrativeFrames ? (
          <span className="story-narrative-badge" aria-hidden="true">
            {frames?.length} Stills • Narrative
          </span>
        ) : (
          <span className="story-image-zoom-hint" aria-hidden="true">+</span>
        )}
      </button>

      <dialog
        ref={dialogRef}
        className={`story-focus-dialog ${hasNarrativeFrames ? "story-narrative-dialog" : ""}`}
        aria-label={title}
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeImage();
        }}
      >
        <div className="story-focus-header">
          <div className="story-focus-header-meta">
            {eyebrow && <span className="story-focus-eyebrow">{eyebrow}</span>}
            <h3 className="story-focus-heading">{title}</h3>
            {subtitle && <p className="story-focus-subheading">{subtitle}</p>}
          </div>
          <button
            type="button"
            className="story-focus-close"
            onClick={closeImage}
            aria-label={closeLabel}
          >
            {closeLabel}
          </button>
        </div>

        {hasNarrativeFrames ? (
          <div className="story-narrative-stream">
            {isOpen && frames?.map((frame, index) => (
              <figure key={frame.timeContext || index} className="story-narrative-item">
                <div className="story-narrative-frame">
                  <Image
                    src={frame.image.src}
                    alt={frame.image.alt}
                    fill
                    sizes="(max-width: 767px) 94vw, 850px"
                    className="story-focus-image"
                    style={{ objectPosition: frame.image.position }}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="story-narrative-caption">
                  {frame.timeContext && (
                    <span className="story-narrative-time">{frame.timeContext}</span>
                  )}
                  <p lang="th" className="story-narrative-text">{frame.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <figure className="story-focus-figure">
            <div className="story-focus-frame">
              {isOpen && !isLoaded && (
                <span className="story-focus-loading" role="status">{loadingLabel}</span>
              )}
              {isOpen && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 92vw, 85vw"
                  className="story-focus-image"
                  onLoad={() => setIsLoaded(true)}
                />
              )}
            </div>
            <figcaption>{title}</figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
