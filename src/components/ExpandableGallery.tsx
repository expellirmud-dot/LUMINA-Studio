"use client";

import Image from "next/image";
import { useState, useId, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  rotation?: number;
  x?: number;
  y?: number;
  zIndex?: number;
};

const LUMINA_PHOTOS: GalleryPhoto[] = [
  {
    id: "lumina-1",
    src: "/images/portfolio/lumina-harvest-v1/000001_opening_detail_IMG_0629.webp",
    alt: "พื้นที่และแสงยามเช้าก่อนพิธีการ",
    caption: "06:40 — แสงแรกและความเงียบสงบก่อนผู้คนจะมาถึง",
    rotation: -8,
    x: -55,
    y: 10,
    zIndex: 10,
  },
  {
    id: "lumina-2",
    src: "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp",
    alt: "คำอวยพรและสัมผัสมือจากผู้ใหญ่",
    caption: "08:15 — คำอวยพรและสัมผัสมือที่เปี่ยมความหมาย",
    rotation: 2,
    x: 0,
    y: -8,
    zIndex: 20,
  },
  {
    id: "lumina-3",
    src: "/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp",
    alt: "อ้อมกอดในครอบครัว",
    caption: "09:30 — อ้อมกอดแห่งความสุขหลังเสร็จสิ้นพิธี",
    rotation: 9,
    x: 55,
    y: 12,
    zIndex: 15,
  },
  {
    id: "lumina-4",
    src: "/images/portfolio/lumina-harvest-v1/000018_hero_IMG_2036.webp",
    alt: "รอยยิ้มที่เป็นธรรมชาติ",
    caption: "แววตาและรอยยิ้มที่เป็นตัวของตัวเองที่สุด",
  },
  {
    id: "lumina-5",
    src: "/images/portfolio/phra-louis-v1/PTO-101.jpg",
    alt: "พิธีปลงผมและสายใยครอบครัว",
    caption: "สัมผัสแห่งความผูกพันและศรัทธาในครอบครัว",
  },
  {
    id: "lumina-6",
    src: "/images/portfolio/phra-louis-v1/PTO-250.jpg",
    alt: "จังหวะส่งมอบเครื่องสักการะ",
    caption: "ความตั้งใจที่ถ่ายทอดผ่านสองมือ",
  },
  {
    id: "lumina-7",
    src: "/images/portfolio/phra-louis-v1/PTO-296.jpg",
    alt: "การหลั่งน้ำพระพุทธมนต์อันสงบ",
    caption: "หยดน้ำและความสงบใจในช่วงเวลาศักดิ์สิทธิ์",
  },
  {
    id: "lumina-8",
    src: "/images/portfolio/wedding-ceremony-v1/PTO-556.jpg",
    alt: "ก้าวย่างเคียงข้างกัน",
    caption: "จังหวะที่ก้าวเดินเคียงข้างกันในวันสำคัญ",
  },
  {
    id: "lumina-9",
    src: "/images/portfolio/wedding-party-trial/hero_5/PTO_3127.jpg",
    alt: "ความอบอุ่นหลังเสร็จสิ้นพิธี",
    caption: "ความอบอุ่นที่ยังคงอยู่ แม้เวลาจะผ่านไป",
  },
];

const springTransition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 1,
} as const;

export function ExpandableGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  return (
    <section id="unfolding-moments" className="section-shell unfolding-section" aria-label="Unfolding Moments">
      <LayoutGroup id={layoutGroupId}>
        <div className="unfolding-container">
          <div className="unfolding-toolbar">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="collapse-button"
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  onClick={() => setIsExpanded(false)}
                  className="unfolding-back-button"
                  aria-label="ย้อนกลับไปมุมมองพับเก็บ"
                >
                  <span className="unfolding-back-icon" aria-hidden="true">←</span>
                  <span lang="th">ย้อนกลับ</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={containerRef}
            layout
            className={`unfolding-grid-wrapper ${isExpanded ? "is-expanded" : "is-collapsed"}`}
            transition={springTransition}
          >
            <div className={`unfolding-stack-zone ${isExpanded ? "is-expanded" : ""}`}>
              {LUMINA_PHOTOS.map((photo, index) => {
                const isPrimary = index < 3;
                if (!isPrimary && !isExpanded) return null;

                return (
                  <motion.div
                    key={`card-${photo.id}`}
                    layoutId={`photo-card-${photo.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? photo.rotation || 0 : 0,
                      x: !isExpanded ? photo.x || 0 : 0,
                      y: !isExpanded ? photo.y || 0 : 0,
                      zIndex: !isExpanded ? photo.zIndex || index : 10,
                    }}
                    transition={springTransition}
                    whileHover={
                      !isExpanded
                        ? {
                            scale: 1.05,
                            y: (photo.y || 0) - 12,
                            rotate: (photo.rotation || 0) * 0.7,
                            zIndex: 40,
                          }
                        : { scale: 1.02 }
                    }
                    className={`unfolding-card ${isExpanded ? "unfolding-card-expanded" : "unfolding-card-stacked"}`}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                  >
                    <motion.div
                      layoutId={`photo-inner-${photo.id}`}
                      layout="position"
                      className="unfolding-image-inner"
                      transition={springTransition}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={isExpanded ? "(max-width: 767px) 92vw, (max-width: 1024px) 45vw, 32vw" : "280px"}
                        className="unfolding-image"
                        priority={isPrimary}
                      />
                      {isExpanded && (
                        <div className="unfolding-card-overlay">
                          <p lang="th" className="unfolding-card-caption">{photo.caption}</p>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-copy-block"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="unfolding-copy-block"
                >
                  <p className="section-label">UNFOLDING MOMENTS</p>
                  <h2 className="unfolding-headline">
                    บางช่วงเวลา ต้องการพื้นที่<br />ให้ค่อย ๆ คลี่คลาย
                  </h2>
                  <p lang="th" className="unfolding-desc">
                    ภาพถ่ายสารคดีที่เก็บเกี่ยวจากวันจริง แตะหรือคลิกเพื่อคลี่ดูเรื่องราวทั้งหมด
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsExpanded(true)}
                    className="primary-action linen-action unfolding-cta"
                  >
                    <span lang="th">คลี่ดูภาพบันทึกทั้งหมด</span>
                    <span aria-hidden="true" className="ml-2">→</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}
