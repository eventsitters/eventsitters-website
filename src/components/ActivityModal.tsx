"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useModalHeight } from "./useModalHeight";
import { setThemeColor, resetThemeColor } from "@/lib/themeColor";

export type ActivityData = {
  id: string;
  title: string;
  color: "pale-red" | "pale-purple" | "pale-turquoise" | "pale-blue" | "pale-yellow" | "pale-pink";
  icon: string;
  iconAlt: string;
  iconClass: string;
  shortDesc: string;
  paragraphs: string[];
  galleryImages: Array<{ src: string; alt: string }>;
};

type Props = {
  activity: ActivityData | null;
  onClose: () => void;
};

export default function ActivityModal({ activity, onClose }: Props) {
  useModalHeight(!!activity);

  useEffect(() => {
    if (!activity) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    setThemeColor(activity.color);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      resetThemeColor();
    };
  }, [activity, onClose]);

  if (!activity) return null;

  return createPortal(
    <div
      className="activity-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={activity.title}
    >
      <div
        className={`activity-modal-card ${activity.color}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — absolute within the card */}
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

        <div className="activity-modal-body">
          <div className="activity-modal-content">
            <h2 className="headline-medium">{activity.title}</h2>
            {activity.paragraphs.map((p, i) => (
              <p key={i} className="p-medium">{p}</p>
            ))}
          </div>

          {activity.galleryImages.length > 0 && (
            <div className="activity-modal-gallery">
              {activity.galleryImages.map((img, i) => (
                <div key={i} className="service-modal-gallery-item">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 767px) 50vw, 300px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
