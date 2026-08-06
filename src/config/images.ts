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
  src: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
  path: "images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
  alt: "A warm family embrace during a meaningful celebration",
  position: "48% 68%",
};

export const heroSequence: ConfigImage[] = [
  heroImage,
];
