"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lockScroll } from "@/lib/scrollLock";

// Native smooth scroll duration is browser-controlled; lock slightly longer
// than a typical smooth-scroll completes so the nav doesn't hide mid-travel.
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (isSamePage) {
      e.preventDefault();

      const target = document.getElementById(hash);
      if (!target) return;

      // Offset by the sticky nav height so the section heading lands just below it.
      const navHeight =
        (document.querySelector(".nav-bar") as HTMLElement)?.offsetHeight ?? 72;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navHeight;

      // Lock the nav's hide-on-scroll logic so it doesn't slide away while the
      // browser animates. Native smooth scroll is hardware-accelerated and avoids
      // the rAF / sticky-recalculation jitter that GSAP ScrollToPlugin caused.
      lockScroll(LOCK_MS);

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
