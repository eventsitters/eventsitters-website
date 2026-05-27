"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const locations = [
  "Napier",
  "Hastings",
  "Havelock North",
  "Taradale",
  "Clive",
  "Te Awanga",
  "Bay View",
  "Central Hawke’s Bay",
];

const faqs = [
  {
    q: "Do you travel throughout Hawke’s Bay?",
    a: "Yes. We regularly provide kids’ entertainment for events in Napier, Hastings, Havelock North and surrounding areas.",
  },
  {
    q: "Can you travel outside Hawke’s Bay?",
    a: "Yes. Depending on the event, we may be able to travel beyond the region. Get in touch to discuss your plans.",
  },
];

export default function HawkesBayCard() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* ── Card ───────────────────────────────────────────────────────────── */}
      <div className="hb-region-card pale-blue">
        <div className="hawkes-bay-visual-wrapper hb-card-visual">
          <div className="hawkes-bay-visual" />
          <Image
            src="/images/confetti-yellow.svg"
            alt=""
            className="confetti-hb-yellow"
            width={80}
            height={80}
            aria-hidden="true"
          />
          <Image
            src="/images/confetti-purple-outline.svg"
            alt=""
            className="confetti-hero-turquoise"
            width={80}
            height={80}
            aria-hidden="true"
          />
        </div>
        <div className="hb-region-card-body">
          <h3 className="super-heading all-caps">Where We Work</h3>
          <h2 className="headline-medium">Homegrown in Hawke&apos;s Bay</h2>
          <p className="p-medium">
            We&apos;re a local business serving Napier, Hastings, Havelock North, and the wider
            Hawke&apos;s Bay region, happy to travel to your venue.
          </p>
          <button
            type="button"
            className="button outline pale-blue w-button"
            onClick={() => setOpen(true)}
          >
            View Our Service Area
          </button>
        </div>
      </div>

      {/* ── Modal ──────────────────────────────────────────────────────────── */}
      {open && createPortal(
        <div
          className="service-modal-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Hawke's Bay Kids' Entertainment — Service Area"
        >
          <div
            className="service-modal-card pale-purple"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="service-modal-close-bar">
              <button
                type="button"
                className="service-modal-close"
                onClick={close}
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="2" y1="2" x2="14" y2="14" />
                  <line x1="14" y1="2" x2="2" y2="14" />
                </svg>
              </button>
            </div>

            <div className="service-modal-body">

              {/* Top: two-column */}
              <div className="service-modal-top">
                <div className="service-modal-main">
                  <div className="super-heading all-caps">Where We Work</div>
                  <h2 className="headline-medium">Hawke&apos;s Bay Kids&apos; Entertainment</h2>
                  <p className="p-medium">Perfect for winery weddings, garden weddings and family celebrations throughout Hawke&apos;s Bay.</p>
                  <p className="p-medium">Ideal for conferences, family days and corporate events across Hawke&apos;s Bay.</p>
                  <div className="hb-modal-venues">
                    <h3 className="service-modal-section-label">Familiar With Hawke&apos;s Bay Event Venues</h3>
                    <p className="p-medium">Event Sitters regularly works at a wide range of venues throughout Hawke&apos;s Bay, from wineries and wedding venues to community spaces and corporate event locations.</p>
                  </div>
                </div>

                <div className="service-modal-sidebar">
                  <div className="service-modal-highlights">
                    <p className="service-modal-section-label">We regularly support events in:</p>
                    <ul className="service-modal-highlights-list">
                      {locations.map((loc) => (
                        <li key={loc}>{loc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="hb-modal-faqs">
                <h3 className="service-modal-section-label hb-modal-faqs-label">Frequently Asked Questions</h3>
                {faqs.map(({ q, a }) => (
                  <div key={q} className="hb-modal-faq-item">
                    <p className="hb-modal-faq-q">{q}</p>
                    <p className="p-medium">{a}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
