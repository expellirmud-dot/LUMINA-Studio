# LUMINA Config System
มูเม้นช้าๆ เนียนๆ 
## Goal

LUMINA ต้องเป็นเว็บไซต์ที่ปรับแต่งได้จาก Config Layer

ห้าม hardcode สิ่งที่เปลี่ยนบ่อยไว้ใน Component โดยตรง

Component มีหน้าที่แสดงผล
Config มีหน้าที่ควบคุมข้อมูล หน้าตา และพฤติกรรม

---

## Core Principle

ทุกส่วนที่มีโอกาสเปลี่ยนในอนาคต ควรย้ายออกมาไว้ใน `src/config`

โดยเฉพาะ:

* ข้อความ
* รูปภาพผลงาน
* เมนู
* ช่องทางติดต่อ
* ฟอนต์
* สี
* motion
* CTA
* service list
* social links

---

## Recommended Structure

```text
src/config/
├─ visual.ts
├─ motion.ts
├─ content.ts
├─ portfolio.ts
├─ services.ts
├─ navigation.ts
└─ contact.ts
```

---

## 1. visual.ts

ใช้ควบคุมหน้าตาโดยรวมของเว็บ

ตัวอย่างข้อมูลที่ควรอยู่ในไฟล์นี้:

* theme
* color tone
* font direction
* layout density
* border radius
* shadow style
* active visual variant

ตัวอย่าง:

```ts
export const visualConfig = {
  activeTheme: "dark-luxury",
  colorTone: "charcoal-gold",
  fontDirection: "editorial-serif",
  layoutDensity: "airy",
  radius: "soft",
  shadow: "subtle",
};
```

---

## 2. motion.ts

ใช้ควบคุมการเคลื่อนไหวทั้งหมดของเว็บ

ห้าม hardcode duration, easing, scale, translate, parallax factor ใน Component

ตัวอย่างข้อมูลที่ควรอยู่ในไฟล์นี้:

* hero intro motion
* hero image motion
* section reveal
* card hover
* image hover
* button hover
* parallax
* reduced motion

ตัวอย่าง:

```ts
export const motionConfig = {
  preset: "calm-luxury",

  global: {
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    reducedMotion: true,
  },

  hero: {
    intro: {
      type: "staggered-drift-reveal",
      distance: 8,
      duration: 1800,
      stagger: 220,
    },
    image: {
      type: "slow-drift",
      scale: 1.03,
      parallaxFactor: 0.08,
      duration: 2200,
    },
  },

  sections: {
    reveal: {
      type: "soft-fade-up",
      distance: 10,
      duration: 1500,
      stagger: 160,
    },
  },

  cards: {
    hover: {
      type: "quiet-lift",
      translateY: -3,
      scale: 1.005,
      duration: 900,
    },
  },

  images: {
    hover: {
      type: "editorial-zoom",
      scale: 1.02,
      duration: 1400,
    },
  },

  buttons: {
    hover: {
      type: "soft-lift",
      translateY: -1,
      duration: 700,
    },
  },
};
```

---

## 3. content.ts

ใช้ควบคุมข้อความหลักของเว็บไซต์

ตัวอย่างข้อมูลที่ควรอยู่ในไฟล์นี้:

* hero title
* hero subtitle
* CTA text
* about section
* section headings
* footer text

ตัวอย่าง:

```ts
export const contentConfig = {
  hero: {
    eyebrow: "LUMINA STUDIO",
    title: "ภาพถ่ายที่เล่าเรื่องด้วยแสง",
    subtitle: "งานภาพถ่ายพรีเมียมสำหรับวันสำคัญ",
    primaryCta: "ชมผลงาน",
    secondaryCta: "ติดต่อจองคิว",
  },

  about: {
    title: "เราเชื่อว่าแสงคือภาษาของความทรงจำ",
    description: "LUMINA Studio ถ่ายทอดช่วงเวลาสำคัญผ่านภาพถ่ายที่เรียบ นิ่ง และมีอารมณ์",
  },
};
```

---

## 4. portfolio.ts

ใช้ควบคุมรูปผลงานทั้งหมด

รูปผลงานห้ามฝังตรงใน Component

ตัวอย่างข้อมูลที่ควรอยู่ในไฟล์นี้:

