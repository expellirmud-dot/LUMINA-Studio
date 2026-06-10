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
  src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
  path: "images/portfolio/phra-louis-v1/PTO-296.jpg",
  alt: "Ordination blessing with family gathered close",
  position: "56% 42%",
};

export const heroSequence: ConfigImage[] = [
  heroImage,
];
