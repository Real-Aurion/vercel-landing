import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { productMenu, type FoundationGroup, type ProductColumn } from "@/content/menu";
import { localHref } from "@/lib/href";
import type { PanelProps } from "./types";
import styles from "./ProductPanel.module.css";


export function ProductPanel({ lang, menu, nav, onNavigate }: PanelProps) {
  const { overview, foundation, products, comingSoon } = productMenu;
  return (
    <div className={styles.panel}>
      <div className={styles.platform}>
        <Link className={styles.overview} href={localHref(lang, overview.href)} onClick={onNavigate}>
          <span className={styles.overviewTitle}>
            {menu.overview.title}
            <ArrowRightIcon className={styles.overviewArrow} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className={styles.overviewDesc}>{menu.overview.desc}</span>
          <Image className={styles.overviewMark} src="/logos/aurion-mark-white.png" alt="" width={420} height={412} />
        </Link>
        <p className={styles.foundationLabel}>{menu.foundationLabel}</p>
        <div className={styles.foundation}>
          {foundation.map((column, index) => (
            <ul key={index} className={styles.tree}>
              {column.map((group) => (
                <FoundationItem key={group.key} group={group} {...{ lang, menu, nav, onNavigate }} />
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.productsCard}>
        <div className={styles.products}>
          {products.map((column) => (
            <ProductItem key={column.key} column={column} {...{ lang, menu, nav, onNavigate }} />
          ))}
        </div>
        <Link className={styles.comingSoon} href={localHref(lang, comingSoon.href)} onClick={onNavigate}>
          <span className={styles.badge}>{nav.comingSoon}</span>
          <span>
            <span className={styles.comingSoonTitle}>{menu.insights.title}</span>
            <span className={styles.comingSoonDesc}>{menu.insights.desc}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}


function FoundationItem({ group, lang, menu, onNavigate }: PanelProps & { group: FoundationGroup }) {
  return (
    <li>
      <Link className={styles.treeRoot} href={localHref(lang, group.href)} onClick={onNavigate}>
        <Icon name={group.icon} className={styles.treeIcon} />
        {menu[group.key].title}
      </Link>
      {group.children.length > 0 && (
        <ul className={styles.treeChildren}>
          {group.children.map((child) => (
            <li key={child.key}>
              <Link className={styles.treeLeaf} href={localHref(lang, child.href)} onClick={onNavigate}>
                {menu[child.key].title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}


function ProductItem({ column, lang, menu, onNavigate }: PanelProps & { column: ProductColumn }) {
  const copy = menu[column.key] as { title: string; desc: string };
  return (
    <div className={styles.product}>
      <Link className={styles.productHead} href={localHref(lang, column.href)} onClick={onNavigate}>
        <span className={styles.productTile}>
          <Icon name={column.icon} className={styles.productTileIcon} />
        </span>
        <span>
          <span className={styles.productTitle}>{copy.title}</span>
          <span className={styles.productDesc}>{copy.desc}</span>
        </span>
      </Link>
      <ul className={styles.features}>
        {column.features.map((feature) => (
          <li key={feature.key}>
            <Link className={styles.feature} href={localHref(lang, feature.href)} onClick={onNavigate}>
              <Icon name={feature.icon} className={styles.featureIcon} />
              {menu[feature.key].title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
