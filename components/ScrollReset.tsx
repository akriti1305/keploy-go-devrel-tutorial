"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Disables the browser's automatic scroll restoration so the page always
 * starts at the top after a plain reload, instead of animating down to
 * wherever the user previously was.
 *
 * Hash navigation (/tutorial#prerequisites, TOC clicks, etc.) is intentionally
 * left untouched — the browser handles those anchor scrolls independently.
 */
export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent the browser from restoring scroll position on plain reload
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Skip scroll-to-top when the URL has a hash so that direct hash URLs
    // (e.g. /tutorial#step-6) and back/forward hash navigation land correctly.
    // TOC clicks only change window.location.hash, not the pathname, so they
    // never trigger this effect at all.
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <style>{`
      article table {
        display: block;
        max-width: 100%;
        overflow-x: auto;
      }
    `}</style>
  );
}
