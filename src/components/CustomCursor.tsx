"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, [role="button"], input, select, textarea, label, summary, .accordion-item, .accordion-toggle, .menu-button';

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    el.style.opacity = "1";

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const over = (e: MouseEvent) => {
      const isInteractive = !!(e.target as Element).closest?.(INTERACTIVE);
      if (isInteractive) {
        el.style.width = "24px";
        el.style.height = "24px";
        el.style.top = "-12px";
        el.style.left = "-12px";
        el.style.backgroundColor = "transparent";
        el.style.border = "3px solid var(--red)";
      } else {
        el.style.width = "14px";
        el.style.height = "14px";
        el.style.top = "-7px";
        el.style.left = "-7px";
        el.style.backgroundColor = "var(--red)";
        el.style.border = "none";
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      el.style.opacity = "0";
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: -7,
        left: -7,
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "var(--red)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        willChange: "transform",
        transition: "width 150ms ease, height 150ms ease, background-color 150ms ease, border 150ms ease, top 150ms ease, left 150ms ease",
      }}
    />
  );
}
