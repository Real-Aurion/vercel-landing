// Pages kept in code but off the public site until the hospital agrees to be featured.
// Each one is reachable only through its private preview link, /{lang}/preview/{code}, which Lam sends to that hospital.
// To publish a page after approval, delete its line here.
export const unpublished: Record<string, string> = {
  "customers": "MPy9y1WqUH0",
  "customers/nhi-dong-1": "bkynhS52qZY",
  "customers/115": "B5jguSS7AKY",
};


export function pathOf(href: string): string {
  return href.replace(/^\//, "").replace(/#.*$/, "");
}


export function isPublished(href: string): boolean {
  return !(pathOf(href) in unpublished);
}


export function previewTarget(code: string): string | undefined {
  return Object.keys(unpublished).find((path) => unpublished[path] === code);
}
