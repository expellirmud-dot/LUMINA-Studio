import Image from "next/image";
import { heroSequence, profileImage } from "../src/config/images";
import { typographyConfig } from "../src/config/typography";
import { contactVariants, visualConfig } from "../src/config/visual";
import { contentConfig } from "../src/config/content";
import { portfolioConfig } from "../src/config/portfolio";
import { servicesConfig } from "../src/config/services";
import { navigationConfig } from "../src/config/navigation";
import { contactConfig } from "../src/config/contact";
import HeroSlideshow from "../src/components/HeroSlideshow";
import RotatingMicrocopy from "../src/components/RotatingMicrocopy";
import PortfolioEditorial from "../src/components/PortfolioEditorial";

export default function Home() {
  const contactVariant = contactVariants[visualConfig.activeContactVariant];

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--charcoal)] text-[var(--warm-white)]">
      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--charcoal)]/82 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#hero" className={typographyConfig.tokens.brandLockup}>
            {navigationConfig.logoText}{" "}
            <span className={typographyConfig.tokens.brandStudioHeader}>
              {navigationConfig.logoSecondary}
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--soft-gray)] md:flex">
            {navigationConfig.items.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="gold-link text-sm">
            {navigationConfig.ctaText}
          </a>
        </div>
      </nav>

      <section id="hero" className="hero-section section-shell pt-28">
        <div className="grid min-h-[70svh] lg:min-h-[88svh] items-end gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="reveal space-y-8 pb-10">
            <p className="eyebrow">{contentConfig.hero.eyebrow}</p>
            <h1 className={typographyConfig.tokens.heroHeadline}>
              {contentConfig.hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--soft-gray)] sm:text-xl">
              {contentConfig.hero.subtitle}
            </p>
            <div className="hero-trust">
              <span>{contentConfig.owner.name}</span>
              <span>{contentConfig.owner.role}</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="primary-action">
                {contentConfig.hero.primaryCta}
              </a>
              <a href="#story" className="secondary-action">
                {contentConfig.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="reveal hero-focal" aria-label="Human documentary photography sequence" style={{ animationDelay: "200ms" }}>
            <HeroSlideshow
              images={heroSequence}
            />
            <div className="focal-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="story-reserve">
              <RotatingMicrocopy />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section-shell border-t border-white/10 py-24 sm:py-32">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <p className="eyebrow reveal">{contentConfig.story.eyebrow}</p>
          <h2 className={`reveal ${typographyConfig.tokens.sectionHeadline}`} style={{ animationDelay: "150ms" }}>
            {contentConfig.story.title}
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {contentConfig.story.steps.map((step, index) => (
            <article key={step.label} className="story-panel reveal" style={{ animationDelay: `${300 + index * 100}ms` }}>
              <span className="text-sm text-[var(--muted-gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-serif text-4xl">{step.label}</h3>
              <p className="mt-5 leading-7 text-[var(--soft-gray)]">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell py-24 sm:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow reveal">{contentConfig.portfolio.eyebrow}</p>
            <h2 className={`reveal ${typographyConfig.tokens.portfolioHeadline}`} style={{ animationDelay: "150ms" }}>
              {contentConfig.portfolio.title}
            </h2>
          </div>
          <p className="reveal max-w-sm leading-7 text-[var(--soft-gray)]" style={{ animationDelay: "300ms" }}>
            {contentConfig.portfolio.description}
          </p>
        </div>
        <PortfolioEditorial images={portfolioConfig} />
      </section>

      <section id="services" className="section-shell border-y border-white/10 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="eyebrow reveal">{contentConfig.services.eyebrow}</p>
            <h2 className={`reveal mt-5 ${typographyConfig.tokens.sectionHeadline}`} style={{ animationDelay: "150ms" }}>
              {contentConfig.services.title}
            </h2>
          </div>
          <div className="divide-y divide-white/10">
            {servicesConfig.map((service, index) => (
              <div key={service} className="service-row reveal" style={{ animationDelay: `${300 + index * 100}ms` }}>
                <span>{service}</span>
                <span aria-hidden="true">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="section-shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <figure className="reveal about-portrait-frame">
            <Image
              src={profileImage.src}
              alt={profileImage.alt}
              fill
              sizes={visualConfig.profileImageSizes}
              className={visualConfig.profileImageClass}
              style={{ objectPosition: profileImage.position }}
              priority={false}
            />
            <figcaption>{contentConfig.owner.name} / Photographer</figcaption>
          </figure>
          <div className="reveal space-y-7" style={{ animationDelay: "200ms" }}>
            <p className="eyebrow">{contentConfig.about.eyebrow}</p>
            <h2 className={typographyConfig.tokens.sectionHeadline}>
              {contentConfig.about.title}
            </h2>
            <p className="text-lg leading-8 text-[var(--soft-gray)]">
              {contentConfig.about.description}
            </p>
            <blockquote className="photographer-quote">
              &ldquo;{contentConfig.about.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-20 pt-10 sm:pb-28">
        <div className={contactVariant.wrapperClass}>
          <p className="eyebrow">{contactConfig.eyebrow}</p>
          <h2 className={`mt-5 max-w-4xl ${typographyConfig.tokens.contactHeadline}`}>
            {contactConfig.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--soft-gray)]">
            {contactConfig.copy}
          </p>
          <div className={contactVariant.gridClass}>
            {contactConfig.items.map((item) => (
              <a key={item.label} href={item.href} className={contactVariant.itemClass}>
                <span>{item.label}</span>
                <div className={typographyConfig.tokens.contactValue}>{item.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-shell border-t border-white/10 py-8">
        <div className="footer-balance">
          <p className="flex items-baseline gap-1.5 font-serif text-3xl text-[var(--warm-white)]">
            {navigationConfig.logoText}{" "}
            <span className={typographyConfig.tokens.brandStudioFooter}>
              {navigationConfig.logoSecondary}
            </span>
          </p>
          <p>
            {contentConfig.owner.name} / {contentConfig.owner.role}
          </p>
          <p>{contentConfig.footer.text}</p>
        </div>
      </footer>
    </main>
  );
}
