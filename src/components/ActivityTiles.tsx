"use client";

import { useState, useCallback } from "react";
import ActivityModal, { type ActivityData } from "./ActivityModal";

/* ── Full activity data (shown in the modal) ─────────────────────────── */
const ACTIVITIES: ActivityData[] = [
  {
    id: "active-play",
    title: "Active Play & Games",
    color: "pale-red",
    icon: "/images/active-play.svg",
    iconAlt: "Balloon icon",
    iconClass: "active-play-icon",
    shortDesc: "Fun games for every age, from group activities and classic board games to imaginative play for toddlers.",
    paragraphs: [
      "From classic party games and team challenges to interactive group activities, our games are chosen to get kids moving, laughing, and making friends. Every activity is tailored to the age range of children attending and the energy of your event.",
      "We cover all ages: board games and strategy for older kids, imaginative play for toddlers. Children can drop in, play at their own pace, and come back for more throughout the day.",
    ],
    galleryImages: [
      { src: "/images/children-playing-games-event-sitters-activity.webp", alt: "Children playing games at an Event Sitters activity station" },
      { src: "/images/kids-group-play-activities-event-sitters.webp", alt: "Kids engaged in group play activities at an event" },
    ],
  },
  {
    id: "arts-crafts",
    title: "Arts & Crafts",
    color: "pale-purple",
    icon: "/images/arts-crafts.svg",
    iconAlt: "Scissor cut icon",
    iconClass: "arts-crafts-icon",
    shortDesc: "Hands-on creative projects kids get to take home and cherish.",
    paragraphs: [
      "Children sit down, slow down, and get creative, making something they're genuinely proud of. Projects range from simple and satisfying to more detailed designs for older kids, and everything is mess-free by design.",
      "We bring all the materials, set up the station, and manage the process from start to finish. At the end of the event, every child takes their creation home.",
    ],
    galleryImages: [
      { src: "/images/arts-crafts-girl-drawing.jpg", alt: "Girl in orange shirt drawing at an outdoor Event Sitters activity station" },
      { src: "/images/arts-crafts-hands-colouring.jpg", alt: "Close-up of a child's hands colouring with a red pencil at an Event Sitters craft session" },
    ],
  },
  {
    id: "toys-playtime",
    title: "Toys & Playtime",
    color: "pale-turquoise",
    icon: "/images/toys.svg",
    iconAlt: "Stacked blocks icon",
    iconClass: "toys-icon",
    shortDesc: "Quality toys for exploring, constructing, and building. Hours of meaningful play.",
    paragraphs: [
      "We bring a curated collection of quality toys that invite children to explore, construct, and create. Building blocks, stacking sets, and construction toys are always a favourite, endlessly replayable and great for all ages.",
      "Our selection is refreshed throughout longer events to keep interest high, and the open-ended nature of the toys naturally encourages children to collaborate and play together.",
    ],
    galleryImages: [
      { src: "/images/kids-wooden-blocks-play-tent-event-sitters.webp", alt: "Rainbow-coloured wooden building blocks stacked in a pyramid" },
      { src: "/images/boy-building-wooden-block-tower-event-sitters.webp", alt: "Young boy concentrating on building a tower with colourful wooden blocks" },
    ],
  },
  {
    id: "story-time",
    title: "Story Time",
    color: "pale-blue",
    icon: "/images/storytime.svg",
    iconAlt: "Book icon",
    iconClass: "storytime-icon",
    shortDesc: "Enchanting stories and search-and-find books in a calm, relaxing setting.",
    paragraphs: [
      "Our story sessions give children a chance to slow down, listen, and let their imaginations wander, a calm counterpoint to the energy of games and crafts. We choose age-appropriate stories that children ask to hear again.",
      "Alongside read-alouds, we provide search-and-find books and picture books to explore independently. Popular with toddlers right through to early readers.",
    ],
    galleryImages: [
      { src: "/images/children-story-time-event-sitters-session.webp", alt: "Children gathered for story time at an Event Sitters session" },
      { src: "/images/kids-story-time-relaxed-event-sitters.webp", alt: "Kids listening to a story in a relaxed setting at an event" },
    ],
  },
  {
    id: "cozy-corner",
    title: "Cozy Corner",
    color: "pale-yellow",
    icon: "/images/cozy-corner.svg",
    iconAlt: "Pillow icon",
    iconClass: "cozy-corner-icon",
    shortDesc: "A quiet retreat where kids can relax, recharge, and enjoy a bit of pretend play.",
    paragraphs: [
      "Between the games and the excitement, our Cozy Corner gives children a dedicated quiet space to step back and recharge. Soft cushions and blankets create a welcoming retreat that feels like their own little world within the event.",
      "Toddlers and younger children often gravitate here naturally. It's low-pressure, familiar in feel, and free from competitive energy. Perfect for pretend play, a quiet moment, or simply taking a breather.",
    ],
    galleryImages: [
      { src: "/images/cozy-corner-plushies.jpg", alt: "Soft plush toys lined up inside a cosy play tent at an Event Sitters setup" },
      { src: "/images/cozy-corner-tent.jpg",     alt: "Young boy relaxing inside a cosy play tent surrounded by stuffed animals" },
    ],
  },
  {
    id: "decoration",
    title: "Decoration",
    color: "pale-pink",
    icon: "/images/decoration.svg",
    iconAlt: "Decorations icon",
    iconClass: "decoration-icon",
    shortDesc: "Balloons, pillows, bunting, and decor touches that make the space feel truly special.",
    paragraphs: [
      "Our decoration service transforms a simple corner into a space that looks deliberately designed and full of personality. Balloons, bunting, colourful fabrics, and themed decor are chosen to complement your event's tone.",
      "We bring everything, set it all up, and pack it down at the end. No sourcing, no logistics. It's all part of what we do.",
    ],
    galleryImages: [
      { src: "/images/decoration-blocks-tent.jpg", alt: "Rainbow wooden building blocks stacked in front of a play tent with bunting flags at an Event Sitters setup" },
      { src: "/images/decoration-play-setup.jpg", alt: "Play area floor setup with books, activity cube, and wooden toys at an Event Sitters event" },
    ],
  },
];

/* ── Grid span config ────────────────────────────────────────────────── */
const SPANS: Record<string, string> = {
  "active-play":   "services-cell-2",
  "arts-crafts":   "services-cell-4",
  "toys-playtime": "services-cell-3",
  "story-time":    "services-cell-3",
  "cozy-corner":   "services-cell-4",
  "decoration":    "services-cell-2",
};

export default function ActivityTiles() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openActivity = ACTIVITIES.find((a) => a.id === openId) ?? null;
  const handleClose = useCallback(() => setOpenId(null), []);

  return (
    <>
      <div className="container">
        <div className="w-layout-layout services-masonry wf-layout-layout">
          {ACTIVITIES.map((activity) => (
            <div key={activity.id} className={`w-layout-cell ${SPANS[activity.id]}`}>
              <button
                type="button"
                className={`services-tile ${activity.color}`}
                onClick={() => setOpenId(activity.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activity.icon}
                  alt={activity.iconAlt}
                  className={activity.iconClass}
                />
                <h2 className="headline-small">{activity.title}</h2>
                <div>{activity.shortDesc}</div>
                <span className="activity-tile-cta-wrapper">
                  <span className="activity-tile-cta">Learn more</span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <ActivityModal activity={openActivity} onClose={handleClose} />
    </>
  );
}
