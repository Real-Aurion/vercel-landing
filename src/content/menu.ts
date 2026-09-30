import type { Dictionary } from "@/dictionaries";


export type MenuKey = Exclude<keyof Dictionary["menu"], "foundationLabel">;


export type IconName =
  | "sparkles" | "link" | "circleStack" | "eyeSlash" | "shield" | "cpu" | "cube" | "document"
  | "adjustments" | "chat" | "search" | "bookOpen" | "pencil" | "beaker" | "bolt" | "calendar"
  | "users" | "chart" | "building" | "academic" | "newspaper" | "question" | "lock" | "info"
  | "heart" | "briefcase" | "envelope";


export type MenuLink = { key: MenuKey; href: string; icon: IconName };


export type FoundationGroup = MenuLink & { children: MenuLink[] };


export type ProductColumn = MenuLink & { features: MenuLink[] };


export type ProductMenu = {
  overview: MenuLink;
  foundation: FoundationGroup[][];
  products: ProductColumn[];
  comingSoon: MenuLink;
};


export type SimpleMenuId = "solutions" | "customers" | "resources" | "company";


// Every entry here is a draft. Names, groupings and hrefs are waiting on answers in .helper/MENU_QUESTIONS.md.
export const productMenu: ProductMenu = {
  overview: { key: "overview", href: "/platform", icon: "sparkles" },
  foundation: [
    [
      { key: "clinicalContext", href: "/platform#context", icon: "sparkles", children: [
        { key: "connectors", href: "/platform#connectors", icon: "link" },
      ] },
      { key: "dataPlatform", href: "/platform#cdr", icon: "circleStack", children: [
        { key: "deidentification", href: "/platform#deidentification", icon: "eyeSlash" },
      ] },
      { key: "protect", href: "/security", icon: "shield", children: [] },
    ],
    [
      { key: "intelligence", href: "/platform#intelligence", icon: "cpu", children: [
        { key: "modelHub", href: "/platform#models", icon: "cube" },
        { key: "ocrEngine", href: "/platform#ocr", icon: "document" },
        { key: "usageControls", href: "/platform#usage", icon: "adjustments" },
      ] },
    ],
  ],
  products: [
    { key: "assistant", href: "/product/assistant", icon: "chat", features: [
      { key: "knowledgeSearch", href: "/product/assistant#search", icon: "search" },
      { key: "guidelineQa", href: "/product/assistant#guidelines", icon: "bookOpen" },
      { key: "documentDrafting", href: "/product/assistant#documentation", icon: "pencil" },
      { key: "labExtraction", href: "/product/assistant#lab-extraction", icon: "beaker" },
    ] },
    { key: "operations", href: "/product/operations", icon: "bolt", features: [
      { key: "surgerySchedule", href: "/product/operations#surgery", icon: "calendar" },
      { key: "patientFlow", href: "/product/operations#patient-flow", icon: "users" },
      { key: "labAutomation", href: "/product/operations#lab", icon: "beaker" },
      { key: "researchPipelines", href: "/product/operations#research", icon: "chart" },
    ] },
  ],
  comingSoon: { key: "insights", href: "/product/insights", icon: "chart" },
};


export const simpleMenus: Record<SimpleMenuId, MenuLink[]> = {
  solutions: [
    { key: "hospitals", href: "/solutions/hospitals", icon: "building" },
    { key: "labs", href: "/solutions/labs", icon: "beaker" },
    { key: "research", href: "/solutions/research", icon: "academic" },
  ],
  customers: [
    { key: "nhidong1", href: "/customers/nhi-dong-1", icon: "heart" },
    { key: "nd115", href: "/customers/115", icon: "heart" },
    { key: "allCustomers", href: "/customers", icon: "users" },
  ],
  resources: [
    { key: "stories", href: "/customers", icon: "newspaper" },
    { key: "faq", href: "/#faq", icon: "question" },
    { key: "security", href: "/security", icon: "lock" },
  ],
  company: [
    { key: "about", href: "/about", icon: "info" },
    { key: "values", href: "/about#values", icon: "heart" },
    { key: "careers", href: "/careers", icon: "briefcase" },
    { key: "contactUs", href: "/#contact", icon: "envelope" },
  ],
};
