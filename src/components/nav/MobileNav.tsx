"use client";

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { productMenu, simpleMenus, type MenuLink } from "@/content/menu";
import type { Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import { menuIds, type MenuCopy, type MenuId, type NavCopy } from "./types";
import styles from "./MobileNav.module.css";


type Props = { lang: Locale; nav: NavCopy; menu: MenuCopy };


export function MobileNav({ lang, nav, menu }: Props) {
  const [open, setOpen] = useState(false);
  useLockScroll(open);
  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? nav.closeMenu : nav.openMenu}
        onClick={() => setOpen(!open)}
      >
        {open ? <XMarkIcon className={styles.toggleIcon} /> : <Bars3Icon className={styles.toggleIcon} />}
      </button>
      <div id="mobile-nav" className={styles.drawer} data-open={open} hidden={!open}>
        {menuIds.map((id) => (
          <details key={id} className={styles.group}>
            <summary className={styles.summary}>
              {nav[id]}
              <ChevronDownIcon className={styles.chevron} strokeWidth={2} aria-hidden="true" />
            </summary>
            <ul className={styles.links}>
              {linksFor(id).map((item) => (
                <li key={item.key}>
                  <Link className={styles.link} href={localHref(lang, item.href)} onClick={() => setOpen(false)}>
                    <Icon name={item.icon} className={styles.linkIcon} />
                    {menu[item.key].title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
        <Link className={`button button--primary ${styles.cta}`} href={localHref(lang, "/#contact")} onClick={() => setOpen(false)}>
          {nav.contact}
        </Link>
      </div>
    </>
  );
}


function linksFor(id: MenuId): MenuLink[] {
  if (id !== "product") return simpleMenus[id];
  const { overview, foundation, products, comingSoon } = productMenu;
  return [overview, ...products, ...foundation.flat(), comingSoon];
}


function useLockScroll(active: boolean) {
  useEffect(() => {
    document.documentElement.style.overflow = active ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [active]);
}
