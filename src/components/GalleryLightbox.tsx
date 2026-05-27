"use client";

import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { setThemeColor, resetThemeColor } from "@/lib/themeColor";

export type GalleryImage = { src: string; alt: string };

type Props = {
  image: GalleryImage | null;
  onClose: () => void;
};

export default function GalleryLightbox({ image, onClose }: Props) {
  /* Fresh random rotation each time a new image opens */
  const rotation = useMemo(() => (Math.random() - 0.5) * 6, [image]);

  /* Keyboard close + scroll lock + status bar colour */
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    setThemeColor("white"); // lightbox backdrop is white on mobile
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      resetThemeColor();
    };
  }, [image, onClose]);

  if (!image) return null;

  return createPortal(
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div className="lightbox-close">
        <button
          type="button"
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="2" y1="2" x2="14" y2="14" />
            <line x1="14" y1="2" x2="2" y2="14" />
          </svg>
        </button>
      </div>

      <div
        className="lightbox-image-wrap"
        onClick={(e) => e.stopPropagation()}
        style={{ "--lightbox-rot": `${rotation}deg` } as React.CSSProperties}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1400}
          height={940}
          sizes="(max-width: 767px) 94vw, min(94vw, 1280px)"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
          priority
        />
      </div>
    </div>,
    document.body
  );
}
