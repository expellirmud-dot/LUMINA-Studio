import type { StaticImageData } from "next/image";
import profilePortrait from "../../docs/Profile Pic.jpg";
import weddingLightImage from "../../docs/pic/2/IMG_1718.jpg";
import sparklerExitImage from "../../docs/pic/2/IMG_2677.jpg";
import waterCeremonyImage from "../../docs/pic/2/IMG_0673.jpg";
import firstDanceImage from "../../docs/pic/2/IMG_2232.jpg";
import whisperImage from "../../docs/pic/2/IMG_1159.jpg";

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
  src: sparklerExitImage,
  path: "docs/pic/2/IMG_2677.jpg",
  alt: "Cinematic sparkler exit at a premium evening reception",
  position: "50% 40%",
};

export const heroSequence: ConfigImage[] = [
  {
    src: weddingLightImage, // IMG_1718.jpg (Beauty)
    path: "docs/pic/2/IMG_1718.jpg",
    alt: "Outdoor wedding ceremony stage with soft floral styling and guests",
    position: "50% 45%",
  },
  {
    src: waterCeremonyImage, // IMG_0673.jpg (Ceremony)
    path: "docs/pic/2/IMG_0673.jpg",
    alt: "Traditional Thai water pouring ceremony moment with close-up detail",
    position: "50% 50%",
  },
  {
    src: firstDanceImage, // IMG_2232.jpg (Family)
    path: "docs/pic/2/IMG_2232.jpg",
    alt: "First dance candid surrounded by warm ambient fairy lights",
    position: "50% 40%",
  },
  {
    src: whisperImage, // IMG_1159.jpg (Memory)
    path: "docs/pic/2/IMG_1159.jpg",
    alt: "Intimate candid conversation between couple captured in high contrast",
    position: "50% 47%",
  },
  {
    src: sparklerExitImage, // IMG_2677.jpg (Afterglow)
    path: "docs/pic/2/IMG_2677.jpg",
    alt: "Cinematic sparkler exit at a premium evening reception",
    position: "50% 40%",
  },
];


