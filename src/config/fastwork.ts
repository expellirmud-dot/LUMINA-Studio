export type FastworkImage = {
  src: string;
  alt: string;
  position: string;
  mobilePosition: string;
};

export const fastworkConfig = {
  hero: {
    eyebrow: "LUMINA STUDIO · HUMAN DOCUMENTARY PHOTOGRAPHY",
    title: "รับถ่ายภาพงานแต่ง งานบวช งานพิธี\nและช่วงเวลาสำคัญ",
    body: "บันทึกทั้งเหตุการณ์ ผู้คน และบรรยากาศของวันนั้นอย่างเป็นธรรมชาติ โดยรบกวนจังหวะของงานให้น้อยที่สุด",
    cta: "ชมตัวอย่างผลงาน",
    image: {
      src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
      alt: "คู่บ่าวสาวเดินเคียงกันหลังพิธีแต่งงาน",
      position: "52% 55%",
      mobilePosition: "58% 54%",
    } satisfies FastworkImage,
  },

  intro: {
    label: "วิธีที่เรามองงาน",
    title: "ไม่ได้มองหาเพียงภาพที่สวย\nแต่เก็บสิ่งที่เกิดขึ้นจริง",
    body: "ตั้งแต่พิธีหลัก บุคคลสำคัญ ความสัมพันธ์ของครอบครัว ไปจนถึงรายละเอียดเล็ก ๆ รอบงาน ภาพถูกเลือกเพื่อให้ย้อนกลับมาแล้วจำได้ทั้งสิ่งที่เกิดขึ้นและความรู้สึกของวันนั้น",
  },

  stories: [
    {
      label: "งานแต่งงาน",
      title: "ก่อนพิธีจะเริ่ม",
      body: "ภาพบุคคลและช่วงเตรียมตัวที่ยังเป็นธรรมชาติ ก่อนจังหวะสำคัญของวันจะเริ่มขึ้น",
      image: {
        src: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp",
        alt: "เจ้าสาวยิ้มอย่างเป็นธรรมชาติพร้อมช่อดอกไม้สีอ่อน",
        position: "50% 48%",
        mobilePosition: "50% 44%",
      } satisfies FastworkImage,
    },
    {
      label: "งานพิธีและครอบครัว",
      title: "สิ่งที่ส่งต่อกันในครอบครัว",
      body: "ให้ความสำคัญกับพิธี บุคคลสำคัญ และปฏิสัมพันธ์ที่เกิดขึ้นจริงระหว่างคนในครอบครัว",
      image: {
        src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
        alt: "ผู้ใหญ่กำลังให้พรในพิธีครอบครัว",
        position: "55% 52%",
        mobilePosition: "58% 50%",
      } satisfies FastworkImage,
    },
    {
      label: "งานบวช",
      title: "พิธีที่มีทั้งความหมายและความรู้สึก",
      body: "เก็บลำดับพิธีพร้อมช่วงเวลาระหว่างครอบครัว ญาติ และผู้ร่วมงาน โดยไม่ทำให้บรรยากาศของพิธีสะดุด",
      image: {
        src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
        alt: "ช่วงเวลาอบอุ่นระหว่างครอบครัวในพิธีบวช",
        position: "54% 58%",
        mobilePosition: "56% 56%",
      } satisfies FastworkImage,
    },
  ],

  familyFeature: {
    label: "PEOPLE & FAMILY",
    title: "ช่วงเวลาที่มีความหมาย\nมักเกิดขึ้นระหว่างคน",
    body: "นอกจากภาพพิธี เราเฝ้าดูรอยยิ้ม การกอด การมองกัน และรายละเอียดที่เกิดขึ้นเพียงไม่กี่วินาที เพราะหลายครั้งสิ่งเหล่านี้คือภาพที่พากลับไปสู่ความรู้สึกของวันนั้นได้ชัดที่สุด",
    image: {
      src: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
      alt: "ครอบครัวกอดกันในช่วงเวลาสำคัญของงาน",
      position: "48% 68%",
      mobilePosition: "54% 62%",
    } satisfies FastworkImage,
  },

  moments: {
    label: "DETAILS · MOVEMENT · ATMOSPHERE",
    title: "ครบทั้งภาพสำคัญ\nและสิ่งที่เกิดขึ้นรอบ ๆ",
    body: "รายละเอียดของพิธี การเคลื่อนไหวของผู้คน ขบวน บรรยากาศ และช่วงฉลอง ช่วยให้ภาพชุดหนึ่งเล่าเรื่องของงานได้ครบกว่าการเก็บเฉพาะภาพหลัก",
    images: [
      {
        src: "/images/portfolio/lumina-harvest-v1/000002_detail_IMG_0637.webp",
        alt: "รายละเอียดอุปกรณ์และสิ่งของที่จัดเตรียมสำหรับพิธี",
        position: "52% 58%",
        mobilePosition: "52% 56%",
      },
      {
        src: "/images/portfolio/2569-03-09/A M/PTO_5779.jpg",
        alt: "ผู้ร่วมพิธียิ้มท่ามกลางครอบครัวและผู้ร่วมงาน",
        position: "52% 60%",
        mobilePosition: "52% 58%",
      },
      {
        src: "/images/portfolio/2569-03-09/A M/PTO_5723.jpg",
        alt: "ครอบครัวเดินร่วมขบวนพร้อมเครื่องประกอบพิธี",
        position: "58% 70%",
        mobilePosition: "62% 64%",
      },
      {
        src: "/images/portfolio/wedding-party-trial/hero_5/340.jpg",
        alt: "ช่วงเฉลิมฉลองที่เต็มไปด้วยการเคลื่อนไหวและรอยยิ้ม",
        position: "50% 50%",
        mobilePosition: "52% 50%",
      },
      {
        src: "/images/portfolio/wedding-party-trial/hero_5/PTO_3041.jpg",
        alt: "บรรยากาศพื้นที่จัดงานก่อนและระหว่างการเฉลิมฉลอง",
        position: "50% 50%",
        mobilePosition: "50% 48%",
      },
    ] satisfies FastworkImage[],
  },

  services: {
    label: "ขอบเขตงาน",
    title: "งานที่รับถ่าย",
    intro: "รายละเอียดจริงของแต่ละงานสามารถปรับตามกำหนดการ สถานที่ และช่วงเวลาที่ต้องการให้เน้นเป็นพิเศษ",
    items: [
      {
        title: "งานแต่งงาน",
        detail: "พิธีสงฆ์ · ขันหมาก · หมั้น · รับไหว้ · รดน้ำสังข์ · งานเลี้ยง",
      },
      {
        title: "งานบวช",
        detail: "ปลงผม · อาบน้ำนาค · ฉลองไตร · รับนาค · อุปสมบท",
      },
      {
        title: "งานพิธีและงานครอบครัว",
        detail: "งานทำบุญ · พิธีครอบครัว · งานสำคัญตามกำหนดการ",
      },
      {
        title: "งานอีเวนต์และงานเลี้ยง",
        detail: "ภาพกิจกรรม · บุคคลสำคัญ · บรรยากาศ · ช่วงเฉลิมฉลอง",
      },
      {
        title: "งานรับปริญญาและภาพบุคคล",
        detail: "รับถ่ายตามรายละเอียดและขอบเขตที่ตกลงก่อนเริ่มงาน",
      },
    ],
  },

  workingStyle: [
    "Documentary / Natural Moment",
    "Ceremony Coverage",
    "Portrait",
    "Family & Relationship",
    "Detail & Atmosphere",
    "Event Coverage",
  ],

  equipment: {
    label: "อุปกรณ์",
    title: "ชุดอุปกรณ์ที่ใช้ทำงาน",
    items: [
      "Nikon D750 ×2",
      "24–70mm f/2.8",
      "85mm f/1.8",
      "LED 300W ×2",
      "LED 200W ×2",
    ],
  },

  delivery: {
    label: "การส่งมอบ",
    title: "ภาพพร้อมใช้งานหลังจบงาน",
    intro: "รูปแบบและระยะเวลาส่งมอบยืนยันตามขอบเขตของแต่ละงานก่อนเริ่มงาน",
    items: [
      "คัดเลือกภาพที่เหมาะสมจากงาน",
      "ปรับแสงและสีให้ภาพมีความต่อเนื่อง",
      "ส่งไฟล์ JPEG ความละเอียดสูง",
      "ส่งผ่าน Google Drive ตามที่ตกลง",
    ],
  },

  marketplaceNotice: {
    label: "FASTWORK",
    title: "การพูดคุยและจ้างงาน\nดำเนินการผ่าน Fastwork",
    body: "สำหรับการสอบถามรายละเอียด ตกลงขอบเขตงาน และจ้างงาน กรุณาดำเนินการผ่านระบบ Fastwork เท่านั้น",
    footnote: "หน้านี้จัดทำขึ้นเพื่อประกอบการพิจารณาผลงานสำหรับการจ้างงานผ่าน Fastwork",
  },
};
