import type { PageContent } from "@/content/pages/types";
import styles from "./PageHero.module.css";


export function PageHero({ hero }: { hero: PageContent["hero"] }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className="overline">{hero.overline}</span>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.lead}>{hero.lead}</p>
        {hero.badge && <span className={styles.badge}>{hero.badge}</span>}
      </div>
    </section>
  );
}
