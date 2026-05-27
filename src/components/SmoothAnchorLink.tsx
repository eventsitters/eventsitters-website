"use client";

import { usePathname } from "next/navigation";
import { lockScroll } from "@/lib/scrollLock";

// How long to suppress nav hide-on-scroll while the smooth-scroll animation runs.
// Generous enough to cover slow scrolls on tall pages.
const LOCK_MS = 1000;

interface Props {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

/**
 * A plain <a> tag that scrolls smoothly to the target when the anchor is on
 * the current page, and falls back to normal navigation otherwise.
 *
 * Uses scrollIntoView() instead of setting scroll-behavior on <html> so that
 * Next.js page-transition scroll resets (window.scrollTo(0, 0)) stay instant.
 * scroll-padding-top: var(--nav-height) on <html> handles the sticky-nav offset.
 */
export default function SmoothAnchorLink({ href, className, onClick, children }: Props) {
  const pathname = usePathname();

  // Normalise href → { page, hash }
  // "#quote-form"  → page "/", hash "quote-form"
  // "/#services"   → page "/", hash "services"
  // "/about#foo"   → page "/about", hash "foo"
  const [pagePart, hash] = href.startsWith("#")
    ? ["/", href.slice(1)]
    : href.split("#");

  const isSamePage = !!hash && pathname === (pagePart || "/");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (isSamePage) {
      const target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        lockScroll(LOCK_MS); // keep nav visible during the animation
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
