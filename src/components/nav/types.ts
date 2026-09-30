import type { SimpleMenuId } from "@/content/menu";
import type { Dictionary, Locale } from "@/dictionaries";


export type MenuId = "product" | SimpleMenuId;


export type MenuCopy = Dictionary["menu"];


export type NavCopy = Dictionary["nav"];


export type PanelProps = { lang: Locale; menu: MenuCopy; nav: NavCopy; onNavigate: () => void };


export const menuIds: MenuId[] = ["product", "solutions", "customers", "resources", "company"];
