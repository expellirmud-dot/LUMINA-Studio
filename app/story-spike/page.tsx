import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoryImageFocus } from "../../src/components/StoryImageFocus";
import { storyPresentationSets, type StoryPresentationSet } from "../../src/config/portfolio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Story Presentation Study | LUMINA Studio",
  description: "Internal visual study for two documentary photographic narratives.",
  robots: { index: false, follow: false },
};

const focusLabels = {
  openLabel: "เปิดเรื่องราวภาพถ่าย",
  closeLabel: "ปิดภาพถ่าย",
  loadingLabel: "กำลังแสดงภาพ",
};

function Cover({ story }: { story: StoryPresentationSet }) {
  return (
    <div className={[styles.cover, story.id === "relationship" ? styles.relationshipCover : styles.ritualCover].join(" ")}>
      <StoryImageFocus
        image={story.image}
        title={story.title}
        eyebrow={story.eyebrow}
        subtitle={story.note}
        frames={story.frames}
        {...focusLabels}
      />
    </div>
  );
}

function DetailImages({ story }: { story: StoryPresentationSet }) {
  return (
    <div className={styles.details}>
      {story.details.map((photo) => (
        <figure className={styles.detail} key={photo.src.toString()}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1000px) 20vw, (min-width: 700px) 40vw, 44vw"
            style={{ objectPosition: photo.position }}
          />
        </figure>
      ))}
    </div>
  );
}

export default function StorySpikePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">LUMINA <span>Studio</span></Link>
        <Link className={styles.back} href="/">กลับหน้าเว็บไซต์หลัก <span aria-hidden="true">↗</span></Link>
      </header>
      <div className={styles.intro}>
        <p className={styles.kicker}>TASK–049 / INTERNAL VISUAL STUDY</p>
        <h1>เรื่องราวอีกสองบท<br/>ที่อยากให้ภาพได้เล่า</h1>
        <p className={styles.introCopy}>ต้นแบบทดลองการวางภาพถ่าย 2 ชุด ภายใต้แนวทาง Human Documentary โดยใช้ภาพและระบบอ่านเรื่องราวที่มีอยู่แล้ว</p>
        <nav aria-label="เลือกรูปแบบที่ต้องการดู" className={styles.variants}>
          <a href="#editorial">01 — Editorial Spread</a>
          <a href="#scroll">02 — Quiet Scroll</a>
        </nav>
      </div>

      <section id="editorial" aria-labelledby="editorial-title" className={styles.variantSection}>
        <div className={styles.variantHeader}>
          <div>
            <p className={styles.kicker}>CONCEPT A / RECOMMENDED</p>
            <h2 id="editorial-title">Editorial Story Spread</h2>
          </div>
          <p>ภาพและคำบรรยายมีพื้นที่ของตัวเอง คล้ายการเปิดอ่านบันทึกภาพในหนังสือ</p>
        </div>
        {storyPresentationSets.map((story, i) => (
          <article key={story.id} className={`${styles.spread} ${i % 2 ? styles.spreadReverse : ""}`}>
            <div className={styles.primaryImage}><Cover story={story}/></div>
            <div className={styles.storyAside}>
              <p className={styles.kicker}>{story.eyebrow}</p>
              <h3>{story.title}</h3>
              <p lang="th" className={styles.storyNote}>{story.note}</p>
              <p className={styles.openHint}>แตะภาพหลักเพื่อเปิดอ่านภาพต่ออีก 3 ภาพ</p>
              <DetailImages story={story}/>
            </div>
          </article>
        ))}
      </section>

      <section id="scroll" aria-labelledby="scroll-title" className={`${styles.variantSection} ${styles.scrollVariant}`}>
        <div className={styles.variantHeader}>
          <div>
            <p className={styles.kicker}>CONCEPT B / EXPERIMENT</p>
            <h2 id="scroll-title">Quiet Scroll</h2>
          </div>
          <p>คำบรรยายคงอยู่ใกล้สายตาขณะภาพเรียงผ่านไปตามการเลื่อนปกติ ไม่มีการบังคับ Scroll</p>
        </div>
        {storyPresentationSets.map((story) => (
          <article className={styles.scrollStory} key={story.id}>
            <div className={styles.stickyCopy}>
              <p className={styles.kicker}>{story.eyebrow}</p>
              <h3>{story.title}</h3>
              <p lang="th" className={styles.storyNote}>{story.note}</p>
              <p className={styles.openHint}>เปิดภาพหลักเพื่ออ่านเรื่องราวแบบต่อเนื่อง</p>
            </div>
            <div className={styles.scrollImages}>
              <Cover story={story}/>
              {story.details.map((photo) => (
                <figure key={photo.src.toString()} className={styles.scrollDetail}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1000px) 53vw, 92vw"
                    style={{ objectPosition: photo.position }}
                  />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>STORIES BEFORE PORTFOLIO</p>
        <p>ต้นแบบ TASK–049 — ไม่ใช่หน้าเว็บไซต์ Production และยังไม่เปลี่ยนลำดับหน้า Home</p>
        <a href="#editorial">กลับไปแบบ Editorial ↑</a>
      </footer>
    </main>
  );
}
