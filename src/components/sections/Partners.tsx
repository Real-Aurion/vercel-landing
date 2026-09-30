import Image from "next/image";
import type { Dictionary } from "@/dictionaries";
import styles from "./Partners.module.css";


const partners = [
  { key: "nhidong1", src: "/partners/nhi-dong-1.png", href: "https://nhidong.org.vn", width: 318, height: 320 },
  { key: "nd115", src: "/partners/benh-vien-115.png", href: "https://benhviennhandan115.com", width: 320, height: 213 },
] as const;


export function Partners({ customers }: { customers: Dictionary["customers"] }) {
  return (
    <section className="section" id="customers">
      <div className="container">
        <p className={styles.label}>{customers.heading}</p>
        <ul className={styles.row}>
          {partners.map((partner) => (
            <li key={partner.key}>
              <a className={styles.logo} href={partner.href} target="_blank" rel="noopener noreferrer">
                <Image src={partner.src} alt={customers[partner.key]} width={partner.width} height={partner.height} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
