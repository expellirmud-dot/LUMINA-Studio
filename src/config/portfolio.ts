import type { PortfolioImage } from "./images";

import img1 from "../../Portfolio/1/PTO-556.jpg";
import img2 from "../../Portfolio/2/PTO-406.jpg";
import img3 from "../../Portfolio/1/PTO-692.jpg";
import img4 from "../../Portfolio/4/PTO_8424.jpg";
import img5 from "../../Portfolio/4/PTO_8390.jpg";

export const portfolioConfig: PortfolioImage[] = [
  {
    title: "Beginning",
    category: "Hero",
    src: img1,
    path: "/Portfolio/1/PTO-556.jpg",
    alt: "Couple walking forward, symbolizing a new beginning",
    position: "50% 50%",
  },
  {
    title: "Tradition",
    category: "Story",
    src: img2,
    path: "/Portfolio/2/PTO-406.jpg",
    alt: "Traditional context inside a temple/church",
    position: "50% 50%",
  },
  {
    title: "Celebration",
    category: "Peak",
    src: img5,
    path: "/Portfolio/4/PTO_8390.jpg",
    alt: "Piggyback ride filled with joyful celebration",
    position: "50% 50%",
  },
  {
    title: "Personality",
    category: "Character",
    src: img4,
    path: "/Portfolio/4/PTO_8424.jpg",
    alt: "Signature portrait of the bride with sunflower",
    position: "50% 50%",
  },
  {
    title: "Relationship",
    category: "Signature",
    src: img3,
    path: "/Portfolio/1/PTO-692.jpg",
    alt: "Emotional embrace, deep connection",
    position: "50% 20%",
  },
];
