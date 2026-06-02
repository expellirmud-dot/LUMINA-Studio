import type { StaticImageData } from "next/image";
import profilePortrait from "../../docs/Profile Pic.jpg";
import coupleWalkImage from "../../Portfolio/1/PTO-556.jpg";
import ordinationPortrait from "../../Portfolio/2/PTO-305.jpg";
import stageImage from "../../Portfolio/3/322.jpg";
import quietFrameImage from "../../Portfolio/4/PTO_8348.jpg";
import familyMomentImage from "../../Portfolio/5/PTO (74).jpg";
import detailImage from "../../Portfolio/1/TK_2 (317).jpg";

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
    path: "Portfolio/1/PTO-556.jpg",
    alt: "Couple walking together during an outdoor wedding ceremony",
    position: "50% 48%",
  },
  {
    src: ordinationPortrait,
    path: "Portfolio/2/PTO-305.jpg",
    alt: "Beautiful ordination portrait with warm lighting",
    position: "50% 42%",
  },
  {
    src: stageImage,
    path: "Portfolio/3/322.jpg",
    alt: "Capturing the vibrant atmosphere on stage",
    position: "50% 50%",
  },
  {
    src: quietFrameImage,
    path: "Portfolio/4/PTO_8348.jpg",
    alt: "Quiet moment framed with an editorial aesthetic",
    position: "50% 50%",
  },
  {
    src: familyMomentImage,
    path: "Portfolio/5/PTO (74).jpg",
    alt: "A family embracing in a natural emotional moment",
    position: "50% 44%",
  },
  {
    src: detailImage,
    path: "Portfolio/1/TK_2 (317).jpg",
    alt: "Close detail of an intimate quiet moment",
    position: "50% 50%",
  },
];

