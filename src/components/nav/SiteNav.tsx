"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/dictionaries";
import { localHref } from "@/lib/href";
import { LanguageFlags } from "./LanguageFlags";
import { MobileNav, MobileNavToggle } from "./MobileNav";
import { ProductPanel } from "./ProductPanel";
import { SimplePanel } from "./SimplePanel";
import { menuIds, type MenuCopy, type MenuId, type NavCopy } from "./types";
import { useHideOnScrollDown } from "./useHideOnScrollDown";
import styles from "./SiteNav.module.css";


// A short grace period lets the pointer cross the gap between dock and panel without the panel snapping shut.
const CLOSE_DELAY_MS = 140;


type Props = { lang: Locale; nav: NavCopy; menu: MenuCopy };


export function SiteNav({ lang, nav, menu }: Props) {
  const [openId, setOpenId] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const closeAll = useCallback(() => {
    setOpenId(null);
    setMobileOpen(false);
  }, []);
  const hidden = useHideOnScrollDown(closeAll);
  const cancelClose = () => clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(closeAll, CLOSE_DELAY_MS);
  };
  const open = (id: MenuId) => {
    cancelClose();
    setOpenId(id);
  };
  useEscapeToClose(openId !== null || mobileOpen, closeAll);
  return (
    <>
      <header className={styles.dock} data-hidden={hidden} data-expanded={mobileOpen} onMouseLeave={scheduleClose}>
        <nav className={styles.bar} aria-label="Main">
          <Link className={styles.brand} href={`/${lang}`} onClick={closeAll}>
            <Image src="/logos/aurion-mark.png" alt="" width={28} height={28} priority />
            <span>Aurion</span>
          </Link>
          <ul className={styles.triggers}>
            {menuIds.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  className={styles.trigger}
                  aria-expanded={openId === id}
                  aria-controls="site-nav-panel"
                  onMouseEnter={() => open(id)}
                  onClick={() => (openId === id ? closeAll() : open(id))}
                >
                  {nav[id]}
                  <ChevronDownIcon className={styles.chevron} strokeWidth={2} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <LanguageFlags lang={lang} label={nav.languageLabel} />
            <Link className={`button button--primary ${styles.cta}`} href={localHref(lang, "/#contact")}>
              {nav.contact}
            </Link>
            <MobileNavToggle open={mobileOpen} nav={nav} onToggle={() => setMobileOpen(!mobileOpen)} />
          </div>
        </nav>
        <div id="site-nav-panel" className={styles.panelWrap} data-open={openId !== null} onMouseEnter={cancelClose}>
          {openId && <PanelFor id={openId} lang={lang} nav={nav} menu={menu} onNavigate={closeAll} />}
        </div>
        <MobileNav open={mobileOpen} lang={lang} nav={nav} menu={menu} onNavigate={closeAll} />
      </header>
      <div className={styles.scrim} data-open={openId !== null} onMouseEnter={scheduleClose} onClick={closeAll} aria-hidden="true" />
    </>
  );
}


function PanelFor({ id, ...props }: Props & { id: MenuId; onNavigate: () => void }) {
  if (id === "product") return <ProductPanel {...props} />;
  return <SimplePanel id={id} {...props} />;
}


function useEscapeToClose(active: boolean, close: () => void) {
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);
}
