import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/dictionaries";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { localHref } from "@/lib/href";
import styles from "./Footer.module.css";


export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { footer, nav } = dict;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/logos/Aurion_Logo_White.png" alt="Aurion" width={72} height={77} />
          <p className={styles.tagline}>{footer.tagline}</p>
        </div>
        <div>
          <p className={styles.heading}>{footer.company}</p>
          <ul className={styles.links}>
            <li><Link href={localHref(lang, "/#impact")}>{nav.solutions}</Link></li>
            <li><Link href={localHref(lang, "/#faq")}>{dict.faq.label}</Link></li>
            <li><Link href={localHref(lang, "/#contact")}>{nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <p className={styles.heading}>{footer.contact}</p>
          <ul className={styles.links}>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li className={styles.muted}>{footer.location}</li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.meta}`}>© {new Date().getFullYear()} {footer.rights}</div>
    </footer>
  );
}
