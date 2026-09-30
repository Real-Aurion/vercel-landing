"use client";

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { productMenu, simpleMenus, type MenuLink } from "@/content/menu";
import type { Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import { menuIds, type MenuCopy, type MenuId, type NavCopy } from "./types";
import styles from "./MobileNav.module.css";


type ToggleProps = { open: boolean; nav: NavCopy; onToggle: () => void };


export function MobileNavToggle({ open, nav, onToggle }: ToggleProps) {
  const ToggleIcon = open ? XMarkIcon : Bars3Icon;
  return (
    <button
      type="button"
      className={styles.toggle}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? nav.closeMenu : nav.openMenu}
      onClick={onToggle}
    >
      <ToggleIcon className={styles.toggleIcon} strokeWidth={1.75} />
    </button>
  );
}


type Props = { open: boolean; lang: Locale; nav: NavCopy; menu: MenuCopy; onNavigate: () => void };


export function MobileNav({ open, lang, nav, menu, onNavigate }: Props) {
  return (
    <div id="mobile-nav" className={styles.drawer} data-open={open} inert={!open}>
      {menuIds.map((id) => (
        <details key={id} className={styles.group} name="mobile-nav">
          <summary className={styles.summary}>
            {nav[id]}
            <ChevronDownIcon className={styles.chevron} strokeWidth={2} aria-hidden="true" />
          </summary>
          <ul className={styles.links}>
            {linksFor(id).map((item) => (
              <li key={item.key}>
                <Link className={styles.link} href={localHref(lang, item.href)} onClick={onNavigate}>
                  <Icon name={item.icon} className={styles.linkIcon} />
                  {menu[item.key].title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      ))}
      <Link className={`button button--primary ${styles.cta}`} href={localHref(lang, "/#contact")} onClick={onNavigate}>
        {nav.contact}
      </Link>
    </div>
  );
}


function linksFor(id: MenuId): MenuLink[] {
  if (id !== "product") return simpleMenus[id];
  const { overview, foundation, products, comingSoon } = productMenu;
  return [overview, ...products, ...foundation.flat(), comingSoon];
}
