"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Sends one "Section viewed" event per page view for every element marked
 * with data-track-section="<name>", once it crosses the middle of the
 * viewport. Gives a scroll-depth funnel (hero → services → … → quote form)
 * without tracking raw scroll positions.
 */
export default function SectionViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-track-section]");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          track("Section viewed", { section: el.dataset.trackSection! });
          observer.unobserve(el);
        }
      },
      // A thin band at mid-viewport, so tall sections still count on mobile.
      { rootMargin: "-45% 0px -45% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
