"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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
      gsap.to(window, {
        scrollTo: { y: `#${hash}`, offsetY: 0 },
        duration: 0.9,
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
