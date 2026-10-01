import Link from "next/link";
import type { Dictionary, Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import { HeroShowcase } from "@/components/visuals/HeroShowcase";
import styles from "./Hero.module.css";


export function Hero({ lang, hero }: { lang: Locale; hero: Dictionary["hero"] }) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <span className="overline">{hero.eyebrow}</span>
        <h1 className={styles.heading}>
          {hero.headingPre}
          <span className={styles.accent}>{hero.headingAccent1}</span>
          {hero.headingMid}
          <span className={styles.accent}>{hero.headingAccent2}</span>
          {hero.headingPost}
        </h1>
        <p className={styles.lead}>{hero.lead}</p>
        <div className={styles.actions}>
          <Link className="button button--primary" href={localHref(lang, "/#contact")}>{hero.ctaSecondary}</Link>
          <Link className="button button--secondary" href={localHref(lang, "/#impact")}>{hero.cta}</Link>
        </div>
        <HeroShowcase lang={lang} />
      </div>
    </section>
  );
}
