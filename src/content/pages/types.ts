import type { IconName } from "@/content/menu";
import type { Locale } from "@/dictionaries";


export type FeatureItem = { id?: string; icon: IconName; title: string; desc: string };


export type LinkItem = FeatureItem & { href: string };


export type Block =
  | { type: "features"; id?: string; overline?: string; heading: string; lead?: string; items: FeatureItem[] }
  | { type: "metrics"; heading?: string; items: { value: string; label: string }[] }
  | { type: "steps"; overline?: string; heading: string; items: { title: string; desc: string }[] }
  | { type: "links"; heading: string; lead?: string; items: LinkItem[] }
  | { type: "notice"; icon: IconName; title: string; body: string; action?: { label: string; href: string } };


export type PageContent = {
  meta: { title: string; description: string };
  hero: { overline: string; title: string; lead: string; badge?: string };
  blocks: Block[];
};


export type LocalizedPage = Record<Locale, PageContent>;
