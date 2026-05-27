"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useModalHeight } from "./useModalHeight";
import { setThemeColor, resetThemeColor } from "@/lib/themeColor";

export type AddonData = {
  id: string;
  img: string;
  alt: string;
  title: string;
  color: "pale-yellow" | "pale-turquoise" | "pale-blue" | "pale-purple" | "pale-pink" | "pale-red";
  shortDesc: string;
  paragraphs: string[];
};

type Props = {
  addon: AddonData | null;
  onClose: () => void;
};

export default function AddonModal({ addon, onClose }: Props) {
  useModalHeight(!!addon);

  useEffect(() => {
    if (!addon) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    setThemeColor(addon.color);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      resetThemeColor();
    };
  }, [addon, onClose]);

  if (!addon) return null;

  return createPortal(
    <div
      className="activity-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={addon.title}
    >
      <div
        className={`activity-modal-card ${addon.color}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — floats over the image */}
        <div className="activity-modal-close-bar">
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

        {/* Hero image — flush to top, corners clipped by card's overflow:hidden */}
        <div className="addon-modal-image-wrap">
          <Image
            src={addon.img}
            alt={addon.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 767px) 100vw, 580px"
            priority
          />
        </div>

        {/* Text content */}
        <div className="addon-modal-body">
          <h2 className="headline-medium">{addon.title}</h2>
          {addon.paragraphs.map((p, i) => (
            <p key={i} className="p-medium">{p}</p>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
