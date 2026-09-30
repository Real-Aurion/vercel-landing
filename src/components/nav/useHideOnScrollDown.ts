"use client";

import { useEffect, useState } from "react";


const ALWAYS_SHOW_ABOVE_PX = 80;


// Ignores tiny jitters (trackpad inertia, iOS bounce) so the dock doesn't flicker.
const DIRECTION_THRESHOLD_PX = 4;


export function useHideOnScrollDown(onHide: () => void): boolean {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const next = nextHidden(y, lastY);
      if (next !== null) setHidden(next);
      if (next) onHide();
      lastY = y;
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHide]);
  return hidden;
}


function nextHidden(y: number, lastY: number): boolean | null {
  if (y < ALWAYS_SHOW_ABOVE_PX) return false;
  if (y > lastY + DIRECTION_THRESHOLD_PX) return true;
  if (y < lastY - DIRECTION_THRESHOLD_PX) return false;
  return null;
}
