import type { Dictionary, Locale } from "@/dictionaries";
import { SiteNav } from "./SiteNav";


export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return <SiteNav lang={lang} nav={dict.nav} menu={dict.menu} />;
}
