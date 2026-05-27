"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lockScroll } from "@/lib/scrollLock";

// Keep the nav visible for the scroll duration (browser-controlled).
// This matches the UX of the nav's own hash links.
const LOCK_MS = 900;

interface Props {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function SmoothAnchorLink({ href, className, onClick, children }: Props) {
  const pathname = usePathname();

  const [pagePart, hash] = href.startsWith("#")
    ? ["/", href.slice(1)]
    : href.split("#");

  const isSamePage = !!hash && pathname === (pagePart || "/");

  const handleClick = () => {
    onClick?.();
    if (isSamePage) {
      // Let the browser handle the hash navigation natively — the same path
      // the nav's plain <Link href="/#services"> takes. CSS scroll-behavior:smooth
      // + scroll-padding-top on html already does the right thing; using
      // window.scrollTo() with a manual offset caused a double-offset because
      // the browser also applies scroll-padding-top to native smooth scrolls.
      lockScroll(LOCK_MS); // keep nav visible while the animation runs
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
