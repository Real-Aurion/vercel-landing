import { PlusIcon } from "@heroicons/react/24/outline";
import type { Dictionary } from "@/dictionaries";
import styles from "./Faq.module.css";


export function Faq({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section className="section" id="faq">
      <div className={`container ${styles.inner}`}>
        <div className="section-heading">
          <span className="overline">{faq.label}</span>
          <h2>{faq.heading}</h2>
        </div>
        <div className={styles.list}>
          {faq.items.map((item) => (
            <details key={item.question} className={styles.item} name="faq">
              <summary className={styles.question}>
                {item.question}
                <PlusIcon className={styles.icon} strokeWidth={1.5} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
