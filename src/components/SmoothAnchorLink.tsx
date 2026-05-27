"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { lockScroll } from "@/lib/scrollLock";

gsap.registerPlugin(ScrollToPlugin);

const DURATION = 0.9; // seconds

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
      // Read the current nav height so the section heading lands just below it.
      // Falls back to 72 px if the element isn't found.
      const navHeight =
        (document.querySelector(".nav-bar") as HTMLElement)?.offsetHeight ?? 72;

      // Lock the nav's hide-on-scroll logic for the animation duration so it
      // doesn't slide away mid-scroll and cause visual jitter.
      lockScroll(DURATION * 1000);

      gsap.to(window, {
        scrollTo: { y: `#${hash}`, offsetY: navHeight },
        duration: DURATION,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
