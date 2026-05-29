import type { StaticImageData } from "next/image";
import profilePortrait from "../../docs/Profile Pic.jpg";
import editorialPresenceImage from "../../docs/pic/1/125.jpg";
import weddingLightImage from "../../docs/pic/2/IMG_1718.jpg";
import sacredCeremonyImage from "../../docs/pic/2/IMG_1754.jpg";
import blessingAtHomeImage from "../../docs/pic/2/PTO_8484.jpg";

export type ConfigImage = {
  src: StaticImageData;
  path: string;
  alt: string;
  position: string;
};

export type PortfolioImage = ConfigImage & {
  title: string;
  category: string;
};

export const profileImage: ConfigImage = {
  src: profilePortrait,
  path: "docs/Profile Pic.jpg",
  alt: "ToTo Therdsak, Photographer and Visual Storyteller",
  position: "52% 23%",
};

export const heroImage: ConfigImage = {
  src: sacredCeremonyImage,
  path: "docs/pic/2/IMG_1754.jpg",
  alt: "Editorial ceremony portrait with soft floral styling",
  position: "55% 48%",
};

export const portfolioImages: PortfolioImage[] = [
  {
    title: "Wedding Light",
    category: "Weddings",
    src: weddingLightImage,
    path: "docs/pic/2/IMG_1718.jpg",
    alt: "Outdoor wedding ceremony stage with soft floral styling and guests",
    position: "50% 45%",
  },
  {
    title: "Sacred Ceremony",
    category: "Ordinations",
    src: sacredCeremonyImage,
    path: "docs/pic/2/IMG_1754.jpg",
    alt: "Formal community ceremony portrait beneath evening lights",
    position: "50% 47%",
  },
  {
    title: "Blessing at Home",
    category: "House Blessings",
    src: blessingAtHomeImage,
    path: "docs/pic/2/PTO_8484.jpg",
    alt: "House blessing setup with ceremonial bowls and floral stage",
    position: "50% 42%",
  },
  {
    title: "Editorial Presence",
    category: "Editorial Portraits",
    src: editorialPresenceImage,
    path: "docs/pic/1/125.jpg",
    alt: "Cinematic performance detail with guitar and saturated stage light",
    position: "50% 50%",
  },
];
