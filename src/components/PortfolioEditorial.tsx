import Image from "next/image";
import { visualConfig } from "../config/visual";
import type { PortfolioImage } from "../config/images";

interface PortfolioEditorialProps {
  images: PortfolioImage[];
}

export default function PortfolioEditorial({ images }: PortfolioEditorialProps) {
  if (!images || images.length !== 5) {
    return <p>Portfolio configuration requires exactly 5 images for the editorial layout.</p>;
  }

  const [hero, story, peak, character, signature] = images;

  return (
    <div className="portfolio-editorial-container reveal">
      {/* 1. Hero (Dominant) */}
      <article className="portfolio-editorial-hero">
        <div className="portfolio-editorial-image-frame">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="portfolio-editorial-image"
            style={{ objectPosition: hero.position }}
          />
          <div className="portfolio-editorial-label">
            <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
              {hero.title}
            </span>
            {hero.category}
          </div>
        </div>
      </article>

      {/* 2 & 3. Story & Peak (Grid on mobile, column on desktop) */}
      <div className="portfolio-editorial-story-grid">
        <article className="portfolio-editorial-story">
          <div className="portfolio-editorial-image-frame">
            <Image
              src={story.src}
              alt={story.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 35vw"
              className="portfolio-editorial-image"
              style={{ objectPosition: story.position }}
            />
            <div className="portfolio-editorial-label">
              <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
                {story.title}
              </span>
              {story.category}
            </div>
          </div>
        </article>

        <article className="portfolio-editorial-peak">
          <div className="portfolio-editorial-image-frame">
            <Image
              src={peak.src}
              alt={peak.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 35vw"
              className="portfolio-editorial-image"
              style={{ objectPosition: peak.position }}
            />
            <div className="portfolio-editorial-label">
              <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
                {peak.title}
              </span>
              {peak.category}
            </div>
          </div>
        </article>
      </div>

      {/* 4. Character (Full width mobile, square on desktop) */}
      <article className="portfolio-editorial-character">
        <div className="portfolio-editorial-image-frame">
          <Image
            src={character.src}
            alt={character.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="portfolio-editorial-image"
            style={{ objectPosition: character.position }}
          />
          <div className="portfolio-editorial-label">
            <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
              {character.title}
            </span>
            {character.category}
          </div>
        </div>
      </article>

      {/* 5. Signature (Strong Secondary) */}
      <article className="portfolio-editorial-signature">
        <div className="portfolio-editorial-image-frame">
          <Image
            src={signature.src}
            alt={signature.alt}
            fill
            sizes="100vw"
            className="portfolio-editorial-image"
            style={{ objectPosition: signature.position }}
          />
          <div className="portfolio-editorial-label">
            <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
              {signature.title}
            </span>
            {signature.category}
          </div>
        </div>
      </article>
    </div>
  );
}
