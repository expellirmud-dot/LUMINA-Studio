"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type StoryImage = {
  src: string;
  alt: string;
  position?: string;
};

type StoryImageFocusProps = {
  image: StoryImage;
  title: string;
  openLabel: string;
  closeLabel: string;
  loadingLabel: string;
};

export function StoryImageFocus({
  image,
  title,
  openLabel,
  closeLabel,
  loadingLabel,
}: StoryImageFocusProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
        <span className="story-image-zoom-hint" aria-hidden="true">+</span>
      </button>

      <dialog
        ref={dialogRef}
        className="story-focus-dialog"
        aria-label={title}
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeImage();
        }}
      >
        <button
          type="button"
          className="story-focus-close"
          onClick={closeImage}
          aria-label={closeLabel}
        >
          {closeLabel}
        </button>
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
      </dialog>
    </>
  );
}
