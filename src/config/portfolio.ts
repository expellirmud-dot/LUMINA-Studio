import type { PortfolioImage } from "./images";
import bridePortrait from "../../Portfolio/TOP10/1/PTO-506.jpg";
import coupleWalk from "../../Portfolio/TOP10/1/PTO-556.jpg";
import familyMoment from "../../Portfolio/TOP10/1/PTO-692.jpg";
import waterCeremony from "../../Portfolio/TOP10/1/TK (142).jpg";
import quietDoorway from "../../Portfolio/TOP10/1/TK_2 (317).jpg";
import ordinationPortrait from "../../Portfolio/TOP10/2/PTO-380.jpg";
import templeRitual from "../../Portfolio/TOP10/2/PTO-406.jpg";
import ringDetail from "../../Portfolio/TOP10/3/PTO_3488.jpg";
import stagePortrait from "../../Portfolio/TOP10/3/418.jpg";

export const portfolioConfig: PortfolioImage[] = [
  {
    title: "Walking Into the Day",
    category: "Wedding & Ceremony",
    src: coupleWalk,
    path: "/Portfolio/TOP10/1/PTO-556.jpg",
    alt: "Couple walking together during an outdoor wedding ceremony",
    position: "50% 48%",
  },
  {
    title: "Bride, Naturally",
    category: "People & Portrait",
    src: bridePortrait,
    path: "/Portfolio/TOP10/1/PTO-506.jpg",
    alt: "Bride smiling naturally while holding a bouquet",
    position: "50% 42%",
  },
  {
    title: "Shared Ceremony",
    category: "Wedding & Ceremony",
    src: waterCeremony,
    path: "/Portfolio/TOP10/1/TK (142).jpg",
    alt: "Couple sharing a traditional water ceremony moment",
    position: "50% 50%",
  },
  {
    title: "Between Two People",
    category: "People & Portrait",
    src: quietDoorway,
    path: "/Portfolio/TOP10/1/TK_2 (317).jpg",
    alt: "Quiet couple moment framed through a doorway",
    position: "50% 50%",
  },
  {
    title: "Family Close",
    category: "People & Portrait",
    src: familyMoment,
    path: "/Portfolio/TOP10/1/PTO-692.jpg",
    alt: "Bride embracing an elder during a family portrait moment",
    position: "50% 44%",
  },
  {
    title: "Ordination Portrait",
    category: "Ordination Stories",
    src: ordinationPortrait,
    path: "/Portfolio/TOP10/2/PTO-380.jpg",
    alt: "New monk portrait outside a temple doorway",
    position: "50% 44%",
  },
  {
    title: "Temple Atmosphere",
    category: "Ordination Stories",
    src: templeRitual,
    path: "/Portfolio/TOP10/2/PTO-406.jpg",
    alt: "Ordination ritual inside a colorful temple hall",
    position: "50% 50%",
  },
  {
    title: "Small Detail",
    category: "People & Portrait",
    src: ringDetail,
    path: "/Portfolio/TOP10/3/PTO_3488.jpg",
    alt: "Close detail of a hand resting on a shoulder with a ring visible",
    position: "50% 50%",
  },
  {
    title: "Stage Moment",
    category: "Stage & Concert",
    src: stagePortrait,
    path: "/Portfolio/TOP10/3/418.jpg",
    alt: "Musician performing on stage under warm concert lights",
    position: "50% 45%",
  },
];
