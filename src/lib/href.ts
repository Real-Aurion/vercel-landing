import type { Locale } from "@/dictionaries";


export function localHref(lang: Locale, href: string): string {
  return href.startsWith("/#") ? `/${lang}${href.slice(1)}` : `/${lang}${href}`;
}
