import type { IconName } from "@/content/menu";
import type { Locale } from "@/dictionaries";


export type VisualName =
  | "chat" | "documentation" | "calendar" | "patientFlow" | "cdr" | "connectors"
  | "ocr" | "onPrem" | "insights" | "dataset" | "qrCheckIn";


export type FeatureItem = { id?: string; icon: IconName; title: string; desc: string; points?: string[] };


export type LinkItem = { icon: IconName; title: string; desc: string; href: string };


export type Block =
  | { type: "grid"; id?: string; overline?: string; heading: string; lead?: string; items: FeatureItem[] }
  | { type: "split"; id?: string; overline: string; heading: string; body: string; points?: string[]; visual: VisualName; reverse?: boolean }
  | { type: "steps"; overline?: string; heading: string; items: { title: string; desc: string }[] }
  | { type: "links"; overline?: string; heading: string; items: LinkItem[] }
  | { type: "logos"; heading: string }
  | { type: "notice"; icon: IconName; title: string; body: string; action?: { label: string; href: string } };


export type PageContent = {
  meta: { title: string; description: string };
  hero: { overline: string; title: string; lead: string; badge?: string; visual?: VisualName };
  blocks: Block[];
};


export type LocalizedPage = Record<Locale, PageContent>;
