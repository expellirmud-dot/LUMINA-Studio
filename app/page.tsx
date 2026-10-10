import Image from "next/image";
import { MiniAlbum } from "../src/components/MiniAlbum";
import { ExperienceSequence } from "../src/components/ExperienceSequence";
import { StoryImageFocus } from "../src/components/StoryImageFocus";
import { heroImage, profileImage } from "../src/config/images";
import { typographyConfig } from "../src/config/typography";
import { visualConfig } from "../src/config/visual";
import { contentConfig } from "../src/config/content";
import { selectedStoriesConfig, momentImagesConfig, experienceImagesConfig } from "../src/config/portfolio";
import { servicesConfig } from "../src/config/services";
import { navigationConfig } from "../src/config/navigation";
import { contactConfig } from "../src/config/contact";

export default function Home() {
  const primaryContact = contactConfig.items.find((item) => item.label === "LINE") ?? contactConfig.items[0];

  return (
    <>
      <nav aria-label="Primary navigation" className="site-nav">
        <div className="site-nav-inner">
          <a href="#hero" className={typographyConfig.tokens.brandLockup}>
            {navigationConfig.logoText}
          </a>
          <div className="nav-items">
            {navigationConfig.items.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#final-cta" className="nav-cta">
            {navigationConfig.ctaText}
          </a>
        </div>
      </nav>

      <main className="home-page">
        <section id="hero" className="hero-section" aria-label="LUMINA Studio Home">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="hero-image"
            style={{ objectPosition: heroImage.position }}
          />
          <div className="hero-grade" aria-hidden="true" />
          <div className="hero-copy reveal">
            <p className="hero-eyebrow">{contentConfig.hero.eyebrow}</p>
            <h1 className={typographyConfig.tokens.heroHeadline}>
              {contentConfig.hero.title}
            </h1>
            <p className="hero-body">{contentConfig.hero.body}</p>
            <a href="#selected-stories" className="primary-action">
              {contentConfig.hero.primaryCta}
            </a>
          </div>
        </section>

        <section id="what-we-notice" className="section-shell notice-section">
          <p className="section-label reveal">{contentConfig.whatWeNotice.label}</p>
          <div className="notice-copy reveal" style={{ animationDelay: "90ms" }}>
            <h2 lang="th" className={typographyConfig.tokens.sectionHeadline}>
              {contentConfig.whatWeNotice.title}
            </h2>
            <p lang="th">{contentConfig.whatWeNotice.body}</p>
          </div>
        </section>

        <section id="selected-stories" className="section-shell selected-stories">
          <div className="section-heading story-threshold">
            <p className="section-label reveal">{contentConfig.selectedStories.label}</p>
            <h2
              className={`story-editorial-heading reveal ${typographyConfig.tokens.portfolioHeadline}`}
              style={{ animationDelay: "90ms" }}
              aria-label={contentConfig.selectedStories.title.replace(/\n/g, " ")}
            >
              <span>{contentConfig.selectedStories.titleParts.lead}</span>
              <span
                className="story-inline-media story-inline-media-a"
                aria-hidden="true"
                data-future-media-slot="micro-cinematic-story-a"
              >
                <Image
                  src={selectedStoriesConfig[0].image.src}
                  alt=""
                  fill
                  sizes="8rem"
                  style={{ objectPosition: selectedStoriesConfig[0].image.position }}
                />
              </span>
              <span>{contentConfig.selectedStories.titleParts.middle}</span>
              <span
                className="story-inline-media story-inline-media-b"
                aria-hidden="true"
                data-future-media-slot="micro-cinematic-story-b"
              >
                <Image
                  src={selectedStoriesConfig[1].image.src}
                  alt=""
                  fill
                  sizes="7rem"
                  style={{ objectPosition: selectedStoriesConfig[1].image.position }}
                />
              </span>
              <span>{contentConfig.selectedStories.titleParts.tail}</span>
            </h2>
            <p className="section-intro reveal" style={{ animationDelay: "140ms" }}>
              {contentConfig.selectedStories.body}
            </p>
          </div>
          <div className="story-card-grid">
            {selectedStoriesConfig.map((story, index) => (
              <article
                key={story.title}
                className="story-card reveal"
                style={{ animationDelay: `${160 + index * 90}ms` }}
              >
                <div className="story-card-image">
                  <StoryImageFocus
                    image={story.image}
                    title={story.title}
                    openLabel={contentConfig.selectedStories.imageFocusOpen}
                    closeLabel={contentConfig.selectedStories.imageFocusClose}
                    loadingLabel={contentConfig.selectedStories.imageFocusLoading}
                  />
                </div>
                <div className="story-card-copy">
                  <p className="story-eyebrow">{story.eyebrow}</p>
                  <h3>{story.title}</h3>
                  <p>{story.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="moments-between" className="section-shell moments-section">
          <div className="moments-intro reveal">
            <p className="section-label">{contentConfig.momentsBetween.label}</p>
            <h2 lang="th" className={typographyConfig.tokens.sectionHeadline}>
              {contentConfig.momentsBetween.title}
            </h2>
            <p lang="th" className="section-intro">{contentConfig.momentsBetween.body}</p>
          </div>
          <MiniAlbum images={momentImagesConfig} />
        </section>

        <aside className="section-shell brand-bridge reveal" aria-label="LUMINA approach">
          <p>{contentConfig.brandBridge.copy}</p>
        </aside>

        <section id="behind-the-lens" className="section-shell behind-section">
          <figure className="behind-portrait reveal">
            <Image
              src={profileImage.src}
              alt={profileImage.alt}
              fill
              sizes={visualConfig.profileImageSizes}
              className={visualConfig.profileImageClass}
              style={{ objectPosition: profileImage.position }}
            />
          </figure>
          <div className="behind-copy reveal" style={{ animationDelay: "120ms" }}>
            <p className="section-label">{contentConfig.behindTheLens.label}</p>
            <h2 lang="th" className={typographyConfig.tokens.sectionHeadline}>
              {contentConfig.behindTheLens.title}
            </h2>
            <p lang="th" className="behind-body">{contentConfig.behindTheLens.body}</p>
            <blockquote lang="th" className="thai-signature">
              {contentConfig.behindTheLens.signature}
            </blockquote>
            <a lang="th" href="#experience" className="text-action">
              {contentConfig.behindTheLens.button}
            </a>
          </div>
        </section>

        <section id="kind-words" className="section-shell words-section">
          <p className="section-label reveal">{contentConfig.kindWords.label}</p>
          <h2 className={`reveal ${typographyConfig.tokens.sectionHeadline}`}>
            {contentConfig.kindWords.title}
          </h2>
          <p className="section-intro reveal" style={{ animationDelay: "70ms" }}>
            {contentConfig.kindWords.intro}
          </p>
          <blockquote lang="th" className="kind-quote reveal" style={{ animationDelay: "120ms" }}>
            {contentConfig.kindWords.quote}
          </blockquote>
          <p className="quote-credit reveal" style={{ animationDelay: "180ms" }}>
            {contentConfig.kindWords.credit}
          </p>
        </section>

        <section id="experience" className="section-shell experience-section">
          <div className="experience-copy reveal">
            <p className="section-label">{contentConfig.experience.label}</p>
            <h2 lang="th" className={typographyConfig.tokens.sectionHeadline}>
              {contentConfig.experience.title}
            </h2>
            <p lang="th" className="section-intro">{contentConfig.experience.body}</p>
            <p lang="th" className="experience-supporting">{contentConfig.experience.supporting}</p>
          </div>
          <ExperienceSequence
            items={servicesConfig}
            images={experienceImagesConfig}
          />
        </section>

        <section id="final-cta" className="section-shell final-cta">
          <div className="final-cta-copy reveal">
            <p className="section-label">{contentConfig.finalCta.label}</p>
            <h2 lang="th" className={typographyConfig.tokens.contactHeadline}>
              {contentConfig.finalCta.title}
            </h2>
            <p lang="th" className="final-cta-body">{contentConfig.finalCta.body}</p>
            <div className="final-cta-actions">
              <a lang="th" href={primaryContact.href} className="primary-action linen-action">
                {contentConfig.finalCta.button}
              </a>
              <a lang="th" href="#contact-details" className="text-action">
                {contentConfig.finalCta.secondary}
              </a>
            </div>
          </div>
          <footer className="site-footer">
            <p className="flex items-baseline gap-1.5 font-serif text-3xl text-[var(--text)]">
              {navigationConfig.logoText}{" "}
              <span className={typographyConfig.tokens.brandStudioFooter}>
                {navigationConfig.logoSecondary}
              </span>
            </p>
            <p className="footer-statement">{contentConfig.footer.statement}</p>
            <div id="contact-details" className="footer-contacts">
              {contactConfig.items.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="hover:text-[var(--text)] transition-colors duration-300"
                >
                  {item.label} {item.value}
                </a>
              ))}
            </div>
            <p>
              {contentConfig.owner.name} / {contentConfig.owner.role}
            </p>
            <p>{contentConfig.footer.identity}</p>
          </footer>
        </section>
      </main>
    </>
  );
}
