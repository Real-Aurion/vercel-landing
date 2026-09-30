import type { Dictionary } from "@/dictionaries";
import { CONTACT_EMAIL } from "@/lib/contact";
import styles from "./ContactCta.module.css";


export function ContactCta({ cta }: { cta: Dictionary["cta"] }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.heading}>{cta.heading}</h2>
          <p className={styles.copy}>{cta.copy}</p>
          <a className={`button ${styles.button}`} href={`mailto:${CONTACT_EMAIL}`}>{cta.cta}</a>
        </div>
      </div>
    </section>
  );
}
