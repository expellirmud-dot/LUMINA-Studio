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
  src: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
  path: "images/portfolio/phra-louis-v1/PTO-250.jpg",
  alt: "The solemn and respectful atmosphere during the ordination ceremony.",
  position: "50% 50%",
};

export const heroSequence: ConfigImage[] = [
  {
    src: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
    path: "images/portfolio/phra-louis-v1/PTO-250.jpg",
    alt: "The solemn and respectful atmosphere during the ordination ceremony.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-101.jpg",
    path: "images/portfolio/phra-louis-v1/PTO-101.jpg",
    alt: "The serene morning start of the ordination preparation.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
    path: "images/portfolio/phra-louis-v1/PTO-296.jpg",
    alt: "Family participating in the heartfelt traditional ritual.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-280.jpg",
    path: "images/portfolio/phra-louis-v1/PTO-280.jpg",
    alt: "The quiet and reflective closing moment of the ceremony.",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
    path: "images/portfolio/phra-louis-v1/PTO-318.jpg",
    alt: "A joyful release moment tossing coins at the end of the ceremony.",
    position: "50% 50%",
  },
];