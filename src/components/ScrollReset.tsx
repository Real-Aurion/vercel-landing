"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";


// Next's own scroll handling doesn't fire under our fixed dock: a page change kept the old scroll position
// (the logo landed mid-home) and /platform#ocr never reached its card. So we scroll ourselves on every page change.
export function ScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    // Next writes the #hash into the URL a moment after the new page renders, so wait for it before reading.
    const timer = setTimeout(scrollToTarget, 60);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}


function scrollToTarget() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  else window.scrollTo({ top: 0, behavior: "instant" });
}
