"use client";

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    const val = menuOpen ? "hidden" : "";
    document.body.style.overflow = val;
    document.documentElement.style.overflow = val;
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    if (!menu) { setMenuOpen(false); return; }
    gsap.killTweensOf(menu);
    gsap.to(menu, {
      autoAlpha: 0, y: -12, duration: 0.22, ease: "power2.in",
      onComplete: () => setMenuOpen(false),
    });
  }, [menuOpen]);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (menuOpen) {
      hasOpenedRef.current = true;
      gsap.killTweensOf(menu);
      gsap.fromTo(menu,
        { autoAlpha: 0, y: -16 },
        { autoAlpha: 1, y: 0, duration: 0.32, ease: "power3.out", force3D: true }
      );
    } else if (hasOpenedRef.current) {
      gsap.killTweensOf(menu);
      gsap.set(menu, { clearProps: "all" });
    }
  }, [menuOpen]);

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`nav-item w-nav-link${pathname === href ? " w--current" : ""}`}
      onClick={closeMenu}
    >
      {label}
    </Link>
  );

  return (
    <div role="banner" className={`nav-bar w-nav${menuOpen ? " menu-open" : ""}`}>
      <div className="nav-wrapper">
        <Link href="/" className="logo" onClick={closeMenu} aria-label="Event Sitters – home">
          <span className="event-sitters-logo" aria-hidden="true" />
        </Link>

        <nav ref={menuRef} role="navigation" className={`nav-menu w-nav-menu${menuOpen ? " menu-open" : ""}`}>
          <Link href="/#services" className="nav-item w-nav-link" onClick={closeMenu}>Services</Link>
          {navLink("/about-us", "About Us")}
          {navLink("/packages", "Packages")}

          <div className="nav-socials-wrapper">
            <a href="https://www.instagram.com/eventsittershb" target="_blank" rel="noreferrer" className="nav-item w-inline-block">
              <div className="form-icon w-embed">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8003 0H7.19981C3.22983 0 0 3.22998 0 7.20013V16.7999C0 20.77 3.22983 24 7.19981 24H16.7991C20.769 24 23.9989 20.77 23.9989 16.7999L24 7.20013C24 3.22998 20.7702 0 16.8003 0ZM21.5994 16.8011C21.5994 19.4483 19.4462 21.6016 16.7991 21.6016L7.19981 21.6005C4.55268 21.6005 2.39946 19.4472 2.39946 16.7999L2.40058 7.20021C2.40058 4.55296 4.55378 2.39964 7.20093 2.39964H16.8002C19.4473 2.39964 21.6005 4.55294 21.6005 7.20021L21.5994 16.8011ZM12.0002 6.00083C8.69161 6.00083 6.0008 8.69297 6.0008 12.0005C6.0008 15.3092 8.69281 18.0001 12.0002 18.0001C15.3087 18.0001 17.9995 15.308 17.9995 12.0005C17.9995 8.69176 15.3087 6.00083 12.0002 6.00083ZM12.0002 15.6005C10.0146 15.6005 8.40026 13.9861 8.40026 12.0005C8.40026 10.0148 10.0146 8.40039 12.0002 8.40039C13.9857 8.40039 15.6001 10.0148 15.6001 12.0005C15.6001 13.9861 13.9857 15.6005 12.0002 15.6005ZM18.8525 5.14786C19.0673 5.37624 19.2001 5.68787 19.2001 6.00061C19.2001 6.31224 19.0673 6.62501 18.8525 6.85224C18.6241 7.06825 18.3113 7.19987 17.9997 7.19987C17.687 7.19987 17.3754 7.06712 17.1481 6.85224C16.9321 6.62387 16.8005 6.31224 16.8005 6.00061C16.8005 5.68787 16.9322 5.37622 17.1481 5.14899C17.6037 4.7046 18.3957 4.70459 18.8525 5.14786Z" fill="currentColor"/>
</svg>
              </div>
            </a>
            <a href="https://www.facebook.com/eventsittershb" target="_blank" rel="noreferrer" className="nav-item w-inline-block">
              <div className="form-icon w-embed">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.24356 12.7172H9.65512V22.6452C9.65512 22.8412 9.81394 23 10.0099 23H14.0988C14.2948 23 14.4537 22.8412 14.4537 22.6452V12.764H17.2259C17.4062 12.764 17.5579 12.6287 17.5784 12.4497L17.9995 8.79467C18.0111 8.69411 17.9792 8.59341 17.9119 8.51797C17.8446 8.44246 17.7482 8.39924 17.6471 8.39924H14.4538V6.10812C14.4538 5.41746 14.8257 5.06723 15.5592 5.06723C15.6637 5.06723 17.6471 5.06723 17.6471 5.06723C17.8431 5.06723 18.0019 4.90834 18.0019 4.71239V1.35746C18.0019 1.16145 17.8431 1.00263 17.6471 1.00263H14.7697C14.7494 1.00163 14.7043 1 14.6379 1C14.1386 1 12.4033 1.09801 11.0324 2.3591C9.51361 3.7566 9.72474 5.42988 9.77519 5.71999V8.39917H7.24356C7.04755 8.39917 6.88872 8.55799 6.88872 8.75401V12.3623C6.88872 12.5583 7.04755 12.7172 7.24356 12.7172Z" fill="currentColor"/>
</svg>
              </div>
            </a>
          </div>

          <div className="nav-button-wrapper">
            <Link href="/contact-us" className="button w-button" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </nav>

        <div
          className={`menu-button w-nav-button${menuOpen ? " menu-open" : ""}`}
          onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            /* X / close icon */
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="22" y2="22" />
              <line x1="22" y1="4" x2="4" y2="22" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="7"  x2="23" y2="7"  />
              <line x1="3" y1="13" x2="23" y2="13" />
              <line x1="3" y1="19" x2="23" y2="19" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
