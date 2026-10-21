import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { storyPresentationSets } from "../../src/config/portfolio";
import styles from "./stories.module.css";

export const metadata: Metadata = {
  title: "เรื่องราวเพิ่มเติม | LUMINA Studio",
  description: "สองเรื่องราวของผู้คน ความสัมพันธ์ และพิธีกรรม",
  robots: { index: false, follow: false },
};

export default function StoriesIndex() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>LUMINA <span>Studio</span></Link>
        <Link href="/#selected-stories" className={styles.back}>กลับสู่เรื่องราวหลัก ↗</Link>
      </header>
      <section className={styles.intro}>
        <p className={styles.kicker}>MORE STORIES / DOCUMENTARY JOURNAL</p>
        <h1>เรื่องราวที่ยังอยากเล่าต่อ</h1>
        <p className={styles.introNote}>นอกจากเรื่องราวที่คัดเลือกไว้บนหน้าแรก ยังมีช่วงเวลาอื่น ๆ ของผู้คนที่อยากเก็บไว้ให้ได้กลับมามองอีกครั้ง</p>
      </section>
      <section className={styles.collection} aria-label="เรื่องราวเพิ่มเติมสองชุด">
        {storyPresentationSets.map((story, index) => (
          <article key={story.id} className={`${styles.storyCard} ${index % 2 ? styles.reverse : ""}`}>
            <Link href={`/stories/${story.id}`} className={styles.coverLink} aria-label={`อ่านเรื่องราว: ${story.title}`}>
              <Image src={story.image.src} alt={story.image.alt} fill sizes="(min-width: 900px) 55vw, 100vw" style={{ objectPosition: story.image.position }} />
            </Link>
            <div className={styles.storyCopy}>
              <p className={styles.kicker}>{story.eyebrow}</p>
              <h2>{story.title}</h2>
              <p>{story.note}</p>
              <Link href={`/stories/${story.id}`} className={styles.storyLink}>อ่านเรื่องราว <span aria-hidden="true">↗</span></Link>
            </div>
          </article>
        ))}
      </section>
      <footer className={styles.footer}><Link href="/">กลับสู่ LUMINA Studio</Link><p>Stories before portfolio.</p></footer>
    </main>
  );
}
