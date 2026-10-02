"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Disables the browser's automatic scroll restoration so the page always
 * starts at the top after a reload or navigation, instead of animating
 * down to wherever the user previously was.
 */
export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent the browser from restoring scroll position on reload
    if (typeof window !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // On every route change (including initial load), jump to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
