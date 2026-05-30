import type { StaticImageData } from "next/image";
import profilePortrait from "../../docs/Profile Pic.jpg";
import bridePortraitImage from "../../Portfolio/TOP10/1/PTO-506.jpg";
import coupleWalkImage from "../../Portfolio/TOP10/1/PTO-556.jpg";
import familyMomentImage from "../../Portfolio/TOP10/1/PTO-692.jpg";
import waterCeremonyImage from "../../Portfolio/TOP10/1/TK (142).jpg";
import quietFrameImage from "../../Portfolio/TOP10/1/TK_2 (317).jpg";
import detailImage from "../../Portfolio/TOP10/3/PTO_3488.jpg";

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
  src: coupleWalkImage,
  path: "Portfolio/TOP10/1/PTO-556.jpg",
  alt: "Couple walking together during an outdoor wedding ceremony",
  position: "50% 48%",
};

export const heroSequence: ConfigImage[] = [
  {
    src: coupleWalkImage,
    path: "Portfolio/TOP10/1/PTO-556.jpg",
    alt: "Couple walking together during an outdoor wedding ceremony",
    position: "50% 48%",
  },
  {
    src: bridePortraitImage,
    path: "Portfolio/TOP10/1/PTO-506.jpg",
    alt: "Bride smiling naturally while holding a bouquet",
    position: "50% 42%",
  },
  {
    src: waterCeremonyImage,
    path: "Portfolio/TOP10/1/TK (142).jpg",
    alt: "Couple sharing a traditional water ceremony moment",
    position: "50% 50%",
  },
  {
    src: quietFrameImage,
    path: "Portfolio/TOP10/1/TK_2 (317).jpg",
    alt: "Quiet couple moment framed through a doorway",
    position: "50% 50%",
  },
  {
    src: familyMomentImage,
    path: "Portfolio/TOP10/1/PTO-692.jpg",
    alt: "Bride embracing an elder during a family portrait moment",
    position: "50% 44%",
  },
  {
    src: detailImage,
    path: "Portfolio/TOP10/3/PTO_3488.jpg",
    alt: "Close detail of a hand resting on a shoulder with a ring visible",
    position: "50% 50%",
  },
];

