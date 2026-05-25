"use client";

import { useEffect } from "react";

export default function FooterReveal() {
  useEffect(() => {
    const footer = document.querySelector<HTMLElement>(".section.footer");
    if (!footer) return;

    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--footer-height",
        `${footer.offsetHeight}px`
      );
    });
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);

  return null;
}
