import Link from "next/link";
import { Visual } from "@/components/visuals/Visual";
import type { PageContent } from "@/content/pages/types";
import type { Dictionary, Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import styles from "./PageHero.module.css";


type Props = { hero: PageContent["hero"]; lang: Locale; nav: Dictionary["nav"] };


export function PageHero({ hero, lang, nav }: Props) {
  return (
    <section className={styles.hero} data-split={Boolean(hero.visual)}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <div className={styles.meta}>
            <span className="overline">{hero.overline}</span>
            {hero.badge && <span className={styles.badge}>{hero.badge}</span>}
          </div>
          <h1 className={styles.title}>{hero.title}</h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions}>
            <Link className="button button--primary" href={localHref(lang, "/#contact")}>{nav.demo}</Link>
          </div>
        </div>
        {hero.visual && (
          <div className={styles.visual}>
            <Visual name={hero.visual} lang={lang} />
          </div>
        )}
      </div>
    </section>
  );
}
