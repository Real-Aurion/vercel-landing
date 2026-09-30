import { about, blog, careers, security } from "./company";
import { customers, hospital115, nhiDong1 } from "./customers";
import { platform } from "./platform";
import { assistant, insights, operations } from "./products";
import { hospitals, labs, research } from "./solutions";
import type { LocalizedPage } from "./types";


// Keys are the URL path after the locale. Adding a page here is all it takes to publish it.
export const pages: Record<string, LocalizedPage> = {
  "platform": platform,
  "product/assistant": assistant,
  "product/operations": operations,
  "product/insights": insights,
  "solutions/hospitals": hospitals,
  "solutions/labs": labs,
  "solutions/research": research,
  "customers": customers,
  "customers/nhi-dong-1": nhiDong1,
  "customers/115": hospital115,
  "about": about,
  "careers": careers,
  "security": security,
  "blog": blog,
};
