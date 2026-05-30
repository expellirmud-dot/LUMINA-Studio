export type ContactVariantName = "documentary-minimal" | "contact-strip" | "quiet-card";

export const contactVariants: Record<
  ContactVariantName,
  {
    wrapperClass: string;
    gridClass: string;
    itemClass: string;
  }
> = {
  "documentary-minimal": {
    wrapperClass: "cta-band reveal",
    gridClass: "contact-grid mt-10",
    itemClass: "contact-link",
  },
  "contact-strip": {
    wrapperClass: "cta-band reveal",
    gridClass: "contact-grid contact-grid-strip mt-10",
    itemClass: "contact-link",
  },
  "quiet-card": {
    wrapperClass: "cta-band cta-band-quiet reveal",
    gridClass: "contact-grid mt-10",
    itemClass: "contact-link contact-link-quiet",
  },
};

export type HeroExperienceVariant = "documentary-sequence" | "reactive-light-frame" | "lens-light-sweep" | "quiet-breathing-frame";
export type HeroInteractionIntensity = "off" | "subtle" | "medium";

export const visualConfig: {
  activeContactVariant: ContactVariantName;
  heroImageClass: string;
  portfolioImageClass: string;
  profileImageClass: string;
  portfolioImageSizes: string;
  heroImageSizes: string;
  profileImageSizes: string;
  heroExperienceVariant: HeroExperienceVariant;
  heroInteractionIntensity: HeroInteractionIntensity;
} = {
  activeContactVariant: "contact-strip",
  heroImageClass: "hero-visual",
  portfolioImageClass: "portfolio-image",
  profileImageClass: "about-portrait",
  portfolioImageSizes: "(min-width: 768px) 50vw, 100vw",
  heroImageSizes: "(min-width: 1024px) 55vw, 100vw",
  profileImageSizes: "(min-width: 1024px) 50vw, 100vw",
  heroExperienceVariant: "quiet-breathing-frame",
  heroInteractionIntensity: "off",
};

export const slideshowConfig = {
  interval: 6000,
  transitionDuration: 1500,
};
