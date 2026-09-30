"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/dictionaries";
import styles from "./LanguageFlags.module.css";


const options: { lang: Locale; name: string; flagClass: string }[] = [
  { lang: "vi", name: "Tiếng Việt", flagClass: styles.flagVi },
  { lang: "en", name: "English", flagClass: styles.flagEn },
];


export function LanguageFlags({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  return (
    <div className={styles.flags} role="group" aria-label={label}>
      {options.map((option) => (
        <Link
          key={option.lang}
          className={styles.option}
          href={swapLocale(pathname, option.lang)}
          hrefLang={option.lang}
          aria-current={option.lang === lang ? "true" : undefined}
          aria-label={option.name}
          title={option.name}
        >
          <span className={`${styles.flag} ${option.flagClass}`} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}


function swapLocale(pathname: string, lang: Locale): string {
  return pathname.replace(/^\/(vi|en)(?=\/|$)/, `/${lang}`);
}
