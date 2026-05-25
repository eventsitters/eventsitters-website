"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

type CardConfig = {
  selector: string;
  baseRot: number;
  hoverRot: number;
  baseY?: number;
};

const CARDS: CardConfig[] = [
  // Homepage — service event tiles
  { selector: ".events-tile:nth-child(1)", baseRot: -1.8, hoverRot: -2.4, baseY:  12 },
  { selector: ".events-tile:nth-child(2)", baseRot:  1.2, hoverRot:  1.8, baseY:  -8 },
  { selector: ".events-tile:nth-child(3)", baseRot: -0.7, hoverRot: -1.3, baseY:  16 },
  // Homepage — activities masonry
  { selector: ".services-masonry > .w-layout-cell:nth-child(1)", baseRot: -1.2, hoverRot: -1.8 },
  { selector: ".services-masonry > .w-layout-cell:nth-child(2)", baseRot:  0.8, hoverRot:  1.4 },
  { selector: ".services-masonry > .w-layout-cell:nth-child(3)", baseRot: -0.5, hoverRot: -1.1 },
  { selector: ".services-masonry > .w-layout-cell:nth-child(4)", baseRot:  1.4, hoverRot:  2.0 },
  { selector: ".services-masonry > .w-layout-cell:nth-child(5)", baseRot: -1.0, hoverRot: -1.6 },
  { selector: ".services-masonry > .w-layout-cell:nth-child(6)", baseRot:  0.6, hoverRot:  1.2 },
  // Homepage — gallery
  { selector: ".gallery > .w-layout-cell:nth-child(1)", baseRot: -1.1, hoverRot: -1.7 },
  { selector: ".gallery > .w-layout-cell:nth-child(2)", baseRot:  0.7, hoverRot:  1.3 },
  { selector: ".gallery > .w-layout-cell:nth-child(3)", baseRot: -0.5, hoverRot: -1.1 },
  { selector: ".gallery > .w-layout-cell:nth-child(4)", baseRot:  1.2, hoverRot:  1.8 },
  { selector: ".gallery > .w-layout-cell:nth-child(5)", baseRot: -0.8, hoverRot: -1.4 },
  { selector: ".gallery > .w-layout-cell:nth-child(6)", baseRot:  0.4, hoverRot:  1.0 },
  { selector: ".gallery > .w-layout-cell:nth-child(7)", baseRot: -0.9, hoverRot: -1.5 },
  { selector: ".gallery > .w-layout-cell:nth-child(8)", baseRot:  1.3, hoverRot:  1.9 },
  // Packages — base package card
  { selector: ".pricing-card-negative",        baseRot: -0.8, hoverRot: -1.4 },
  // Packages — festivals & markets card
  { selector: ".festivals-markets.pale-blue",  baseRot:  0.6, hoverRot:  1.2 },
  // Packages — add-on cards
  { selector: ".pricing-addon-grid > .w-layout-cell:nth-child(2)", baseRot: -1.1, hoverRot: -1.7 },
  { selector: ".pricing-addon-grid > .w-layout-cell:nth-child(3)", baseRot:  0.9, hoverRot:  1.5 },
  { selector: ".pricing-addon-grid > .w-layout-cell:nth-child(4)", baseRot: -0.6, hoverRot: -1.2 },
  { selector: ".pricing-addon-grid > .w-layout-cell:nth-child(5)", baseRot:  1.3, hoverRot:  1.9 },
  { selector: ".pricing-addon-grid > .w-layout-cell:nth-child(6)", baseRot: -0.8, hoverRot: -1.4 },
  { selector: ".pricing-addon-grid > .w-layout-cell:nth-child(7)", baseRot:  0.5, hoverRot:  1.1 },
  // About Us — offer cards
  { selector: ".about-offer-grid > .w-layout-cell:nth-child(2)", baseRot: -1.1, hoverRot: -1.7, baseY:  20 },
  { selector: ".about-offer-grid > .w-layout-cell:nth-child(3)", baseRot:  0.8, hoverRot:  1.4, baseY: -18 },
  { selector: ".about-offer-grid > .w-layout-cell:nth-child(4)", baseRot: -0.6, hoverRot: -1.2, baseY:  28 },
  { selector: ".about-offer-grid > .w-layout-cell:nth-child(5)", baseRot:  0.7, hoverRot:  1.3, baseY: -12 },
];

export default function ScatteredCardHover() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (min-width: 768px)").matches) return;

    const cleanups: Array<() => void> = [];

    for (const { selector, baseRot, hoverRot, baseY = 0 } of CARDS) {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        gsap.set(el, { rotation: baseRot, y: baseY });

        const onEnter = () => {
          gsap.killTweensOf(el);
          gsap.to(el, { rotation: hoverRot, y: baseY, duration: 0.55, ease: "back.out(1.4)" });
        };
        const onLeave = () => {
          gsap.killTweensOf(el);
          gsap.to(el, { rotation: baseRot, y: baseY, duration: 0.45, ease: "power3.out" });
        };

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          gsap.killTweensOf(el);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
