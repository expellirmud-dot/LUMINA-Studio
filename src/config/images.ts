import type { StaticImageData } from "next/image";
import profilePortrait from "../../docs/Profile Pic.jpg";

export type ConfigImage = {
  src: StaticImageData | string;
  path: string;
  alt: string;
  position: string;
};

export type PortfolioImage = {
  image: ConfigImage;
  eyebrow: string;
  description: string;
};

export const profileImage: ConfigImage = {
  src: profilePortrait,
  path: "docs/Profile Pic.jpg",
  alt: "ToTo Therdsak, Photographer and Visual Storyteller",
  position: "52% 23%",
};

export const heroImage: ConfigImage = {
  src: "/images/portfolio/phra-ob-v1/000046_hero_ordination_14.webp",
  path: "images/portfolio/phra-ob-v1/000046_hero_ordination_14.webp",
  alt: "Ordination ceremony hero shot",
  position: "50% 50%",
};

export const heroSequence: ConfigImage[] = [
  {
    src: "/images/portfolio/phra-ob-v1/000046_hero_ordination_14.webp",
    path: "images/portfolio/phra-ob-v1/000046_hero_ordination_14.webp",
    alt: "Ordination ceremony opening",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-ob-v1/001217_documentary_moment_PTO (563).webp",
    path: "images/portfolio/phra-ob-v1/001217_documentary_moment_PTO (563).webp",
    alt: "Family sharing a joyful moment during the ceremony",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-ob-v1/000095_portrait_184.webp",
    path: "images/portfolio/phra-ob-v1/000095_portrait_184.webp",
    alt: "Portrait of the newly ordained monk",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-ob-v1/ritual_detail_54.webp",
    path: "images/portfolio/phra-ob-v1/ritual_detail_54.webp",
    alt: "Traditional ordination ritual detail",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-ob-v1/000103_ceremony_vertical_191.webp",
    path: "images/portfolio/phra-ob-v1/000103_ceremony_vertical_191.webp",
    alt: "Ordination procession and ceremony",
    position: "50% 50%",
  },
];