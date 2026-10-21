import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { storyPresentationSets } from "../../../src/config/portfolio";
import styles from "../stories.module.css";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return storyPresentationSets.map((story) => ({ id: story.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const story = storyPresentationSets.find((item) => item.id === id);
  if (!story) return {};
  return { title: `${story.title} | LUMINA Studio`, description: story.note, robots: { index: false, follow: false } };
}

export default async function StoryDetail({ params }: Props) {
  const { id } = await params;
  const story = storyPresentationSets.find((item) => item.id === id);
  if (!story) notFound();
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>LUMINA <span>Studio</span></Link>
        <Link href="/stories" className={styles.back}>ทุกเรื่องราวเพิ่มเติม ↗</Link>
      </header>
      <article className={styles.detailArticle}>
        <header className={styles.detailIntro}>
          <p className={styles.kicker}>{story.eyebrow} / DOCUMENTARY STORY</p>
          <h1>{story.title}</h1>
          <p>{story.note}</p>
        </header>
        <figure className={styles.heroFrame}>
          <Image src={story.image.src} alt={story.image.alt} fill priority sizes="(min-width: 900px) 84vw, 100vw" style={{ objectPosition: story.image.position }} />
        </figure>
        <div className={styles.essay}>
          {story.frames.map((frame, i) => (
            <figure className={`${styles.essayItem} ${i % 2 ? styles.alignRight : ""}`} key={`${story.id}-${i}`}>
              <div className={styles.essayPhoto}>
                <Image src={frame.image.src} alt={frame.image.alt} fill sizes="(min-width: 900px) 66vw, 100vw" style={{ objectPosition: frame.image.position }} />
              </div>
              <figcaption>
                {frame.timeContext && <span className={styles.kicker}>{frame.timeContext}</span>}
                <p lang="th">{frame.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
      <nav className={styles.detailEnd} aria-label="ไปยังเรื่องราวอื่น">
        <p className={styles.kicker}>CONTINUE READING</p>
        {storyPresentationSets.filter((item) => item.id !== story.id).map((item) =>
          <Link href={`/stories/${item.id}`} key={item.id}>{item.title} <span aria-hidden="true">↗</span></Link>
        )}
        <Link href="/stories" className={styles.back}>กลับสู่ทุกเรื่องราว</Link>
      </nav>
      <footer className={styles.footer}><Link href="/">LUMINA Studio</Link><p>Stories before portfolio.</p></footer>
    </main>
  );
}
