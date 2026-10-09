"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

type MiniAlbumImage = {
  src: string;
  path: string;
  alt: string;
  position?: string;
};

type MiniAlbumProps = {
  images: MiniAlbumImage[];
};

export function MiniAlbum({ images }: MiniAlbumProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const previewOrder = [3, 2, 4];
  const previewImages = previewOrder
    .map((index) => images[index])
    .filter((image): image is MiniAlbumImage => Boolean(image));

  function closeWithEscape(event: React.KeyboardEvent<HTMLElement>) {
    if (isOpen && event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <div className={`mini-album${isOpen ? " is-open" : ""}`}>
      <button
        ref={toggleRef}
        type="button"
        className="mini-album-toggle"
        onKeyDown={closeWithEscape}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="mini-album-stack" aria-hidden="true">
          {previewImages.map((image, index) => (
            <span
              className={`mini-album-stack-frame mini-album-stack-frame-${index + 1}`}
              key={image.path}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(min-width: 768px) 24rem, 72vw"
                style={{ objectPosition: image.position }}
              />
            </span>
          ))}
        </span>

        <span className="mini-album-toggle-copy">
          <span className="mini-album-kicker">
            A SMALL ALBUM · {images.length} FRAMES
          </span>
          <span className="mini-album-toggle-label">
            {isOpen ? "Close the album" : "Open the album"}
          </span>
        </span>
      </button>

      <div
        id={panelId}
        className="mini-album-panel"
        aria-hidden={!isOpen}
      >
        <div className="mini-album-panel-inner">
          <div
            className="mini-album-rail"
            role="list"
            aria-label="Album photographs"
            tabIndex={isOpen ? 0 : -1}
            onKeyDown={closeWithEscape}
          >
            {images.map((image, index) => (
              <figure
                className={`mini-album-item mini-album-item-${index + 1}`}
                role="listitem"
                key={image.path}
              >
                <div className="mini-album-frame">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 900px) 34vw, 82vw"
                    style={{ objectPosition: image.position }}
                  />
                </div>
                <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
