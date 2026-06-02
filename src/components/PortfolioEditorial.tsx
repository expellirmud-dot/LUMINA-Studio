import Image from "next/image";
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
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="portfolio-editorial-image"
            style={{ objectPosition: hero.image.position }}
          />
          <div className="portfolio-editorial-label">
            <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
              {hero.eyebrow}
            </span>
            {hero.description}
          </div>
        </div>
      </article>

      {/* 2 & 3. Story & Peak (Grid on mobile, column on desktop) */}
      <div className="portfolio-editorial-story-grid">
        <article className="portfolio-editorial-story">
          <div className="portfolio-editorial-image-frame">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 35vw"
              className="portfolio-editorial-image"
              style={{ objectPosition: story.image.position }}
            />
            <div className="portfolio-editorial-label">
              <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
                {story.eyebrow}
              </span>
              {story.description}
            </div>
          </div>
        </article>

        <article className="portfolio-editorial-peak">
          <div className="portfolio-editorial-image-frame">
            <Image
              src={peak.image.src}
              alt={peak.image.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 35vw"
              className="portfolio-editorial-image"
              style={{ objectPosition: peak.image.position }}
            />
            <div className="portfolio-editorial-label">
              <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
                {peak.eyebrow}
              </span>
              {peak.description}
            </div>
          </div>
        </article>
      </div>

      {/* 4. Character (Full width mobile, square on desktop) */}
      <article className="portfolio-editorial-character">
        <div className="portfolio-editorial-image-frame">
          <Image
            src={character.image.src}
            alt={character.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="portfolio-editorial-image"
            style={{ objectPosition: character.image.position }}
          />
          <div className="portfolio-editorial-label">
            <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
              {character.eyebrow}
            </span>
            {character.description}
          </div>
        </div>
      </article>

      {/* 5. Signature (Strong Secondary) */}
      <article className="portfolio-editorial-signature">
        <div className="portfolio-editorial-image-frame">
          <Image
            src={signature.image.src}
            alt={signature.image.alt}
            fill
            sizes="100vw"
            className="portfolio-editorial-image"
            style={{ objectPosition: signature.image.position }}
          />
          <div className="portfolio-editorial-label">
            <span className="block text-sm uppercase tracking-widest text-[var(--muted-gold)] mb-1">
              {signature.eyebrow}
            </span>
            {signature.description}
          </div>
        </div>
      </article>
    </div>
  );
}
