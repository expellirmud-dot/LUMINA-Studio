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
  src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.jpg",
  path: "images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.jpg",
  alt: "Candid moment during the ceremony",
  position: "50% 50%",
};

export const heroSequence: ConfigImage[] = [
  {
    src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.jpg",
    path: "images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.jpg",
    alt: "Candid moment during the ceremony",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.jpg",
    path: "images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.jpg",
    alt: "Hero shot of a wedding ceremony",
    position: "50% 48%",
  },
  {
    src: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.jpg",
    path: "images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.jpg",
    alt: "Family emotion moment",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/lumina-harvest-v1/000029_ceremony_cinematic_PTO_4000.jpg",
    path: "images/portfolio/lumina-harvest-v1/000029_ceremony_cinematic_PTO_4000.jpg",
    alt: "Ceremony cinematic moment",
    position: "50% 50%",
  },
];

