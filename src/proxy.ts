import { NextResponse, type NextRequest } from "next/server";


const locales = ["vi", "en"];


// Vietnamese is the default on purpose — the audience is Vietnamese hospitals, so the browser language is not consulted.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasLocale) return;
  request.nextUrl.pathname = `/vi${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}


export const config = {
  matcher: ["/((?!_next|api|logos|partners|icon|apple-icon|favicon|.*\\..*).*)"],
};
