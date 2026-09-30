"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/dictionaries";
import styles from "./LanguageSwitch.module.css";


const options: { lang: Locale; label: string }[] = [
  { lang: "vi", label: "VI" },
  { lang: "en", label: "EN" },
];


export function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  return (
    <div className={styles.switch} role="group" aria-label={label}>
      {options.map((option) => (
        <Link
          key={option.lang}
          className={styles.option}
          href={swapLocale(pathname, option.lang)}
          aria-current={option.lang === lang ? "true" : undefined}
          hrefLang={option.lang}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}


function swapLocale(pathname: string, lang: Locale): string {
  return pathname.replace(/^\/(vi|en)(?=\/|$)/, `/${lang}`);
}
