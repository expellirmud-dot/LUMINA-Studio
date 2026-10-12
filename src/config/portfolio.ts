import type { PortfolioImage, ConfigImage } from "./images";

export const portfolioConfig: PortfolioImage[] = [
  {
    eyebrow: "BEGINNING",
    description: "Softly, the day begins.",
    image: {
      src: "/images/portfolio/wedding-party-trial/hero_5/209.jpg",
      path: "/images/portfolio/wedding-party-trial/hero_5/209.jpg",
      alt: "Main Hero / Event identity",
      position: "50% 50%",
    },
  },
  {
    eyebrow: "CEREMONY",
    description: "The quiet rituals that hold the day together.",
    image: {
      src: "/images/portfolio/wedding-party-trial/hero_5/218.jpg",
      path: "/images/portfolio/wedding-party-trial/hero_5/218.jpg",
      alt: "Ceremony / featured moment",
      position: "50% 50%",
    },
  },
  {
    eyebrow: "FAMILY",
    description: "The warmth that stays after the celebration ends.",
    image: {
      src: "/images/portfolio/wedding-party-trial/hero_5/PTO_3127.jpg",
      path: "/images/portfolio/wedding-party-trial/hero_5/PTO_3127.jpg",
      alt: "Family / closing warmth",
      position: "50% 20%",
    },
  },
  {
    eyebrow: "CELEBRATION",
    description: "Laughter, movement, and the people you love.",
    image: {
      src: "/images/portfolio/wedding-party-trial/hero_5/340.jpg",
      path: "/images/portfolio/wedding-party-trial/hero_5/340.jpg",
      alt: "Entertainment / energy peak",
      position: "50% 50%",
    },
  },
  {
    eyebrow: "ATMOSPHERE",
    description: "A place prepared for memory.",
    image: {
      src: "/images/portfolio/wedding-party-trial/hero_5/PTO_3041.jpg",
      path: "/images/portfolio/wedding-party-trial/hero_5/PTO_3041.jpg",
      alt: "Atmosphere / archive memory",
      position: "50% 50%",
    },
  },
];

export type NarrativeFrame = {
  image: ConfigImage;
  timeContext?: string;
  caption: string;
};

export type SelectedStory = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: ConfigImage;
  frames?: NarrativeFrame[];
};

export const selectedStoriesConfig: SelectedStory[] = [
  {
    eyebrow: "RITUAL",
    title: "What is carried forward",
    subtitle: "Tradition, gestures, and the people who give them meaning.",
    image: {
      src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
      path: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
      alt: "An elder offering a blessing during a family ceremony",
      position: "55% 52%",
    },
    frames: [
      {
        image: {
          src: "/images/portfolio/lumina-harvest-v1/000001_opening_detail_IMG_0629.webp",
          path: "/images/portfolio/lumina-harvest-v1/000001_opening_detail_IMG_0629.webp",
          alt: "Ceremony items placed calmly before the arrival of family",
          position: "50% 50%",
        },
        timeContext: "รายละเอียดของพิธี",
        caption: "รายละเอียดของสถานที่และสิ่งของที่เตรียมไว้สำหรับพิธี",
      },
      {
        image: {
          src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
          path: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
          alt: "An elder offering a blessing during a family ceremony",
          position: "55% 52%",
        },
        timeContext: "ช่วงเวลาแห่งคำอวยพร",
        caption: "คำอวยพรและสัมผัสมือจากผู้ใหญ่ ช่วงเวลาที่เรียบง่ายแต่เปี่ยมด้วยความหมาย",
      },
      {
        image: {
          src: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
          path: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
          alt: "A warm family embrace after the ceremony",
          position: "48% 68%",
        },
        timeContext: "สายใยครอบครัว",
        caption: "อ้อมกอดและความอบอุ่นที่สะท้อนความผูกพันในครอบครัว",
      },
    ],
  },
  {
    eyebrow: "RELATIONSHIP",
    title: "What holds us close",
    subtitle: "The affection that appears without being asked for.",
    image: {
      src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
      path: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
      alt: "A newlywed couple walking together after their ceremony",
      position: "52% 55%",
    },
  },
  {
    eyebrow: "PRESENCE",
    title: "What it felt like",
    subtitle: "Portraits and passing moments that belong only to that day.",
    image: {
      src: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp",
      path: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp",
      alt: "A bride smiling naturally while holding a cream bouquet",
      position: "50% 48%",
    },
  },
];

export const momentImagesConfig = [
  {
    src: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
    alt: "Ceremonial offerings prepared before an ordination ritual",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-101.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-101.jpg",
    alt: "Family members taking part in the hair-cutting ritual before ordination",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
    alt: "A ceremonial offering being shared with elders during an ordination",
    position: "52% 52%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
    alt: "A quiet water-blessing gesture shared with family during ordination",
    position: "54% 58%",
  },
  {
    src: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
    path: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
    alt: "A quiet portrait of the ordinand near the temple doorway",
    position: "50% 42%",
  },
];


