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
  src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
  path: "images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
  alt: "The couple walking together, reflecting a modern and romantic beginning.",
  position: "50% 50%",
};

export const heroSequence: ConfigImage[] = [
  {
    src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
    path: "images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
    alt: "The couple walking together, reflecting a modern and romantic beginning.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/wedding-ceremony-v1/PTO-506.jpg",
    path: "images/portfolio/wedding-ceremony-v1/PTO-506.jpg",
    alt: "A quiet and delicate portrait of the bride.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/wedding-ceremony-v1/TK-142.jpg",
    path: "images/portfolio/wedding-ceremony-v1/TK-142.jpg",
    alt: "An authentic documentary moment capturing the cultural ceremony.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/wedding-ceremony-v1/PTO-692.jpg",
    path: "images/portfolio/wedding-ceremony-v1/PTO-692.jpg",
    alt: "A heartfelt and emotional family moment during the ceremony.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/wedding-ceremony-v1/PTO-3488.jpg",
    path: "images/portfolio/wedding-ceremony-v1/PTO-3488.jpg",
    alt: "Intimate details that complete the story.",
    position: "50% 50%",
  },
];