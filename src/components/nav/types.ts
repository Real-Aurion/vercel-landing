import { simpleMenus, type SimpleMenuId } from "@/content/menu";
import type { Dictionary, Locale } from "@/dictionaries";


export type MenuId = "product" | SimpleMenuId;


export type MenuCopy = Dictionary["menu"];


export type NavCopy = Dictionary["nav"];


export type PanelProps = { lang: Locale; menu: MenuCopy; nav: NavCopy; onNavigate: () => void };


// A menu whose every page is unpublished drops out of the nav instead of opening an empty panel.
export const menuIds: MenuId[] = (["product", "solutions", "customers", "resources", "company"] as const)
  .filter((id) => id === "product" || simpleMenus[id].length > 0);