* image path
* alt text
* category
* title
* featured
* display order

ตัวอย่าง:

```ts
export const portfolioConfig = [
  {
    id: "tk-001",
    src: "/images/portfolio/TK_2_739.jpg",
    alt: "ภาพงานขันหมาก",
    title: "Traditional Engagement",
    category: "engagement",
    featured: true,
    order: 1,
  },
  {
    id: "mt-001",
    src: "/images/portfolio/MT_163.jpg",
    alt: "ภาพงานแต่งงาน",
    title: "Wedding Ceremony",
    category: "wedding",
    featured: true,
    order: 2,
  },
];
```

---

## 5. services.ts

ใช้ควบคุมรายการบริการ

ตัวอย่างข้อมูลที่ควรอยู่ในไฟล์นี้:

* service title
* description
* icon key
* price label
* CTA text
* display order

ตัวอย่าง:

```ts
export const servicesConfig = [
  {
    id: "wedding",
    title: "Wedding Photography",
    description: "บันทึกวันสำคัญด้วยภาพถ่ายที่เรียบหรูและมีความหมาย",
    icon: "heart",
    priceLabel: "สอบถามราคา",
    cta: "ดูรายละเอียด",
    order: 1,
  },
];
```

---

## 6. navigation.ts

ใช้ควบคุมเมนูและลิงก์หลัก

ตัวอย่าง:

```ts
export const navigationConfig = {
  logoText: "LUMINA",
  items: [
    { label: "หน้าแรก", href: "#home" },
    { label: "ผลงาน", href: "#portfolio" },
    { label: "บริการ", href: "#services" },
    { label: "ติดต่อ", href: "#contact" },
  ],
};
```

---

## 7. contact.ts

ใช้ควบคุมช่องทางติดต่อ

ตัวอย่าง:

```ts
export const contactConfig = {
  phone: "089-xxx-xxxx",
  line: "@lumina",
  facebook: "https://facebook.com/",
  email: "hello@lumina.studio",
  location: "Ratchaburi, Thailand",

  socialLinks: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
  ],
};
```

---

## Component Rules

Component ต้อง:

* อ่านข้อมูลจาก config
* ไม่ hardcode ข้อความที่เปลี่ยนบ่อย
* ไม่ hardcode รูปผลงาน
* ไม่ hardcode motion
* ไม่ hardcode contact/social links

Component ไม่ควร:

* มี array รูปภาพอยู่ในไฟล์ component
* มีข้อความ marketing ยาว ๆ ฝังตรง
* มี duration/easing/scale/translate ฝังตรง
* มี service list ฝังตรง

---

## Phase Plan

### Phase 1 — Config Foundation

สร้างไฟล์ config หลัก:

* visual.ts
* motion.ts
* content.ts
* portfolio.ts
* services.ts
* navigation.ts
* contact.ts

ยังไม่ต้องเปลี่ยนดีไซน์

---

### Phase 2 — Move Data Out of Components

ย้ายข้อมูลที่ hardcode ออกจาก component

เริ่มจาก:

1. Hero text
2. Navigation
3. Portfolio images
4. Services
5. Contact
6. Social links

---

### Phase 3 — Motion Integration

เชื่อม component กับ motionConfig

ทุก motion ต้องอ่านจาก config หรือ helper กลาง

---

### Phase 4 — Validation

ตรวจสอบว่า:

* เว็บ build ผ่าน
* ไม่มี layout เปลี่ยนผิด
* ไม่มี hardcode ข้อมูลสำคัญใน component
* motion ยังรองรับ prefers-reduced-motion
* เปลี่ยนรูป/ข้อความ/เวลา animation ได้จาก config เท่านั้น

---

## Definition of Done

งานนี้ถือว่าเสร็จเมื่อ:

* มี config files ครบ
* component อ่านค่าจาก config
* portfolio เปลี่ยนรูปได้จาก portfolio.ts
* hero เปลี่ยนข้อความได้จาก content.ts
* motion เปลี่ยนเวลา/ระยะ/easing ได้จาก motion.ts
* navigation/contact/social เปลี่ยนได้จาก config
* ไม่มีการ redesign
* ไม่มี dependency ใหม่
* build ผ่าน
