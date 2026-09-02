import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { contentConfig } from "../../src/config/content";
import { fastworkConfig, type FastworkImage } from "../../src/config/fastwork";
import { navigationConfig } from "../../src/config/navigation";
import styles from "./fastwork.module.css";

export const metadata: Metadata = {
  title: "LUMINA Studio — งานแต่ง งานบวช งานพิธี และอีเวนต์",
  description:
    "ตัวอย่างงานถ่ายภาพงานแต่ง งานบวช งานพิธี งานครอบครัว และงานอีเวนต์ โดย LUMINA Studio ในแนว Human Documentary Photography",
  robots: {
    index: true,
    follow: true,
  },
};

type ResponsiveImageStyle = CSSProperties & {
  "--desktop-position": string;
  "--mobile-position": string;
};

function imagePosition(image: FastworkImage): ResponsiveImageStyle {
  return {
    "--desktop-position": image.position,
    "--mobile-position": image.mobilePosition,
  };
}

export default function FastworkPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Fastwork portfolio navigation">
        <div className={styles.navInner}>
          <p className={styles.brand} aria-label="LUMINA Studio">
            {navigationConfig.logoText}
            <span>{navigationConfig.logoSecondary}</span>
          </p>
          <div className={styles.navLinks}>
            <a href="#work">ผลงาน</a>
            <a href="#services">บริการ</a>
            <a href="#delivery">การส่งมอบ</a>
          </div>
          <a className={styles.navCta} href="#work">
            ชมผลงาน
          </a>
        </div>
      </nav>

      <section className={styles.hero} aria-labelledby="fastwork-title">
        <Image
          src={fastworkConfig.hero.image.src}
          alt={fastworkConfig.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className={styles.responsiveImage}
          style={imagePosition(fastworkConfig.hero.image)}
        />
        <div className={styles.heroGrade} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.eyebrowLight}>{fastworkConfig.hero.eyebrow}</p>
          <h1 id="fastwork-title">{fastworkConfig.hero.title}</h1>
          <p className={styles.heroBody}>{fastworkConfig.hero.body}</p>
          <a className={styles.heroAction} href="#work">
            {fastworkConfig.hero.cta}
          </a>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.intro}`} aria-labelledby="intro-title">
        <div>
          <p className={styles.label}>{fastworkConfig.intro.label}</p>
          <h2 id="intro-title">{fastworkConfig.intro.title}</h2>
        </div>
        <div className={styles.introBody}>
          <p>{fastworkConfig.intro.body}</p>
          <p className={styles.identity}>
            {contentConfig.owner.name}
            <span>{contentConfig.owner.role}</span>
          </p>
        </div>
      </section>

      <section id="work" className={`${styles.shell} ${styles.work}`} aria-labelledby="work-title">
        <header className={styles.sectionHeader}>
          <p className={styles.label}>SELECTED STORIES</p>
          <h2 id="work-title">งานจริงในวันที่ทุกอย่างเกิดขึ้นเพียงครั้งเดียว</h2>
          <p>
            เลือกภาพที่แสดงทั้งงานแต่ง งานพิธี งานบวช ความสัมพันธ์ของผู้คน
            และบรรยากาศ เพื่อให้เห็นแนวทางการทำงานมากกว่าการดูภาพประเภทเดียว
          </p>
        </header>

        <div className={styles.storyGrid}>
          {fastworkConfig.stories.map((story) => (
            <article key={story.title} className={styles.storyCard}>
              <div className={styles.storyImage}>
                <Image
                  src={story.image.src}
                  alt={story.image.alt}
                  fill
                  sizes="(min-width: 900px) 33vw, 100vw"
                  className={styles.responsiveImage}
                  style={imagePosition(story.image)}
                />
              </div>
              <div className={styles.storyCopy}>
                <p className={styles.storyLabel}>{story.label}</p>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.familyFeature} aria-labelledby="family-title">
        <div className={styles.familyImage}>
          <Image
            src={fastworkConfig.familyFeature.image.src}
            alt={fastworkConfig.familyFeature.image.alt}
            fill
            sizes="(min-width: 900px) 58vw, 100vw"
            className={styles.responsiveImage}
            style={imagePosition(fastworkConfig.familyFeature.image)}
          />
        </div>
        <div className={styles.familyCopy}>
          <p className={styles.label}>{fastworkConfig.familyFeature.label}</p>
          <h2 id="family-title">{fastworkConfig.familyFeature.title}</h2>
          <p>{fastworkConfig.familyFeature.body}</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.moments}`} aria-labelledby="moments-title">
        <header className={styles.sectionHeaderNarrow}>
          <p className={styles.label}>{fastworkConfig.moments.label}</p>
          <h2 id="moments-title">{fastworkConfig.moments.title}</h2>
          <p>{fastworkConfig.moments.body}</p>
        </header>

        <div className={styles.momentGrid}>
          {fastworkConfig.moments.images.map((image, index) => (
            <figure key={image.src} className={`${styles.momentFrame} ${styles[`moment${index + 1}`]}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 900px) 36vw, (min-width: 640px) 50vw, 100vw"
                className={styles.responsiveImage}
                style={imagePosition(image)}
              />
            </figure>
          ))}
        </div>
      </section>

      <section id="services" className={`${styles.shell} ${styles.services}`} aria-labelledby="services-title">
        <header className={styles.sectionHeaderNarrow}>
          <p className={styles.label}>{fastworkConfig.services.label}</p>
          <h2 id="services-title">{fastworkConfig.services.title}</h2>
          <p>{fastworkConfig.services.intro}</p>
        </header>

        <div className={styles.serviceList}>
          {fastworkConfig.services.items.map((service, index) => (
            <article key={service.title} className={styles.serviceItem}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.styleStrip} aria-label="Photography working style">
          {fastworkConfig.workingStyle.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.infoGrid}`} aria-label="Equipment and delivery information">
        <article className={styles.infoPanel}>
          <p className={styles.label}>{fastworkConfig.equipment.label}</p>
          <h2>{fastworkConfig.equipment.title}</h2>
          <ul>
            {fastworkConfig.equipment.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article id="delivery" className={styles.infoPanel}>
          <p className={styles.label}>{fastworkConfig.delivery.label}</p>
          <h2>{fastworkConfig.delivery.title}</h2>
          <p className={styles.infoIntro}>{fastworkConfig.delivery.intro}</p>
          <ul>
            {fastworkConfig.delivery.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.marketplace} aria-labelledby="marketplace-title">
        <div className={styles.marketplaceInner}>
          <p className={styles.marketplaceLabel}>{fastworkConfig.marketplaceNotice.label}</p>
          <h2 id="marketplace-title">{fastworkConfig.marketplaceNotice.title}</h2>
          <p className={styles.marketplaceBody}>{fastworkConfig.marketplaceNotice.body}</p>
          <p className={styles.marketplaceFootnote}>{fastworkConfig.marketplaceNotice.footnote}</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerBrand}>
          {navigationConfig.logoText}
          <span>{navigationConfig.logoSecondary}</span>
        </p>
        <p>
          {contentConfig.owner.name} / {contentConfig.owner.role}
        </p>
        <p>Human Documentary Photography</p>
      </footer>
    </main>
  );
}
