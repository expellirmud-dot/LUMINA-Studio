import Image from "next/image";
import { heroImage, portfolioImages, profileImage } from "../src/config/images";
import { siteConfig } from "../src/config/site";
import { typographyConfig } from "../src/config/typography";
import { contactVariants, visualConfig } from "../src/config/visual";

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
            {siteConfig.brandPrimary}{" "}
            <span className={typographyConfig.tokens.brandStudioHeader}>
              {siteConfig.brandSecondary}
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--soft-gray)] md:flex">
            {siteConfig.navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="gold-link text-sm">
            Begin
          </a>
        </div>
      </nav>

      <section id="hero" className="hero-section section-shell pt-28">
        <div className="grid min-h-[88svh] items-end gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="reveal space-y-8 pb-10">
            <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
            <h1 className={typographyConfig.tokens.heroHeadline}>
              {siteConfig.hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--soft-gray)] sm:text-xl">
              {siteConfig.hero.copy}
            </p>
            <div className="hero-trust">
              <span>{siteConfig.ownerName}</span>
              <span>{siteConfig.ownerRole}</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="primary-action">
                {siteConfig.hero.primaryCta}
              </a>
              <a href="#story" className="secondary-action">
                {siteConfig.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="reveal hero-focal" aria-label="Reserved area for future 3D Crystal Experience">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes={visualConfig.heroImageSizes}
              className={visualConfig.heroImageClass}
              style={{ objectPosition: heroImage.position }}
              priority
            />
            <div className="focal-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="crystal-reserve">
              <p>{siteConfig.hero.conceptLabel}</p>
              <strong>{siteConfig.hero.conceptTitle}</strong>
              <span>{siteConfig.hero.conceptNote}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section-shell border-t border-white/10 py-24 sm:py-32">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <p className="eyebrow reveal">Scroll Storytelling</p>
          <h2 className={`reveal ${typographyConfig.tokens.sectionHeadline}`}>
            Crystal, light, lens, frame, photography, LUMINA.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.storySteps.map((step, index) => (
            <article key={step.label} className="story-panel reveal">
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
            <p className="eyebrow reveal">Featured Work</p>
            <h2 className={typographyConfig.tokens.portfolioHeadline}>
              Portfolio studies with editorial rhythm.
            </h2>
          </div>
          <p className="reveal max-w-sm leading-7 text-[var(--soft-gray)]">
            Four selected portfolio frames establish the visual direction while
            the full archive remains reserved for future portfolio expansion.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioImages.map((item, index) => (
            <article key={item.title} className="portfolio-tile reveal">
              <div className="portfolio-image-frame">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={visualConfig.portfolioImageSizes}
                  className={visualConfig.portfolioImageClass}
                  style={{ objectPosition: item.position }}
                />
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <h3 className="font-serif text-3xl">{item.title}</h3>
                <p className="text-sm text-[var(--muted-gold)]">{item.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell border-y border-white/10 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="eyebrow reveal">Services</p>
            <h2 className={`reveal mt-5 ${typographyConfig.tokens.sectionHeadline}`}>
              Photography for meaningful occasions and editorial presence.
            </h2>
          </div>
          <div className="divide-y divide-white/10">
            {siteConfig.services.map((service) => (
              <div key={service} className="service-row reveal">
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
            <figcaption>{siteConfig.ownerName} / Photographer</figcaption>
          </figure>
          <div className="reveal space-y-7">
            <p className="eyebrow">About Studio</p>
            <h2 className={typographyConfig.tokens.sectionHeadline}>
              Led by {siteConfig.ownerName}, {siteConfig.ownerRole}.
            </h2>
            <p className="text-lg leading-8 text-[var(--soft-gray)]">
              LUMINA Studio is built around calm observation, restrained
              composition, and the emotional weight of real occasions. The work
              is shaped for weddings, ordinations, house blessings, ceremonies,
              family celebrations, and editorial portraits with a cinematic,
              human point of view.
            </p>
            <blockquote className="photographer-quote">
              &ldquo;I look for the quiet frame where light, memory, and feeling meet.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-20 pt-10 sm:pb-28">
        <div className={contactVariant.wrapperClass}>
          <p className="eyebrow">Contact CTA</p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
            {siteConfig.contact.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--soft-gray)]">
            {siteConfig.contact.copy}
          </p>
          <div className={contactVariant.gridClass}>
            {siteConfig.contact.items.map((item) => (
              <a key={item.label} href={item.href} className={contactVariant.itemClass}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-shell border-t border-white/10 py-8">
        <div className="footer-balance">
          <p className="flex items-baseline gap-1.5 font-serif text-3xl text-[var(--warm-white)]">
            {siteConfig.brandPrimary}{" "}
            <span className={typographyConfig.tokens.brandStudioFooter}>
              {siteConfig.brandSecondary}
            </span>
          </p>
          <p>
            {siteConfig.ownerName} / {siteConfig.ownerRole}
          </p>
          <p>Weddings / Ceremonies / Family / Editorial Portraits</p>
        </div>
      </footer>
    </main>
  );
}
