"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type ServiceData = {
  id: string;
  color: "pale-yellow" | "pale-turquoise" | "pale-purple";
  superheading: string;
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  highlights: string[];
  perfectFor?: string[];
  galleryImages: Array<{ src: string; alt: string }>;
};

type Props = {
  service: ServiceData | null;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
  const handleQuoteClick = useCallback(() => {
    onClose();
    setTimeout(() => {
      document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [onClose]);

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    // Lock scroll on both html and body to cover all browsers
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [service, onClose]);

  // Render nothing when closed — also prevents portal call during SSR
  if (!service) return null;

  return createPortal(
    <div
      className="service-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <div
        className={`service-modal-card ${service.color}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky close bar — always visible even on mobile while scrolling */}
        <div className="service-modal-close-bar">
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

        {/* Scrollable body */}
        <div className="service-modal-body">

          {/* Top: two-column layout */}
          <div className="service-modal-top">
            <div className="service-modal-main">
              <div className="super-heading all-caps">{service.superheading}</div>
              <h2 className="headline-medium">{service.title}</h2>
              {service.paragraphs.map((p, i) => (
                <p key={i} className="p-medium">{p}</p>
              ))}
              <div className="service-modal-cta">
                <button type="button" className="button w-button" onClick={handleQuoteClick}>
                  Request a Quote
                </button>
              </div>
            </div>

            {(service.highlights.length > 0 || service.perfectFor?.length) && (
              <div className="service-modal-sidebar">
                {service.highlights.length > 0 && (
                  <div className="service-modal-highlights">
                    <ul className="service-modal-highlights-list">
                      {service.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.perfectFor && service.perfectFor.length > 0 && (
                  <div className="service-modal-highlights">
                    <p className="service-modal-section-label">Perfect for</p>
                    <ul className="service-modal-highlights-list">
                      {service.perfectFor.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Gallery */}
          {service.galleryImages.length > 0 && (
            <div className="service-modal-gallery">
              {service.galleryImages.map((img, i) => (
                <div key={i} className="service-modal-gallery-item">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(max-width: 767px) 50vw, 400px"
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
