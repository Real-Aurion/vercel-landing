import Link from "next/link";
import { Icon } from "@/components/Icon";
import { simpleMenus, type SimpleMenuId } from "@/content/menu";
import { localHref } from "@/lib/href";
import type { PanelProps } from "./types";
import styles from "./SimplePanel.module.css";


export function SimplePanel({ id, lang, menu, onNavigate }: PanelProps & { id: SimpleMenuId }) {
  return (
    <div className={styles.panel}>
      <ul className={styles.grid}>
        {simpleMenus[id].map((item) => {
          const copy = menu[item.key] as { title: string; desc: string };
          return (
            <li key={item.key}>
              <Link className={styles.item} href={localHref(lang, item.href)} onClick={onNavigate}>
                <span className={styles.tile}>
                  <Icon name={item.icon} className={styles.icon} />
                </span>
                <span>
                  <span className={styles.title}>{copy.title}</span>
                  <span className={styles.desc}>{copy.desc}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