export const experienceImagesConfig = [
  {
    src: "/images/portfolio/lumina-harvest-v1/000001_opening_detail_IMG_0629.webp",
    path: "/images/portfolio/lumina-harvest-v1/000001_opening_detail_IMG_0629.webp",
    alt: "A ceremony space prepared quietly before people arrive",
    position: "50% 50%",
  },
  {
    src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
    path: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
    alt: "An elder offering a blessing during a family ceremony",
    position: "55% 52%",
  },
  {
    src: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp",
    path: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp",
    alt: "A bride held in a natural portrait between moments",
    position: "50% 48%",
  },
  {
    src: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
    path: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
    alt: "A warm family embrace after the ceremony",
    position: "48% 68%",
  },
];

// TASK-049 experimental photo-story presentation; canonical portfolio configuration.
export type StoryPresentationSet = {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  image: ConfigImage;
  details: ConfigImage[];
  frames: NarrativeFrame[];
};

// TASK-049 experiment only. Existing photography is reused; no new assets.
export const storyPresentationSets: StoryPresentationSet[] = [
  {
    id: "relationship",
    eyebrow: "RELATIONSHIP · 01",
    title: "ใกล้กันในช่วงเวลาธรรมดา",
    note: "ภาพเล็ก ๆ ของความผูกพัน ท่ามกลางวันสำคัญของผู้คน",
    image: {
      src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
      path: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
      alt: "คู่บ่าวสาวเดินเคียงกันในงานพิธี",
      position: "52% 55%",
    },
    details: [
      {
        src: "/images/portfolio/wedding-ceremony-v1/PTO-3488.jpg",
        path: "/images/portfolio/wedding-ceremony-v1/PTO-3488.jpg",
        alt: "มือของเจ้าสาววางบนไหล่คนใกล้ชิด",
        position: "55% 50%",
      },
      {
        src: "/images/portfolio/wedding-ceremony-v1/PTO-692.jpg",
        path: "/images/portfolio/wedding-ceremony-v1/PTO-692.jpg",
        alt: "อีกหนึ่งภาพจากเรื่องราวงานแต่งงาน",
        position: "50% 50%",
      },
    ],
    frames: [
      {
        image: {
          src: "/images/portfolio/wedding-ceremony-v1/PTO-3488.jpg",
          path: "/images/portfolio/wedding-ceremony-v1/PTO-3488.jpg",
          alt: "มือของเจ้าสาววางบนไหล่คนใกล้ชิด",
          position: "55% 50%",
        },
        timeContext: "ความใกล้ชิด",
        caption: "บางความรู้สึกปรากฏผ่านท่าทางเล็ก ๆ โดยไม่ต้องมีคำพูด",
      },
      {
        image: {
          src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
          path: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
          alt: "คู่บ่าวสาวเดินเคียงกันในงานพิธี",
          position: "52% 55%",
        },
        timeContext: "เคียงข้างกัน",
        caption: "คนสองคนในช่วงเวลาที่ได้เดินอยู่ข้างกัน",
      },
      {
        image: {
          src: "/images/portfolio/wedding-ceremony-v1/PTO-692.jpg",
          path: "/images/portfolio/wedding-ceremony-v1/PTO-692.jpg",
          alt: "ภาพหนึ่งจากชุดงานแต่งงาน",
          position: "50% 50%",
        },
        timeContext: "ในวันเดียวกัน",
        caption: "ยังมีรายละเอียดอื่น ๆ ที่ทำให้วันนั้นเป็นเรื่องราวของผู้คน",
      },
    ],
  },
  {
    id: "ritual",
    eyebrow: "RITUAL · 02",
    title: "สิ่งที่ส่งต่อกันอย่างเงียบ ๆ",
    note: "ประเพณี ผู้คน และรายละเอียดที่ทำให้เราอยากจดจำ",
    image: {
      src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
      path: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
      alt: "ช่วงเวลาทำพิธีร่วมกันภายในครอบครัว",
      position: "54% 58%",
    },
    details: [
      {
        src: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
        path: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
        alt: "เครื่องประกอบพิธีที่จัดเตรียมไว้",
        position: "50% 50%",
      },
      {
        src: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
        path: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
        alt: "ภาพบุคคลในวันอุปสมบท",
        position: "50% 42%",
      },
    ],
    frames: [
      {
        image: {
          src: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
          path: "/images/portfolio/phra-louis-v1/PTO-13.jpg",
          alt: "เครื่องประกอบพิธีที่จัดเตรียมไว้",
          position: "50% 50%",
        },
        timeContext: "รายละเอียดพิธี",
        caption: "สิ่งของที่เตรียมไว้เป็นส่วนหนึ่งของความหมายในวันสำคัญ",
      },
      {
        image: {
          src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
          path: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
          alt: "ช่วงเวลาทำพิธีร่วมกันภายในครอบครัว",
          position: "54% 58%",
        },
        timeContext: "ผู้คนและพิธีการ",
        caption: "ความสัมพันธ์ของผู้คนปรากฏอยู่ในกิริยาและการอยู่ร่วมกัน",
      },
      {
        image: {
          src: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
          path: "/images/portfolio/phra-louis-v1/PTO-318.jpg",
          alt: "ภาพบุคคลในวันอุปสมบท",
          position: "50% 42%",
        },
        timeContext: "ภาพหนึ่งของวัน",
        caption: "ภาพที่ช่วยให้ย้อนนึกถึงผู้คนและบรรยากาศของช่วงเวลานั้น",
      },
    ],
  },
];
