"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import AddonModal, { type AddonData } from "./AddonModal";

const ADDONS: AddonData[] = [
  {
    id: "all-day",
    img: "/images/all-day-package.webp",
    alt: "A cute play tent with plush toys set up at an event",
    title: "All-Day Package",
    color: "pale-yellow",
    shortDesc: "More hours, more fun. Ideal for longer events where the energy needs to stay high all day.",
    paragraphs: [
      "For events that run from morning to evening, our all-day package extends the entertainment across the full day. We refresh the activity rotation throughout so children stay engaged no matter when they arrive. There's always something new to come back to.",
      "We plan the programming around your event's natural flow: quieter, creative stations during speeches or formalities, and livelier games when there's more open time. It's all managed seamlessly so you don't need to think about it.",
    ],
  },
  {
    id: "larger-groups",
    img: "/images/larger-groups.webp",
    alt: "Children sitting on grass in an outdoor setting, engaged in drawing and crafting activities.",
    title: "Larger Groups",
    color: "pale-turquoise",
    shortDesc: "More kids, no problem. Extra staff and scaled-up activities so no one gets left out.",
    paragraphs: [
      "For events with a bigger turnout of young guests, we scale up with additional staff and expanded activity stations. The right staffing ratio is what keeps a kids' space from becoming chaotic. We make sure every child gets attention and no one's left waiting around.",
      "Larger group bookings are tailored to expected headcount. We'll talk through numbers during consultation so we arrive properly resourced for your event.",
    ],
  },
  {
    id: "outdoor-setup",
    img: "/images/outdoor-set-up.webp",
    alt: "Outdoor craft setup under a white canopy, featuring tables with art supplies in a lush garden environment.",
    title: "Outdoor Set-Up",
    color: "pale-blue",
    shortDesc: "A solid, weather-proof gazebo so the forecast doesn't become your problem.",
    paragraphs: [
      "Our outdoor setup includes a professional, weather-proof gazebo that creates a proper sheltered space for the kids' area, not just a pop-up tent. It handles wind and light rain comfortably, and provides real shade on a hot day.",
      "We manage the full outdoor setup including ground coverings and weighted fittings. You just need to allocate the space and we'll handle everything else.",
    ],
  },
  {
    id: "themed-decor",
    img: "/images/themed-decor-crafts.webp",
    alt: "Child colouring a detailed craft design with bright pencils, focusing on fine artistic work.",
    title: "Themed Decor & Crafts",
    color: "pale-purple",
    shortDesc: "Decorations and crafts tailored to your event's theme. A small detail that makes a big difference.",
    paragraphs: [
      "We can align our decorations and craft activities to a specific theme: a garden party, a winter wedding, a tropical celebration, or something entirely custom. The theming runs through the decorations, the materials, and the finished crafts your guests take home.",
      "This add-on pairs especially well with gift bags, since the finished crafts often become the keepsake. Tell us your theme during consultation and we'll let you know what's possible.",
    ],
  },
  {
    id: "button-badges",
    img: "/images/button-badges.jpg",
    alt: "A button badge press machine on a table with freshly made colourful badges on a gold disc.",
    title: "Button Badges",
    color: "pale-pink",
    shortDesc: "Always a crowd-pleaser. Kids design their own badge and wear it with pride all day.",
    paragraphs: [
      "Button badge making is one of those activities that never gets old. Kids choose a motif, colour it in, press their badge on the machine, and spend the rest of the event wearing something they made themselves. It's hands-on, personal, and loved by every age group.",
      "Motifs can be themed to match your event and we prepare a varied range of designs for kids to pick from. The badge press is a natural crowd magnet. You'll often find a queue forming on its own.",
    ],
  },
  {
    id: "face-painting",
    img: "/images/face-painting.webp",
    alt: "Child's face being painted with vibrant colours, highlighting intricate details on the nose.",
    title: "Face Painting",
    color: "pale-red",
    shortDesc: "Always a crowd-pleaser. Kids pick their look, we do the rest.",
    paragraphs: [
      "Face painting creates its own little moment of theatre. Kids pick their design from a menu of options, sit still for a few minutes, and walk away absolutely delighted with themselves. It's consistently one of the most popular activities we offer.",
      "We typically run face painting in a dedicated window of one to one-and-a-half hours rather than across the full event, which keeps the queue moving and ensures quality. We'll work out the best timing slot with you.",
    ],
  },
];

export default function AddonCards() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openAddon = ADDONS.find((a) => a.id === openId) ?? null;
  const handleClose = useCallback(() => setOpenId(null), []);

  return (
    <>
      {ADDONS.map((addon) => (
        <div key={addon.id} className="w-layout-cell">
          <button
            type="button"
            className={`addon-card ${addon.color}`}
            onClick={() => setOpenId(addon.id)}
          >
            <Image
              src={addon.img}
              alt={addon.alt}
              className="add-ons-thumbnail"
              width={716}
              height={400}
              style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover" }}
            />
            <div className="paragraph-wrapper-tile pricing">
              <h3 className="headline-small">{addon.title}</h3>
              <p className="p-small">{addon.shortDesc}</p>
              <span className="addon-card-cta">Learn more</span>
            </div>
          </button>
        </div>
      ))}

      <AddonModal addon={openAddon} onClose={handleClose} />
    </>
  );
}
