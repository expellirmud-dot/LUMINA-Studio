const navItems = ["Story", "Work", "Services", "Studio", "Contact"];

const storySteps = [
  {
    label: "Crystal",
    copy: "A quiet source of refraction, held for the future interactive centerpiece.",
  },
  {
    label: "Light",
    copy: "Natural contrast, warm highlights, and restrained shadow shape the mood.",
  },
  {
    label: "Lens",
    copy: "Editorial framing gives every scene a deliberate point of view.",
  },
  {
    label: "Frame",
    copy: "Composition becomes the studio language: precise, minimal, cinematic.",
  },
  {
    label: "Photography",
    copy: "Still images carry brand, atmosphere, and emotional clarity.",
  },
  {
    label: "LUMINA",
    copy: "A premium visual studio for photography, direction, and creative work.",
  },
];

const portfolioItems = [
  {
    title: "Wedding Light",
    category: "Weddings",
  },
  {
    title: "Sacred Ceremony",
    category: "Ordinations",
  },
  {
    title: "Blessing at Home",
    category: "House Blessings",
  },
  {
    title: "Editorial Presence",
    category: "Editorial Portraits",
  },
];

const services = [
  "Weddings",
  "Ordinations",
  "House Blessings",
  "Ceremonies",
  "Family Celebrations",
  "Editorial Portraits",
];

const contactItems = [
  {
    label: "Phone",
    value: "064-986-1939",
    href: "tel:0649861939",
  },
  {
    label: "Line",
    value: "expellirmud",
    href: "https://line.me/ti/p/~expellirmud",
  },
  {
    label: "Facebook",
    value: "facebook.com/exstreet",
    href: "https://facebook.com/exstreet",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--charcoal)] text-[var(--warm-white)]">
      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[var(--charcoal)]/82 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#hero" className="font-serif text-2xl text-[var(--warm-white)]">
            LUMINA
          </a>
          <div className="hidden items-center gap-8 text-sm text-[var(--soft-gray)] md:flex">
            {navItems.map((item) => (
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
            <p className="eyebrow">Luxury editorial photography studio</p>
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.94] text-[var(--warm-white)] sm:text-7xl lg:text-8xl">
              LUMINA Studio
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--soft-gray)] sm:text-xl">
              Premium photography and visual storytelling by ToTo Therdsak
              for weddings, ceremonies, families, and editorial portraits.
            </p>
            <div className="hero-trust">
              <span>ToTo Therdsak</span>
              <span>Photographer / Visual Storyteller</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="primary-action">
                View Portfolio Slots
              </a>
              <a href="#story" className="secondary-action">
                Follow the Story
              </a>
            </div>
          </div>

          <div className="reveal hero-focal" aria-label="Reserved area for future 3D Crystal Experience">
            <div className="focal-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="crystal-reserve">
              <p>Reserved focal area</p>
              <strong>Future Crystal Experience</strong>
              <span>No Three.js or WebGL implemented</span>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="section-shell border-t border-white/10 py-24 sm:py-32">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <p className="eyebrow reveal">Scroll Storytelling</p>
          <h2 className="reveal font-serif text-4xl leading-tight sm:text-6xl">
            Crystal, light, lens, frame, photography, LUMINA.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {storySteps.map((step, index) => (
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
            <h2 className="reveal mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              Placeholder portfolio studies with editorial rhythm.
            </h2>
          </div>
          <p className="reveal max-w-sm leading-7 text-[var(--soft-gray)]">
            Elegant image slots are prepared for future real portfolio photos.
            Current visuals remain placeholder-only.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <article key={item.title} className="portfolio-tile reveal">
              <div className="placeholder-frame" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
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
            <h2 className="reveal mt-5 font-serif text-4xl leading-tight sm:text-6xl">
              Photography for meaningful occasions and editorial presence.
            </h2>
          </div>
          <div className="divide-y divide-white/10">
            {services.map((service) => (
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
          <div className="reveal studio-mark" aria-hidden="true">
            <span>L</span>
          </div>
          <div className="reveal space-y-7">
            <p className="eyebrow">About Studio</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              Led by ToTo Therdsak, Photographer / Visual Storyteller.
            </h2>
            <p className="text-lg leading-8 text-[var(--soft-gray)]">
              LUMINA Studio is shaped for premium event, ceremony, family, and
              editorial portrait work. The presentation stays quiet,
              cinematic, and selective while preparing space for a future real
              portfolio.
            </p>
            <div className="owner-card">
              <p>Owner identity</p>
              <strong>ToTo Therdsak</strong>
              <span>Photography / Visual Storytelling / Creative Direction</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pb-20 pt-10 sm:pb-28">
        <div className="cta-band reveal">
          <p className="eyebrow">Contact CTA</p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
            For weddings, ceremonies, portraits, and family celebrations.
          </h2>
          <div className="contact-grid mt-10">
            {contactItems.map((item) => (
              <a key={item.label} href={item.href} className="contact-link">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="section-shell border-t border-white/10 py-8">
        <div className="flex flex-col justify-between gap-4 text-sm text-[var(--soft-gray)] sm:flex-row">
          <p>LUMINA Studio by ToTo Therdsak</p>
          <p>Weddings / Ceremonies / Family / Editorial Portraits</p>
        </div>
      </footer>
    </main>
  );
}
