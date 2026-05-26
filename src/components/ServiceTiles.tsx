"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import ServiceModal, { type ServiceData } from "./ServiceModal";

/* ── Full service data (shown in the modal) ──────────────────────────── */
const SERVICES: ServiceData[] = [
  {
    id: "private-functions",
    color: "pale-yellow",
    superheading: "Weddings & Birthdays",
    title: "Kids' Entertainment for Private Functions",
    image: "/images/private-events.webp",
    imageAlt: "A young boy in a polka-dotted shirt concentrates on a dice game at a private event",
    paragraphs: [
      "Weddings, milestone birthdays, baby showers, anniversary celebrations and family gatherings are some of life's most memorable events. Event Sitters provides children's entertainment and supervised activity spaces that help young guests enjoy the occasion just as much as the adults.",
      "We create welcoming, age-appropriate spaces where children can enjoy arts and crafts, games, storytelling, creative projects and hands-on activities throughout the event. Whether it's a wedding ceremony, reception, birthday party or family celebration, our activities are tailored to suit the venue, age groups and atmosphere of the day.",
      "Our experienced team handles everything from setup and styling through to activities and pack-down. From a handful of children to larger groups, we create engaging entertainment that helps kids make memories, build friendships and enjoy a space designed especially for them.",
      "Based in Hawke's Bay, we provide children's entertainment for weddings, private events, family celebrations and special occasions across the region.",
    ],
    highlights: [
      "Weddings, birthdays and family celebrations",
      "Children's entertainment, games and crafts",
      "Dedicated activity space for young guests",
      "We bring, set up and pack down everything",
      "Suitable for small and large groups of children",
    ],
    perfectFor: [
      "Garden weddings",
      "Winery weddings",
      "Family-focused weddings",
      "Multi-generational celebrations",
    ],
    galleryImages: [
      { src: "/images/private-events.webp",  alt: "Young boy concentrating on a dice game at a private event" },
      { src: "/images/p2060476.webp",         alt: "Child relaxing inside a cosy play tent with stuffed animals" },
      { src: "/images/img-4506.webp",         alt: "Child carefully colouring a detailed illustration at a craft station" },
    ],
  },
  {
    id: "corporate-events",
    color: "pale-turquoise",
    superheading: "Work Functions & Corporate Events",
    title: "Kids' Entertainment for Corporate Events",
    image: "/images/corporate-functions.webp",
    imageAlt: "A smiling young boy wearing a beige cap sits at a table filled with art supplies at a work function",
    paragraphs: [
      "More businesses across Hawke's Bay are choosing to make their events family-friendly, and it's easy to see why. Company family days, staff celebrations, Christmas parties and community events become more inclusive when employees can bring their children along and know there will be something fun for them to enjoy.",
      "Event Sitters provides children's entertainment for corporate events, work functions and family-friendly business gatherings. We create dedicated activity spaces where children can enjoy arts and crafts, games, creative projects, storytelling and hands-on activities throughout the event. Rather than simply keeping children occupied, we give them a space designed especially for them.",
      "We've supported team family days, company picnics, end-of-year celebrations and staff appreciation events across Hawke's Bay. Whether you're expecting a small group of children or a larger crowd, we tailor activities to suit the ages, interests and format of your event.",
      "Christmas functions are one of our busiest times of the year. With exciting activities, creative crafts and engaging entertainment available throughout the day, children have plenty to enjoy while families spend time together and take part in the celebration.",
      "We also provide children's entertainment for conferences, awards evenings, networking events and business functions where partners and families are invited. A well-designed children's activity space helps make these events more accessible, more inclusive and more enjoyable for guests of all ages.",
    ],
    highlights: [
      "Company family days and team events",
      "Children's entertainment and activities",
      "Arts, crafts, games and creative play",
      "Christmas functions and staff celebrations",
      "Conferences and family-friendly business events",
    ],
    perfectFor: [
      "Conferences",
      "Christmas functions",
      "Staff family days",
      "Community open days",
    ],
    galleryImages: [
      { src: "/images/corporate-functions.webp", alt: "Smiling boy with art supplies at a work function" },
      { src: "/images/p2060335.webp",             alt: "Young boy building a tower with colourful wooden blocks" },
      { src: "/images/p2060103.webp",             alt: "Rainbow-coloured wooden blocks stacked in front of a play tent" },
    ],
  },
  {
    id: "public-events",
    color: "pale-purple",
    superheading: "Markets, Festivals & Community Events",
    title: "Kids' Entertainment for Public Events",
    image: "/images/public-events.webp",
    imageAlt: "A group of children and adults gather around a table at an outdoor event, engaged in holiday crafts",
    paragraphs: [
      "Public events are all about creating experiences that bring communities together. Markets, fairs, festivals and community celebrations attract families of all ages, and having engaging activities for children helps make the day even more enjoyable for everyone who attends.",
      "Event Sitters provides children's entertainment for public events across Hawke's Bay. We create dedicated activity spaces where children can enjoy arts and crafts, creative projects, games, storytelling and hands-on activities throughout the day. These spaces give young visitors something exciting to discover while adding an extra attraction for families attending your event.",
      "At markets and fairs, our activity areas encourage families to spend more time exploring everything your event has to offer. Children can get involved in creative activities while parents browse stalls, enjoy local food, connect with exhibitors and take in the atmosphere. It's a simple addition that enhances the experience for the whole family.",
      "For festivals and community events, we provide flexible entertainment programmes that can run throughout the day. Activities are refreshed and rotated to keep things engaging for returning visitors, ensuring children always have something new to enjoy. We also offer outdoor gazebo setups for shade and shelter, making our activity spaces suitable for a wide range of event environments.",
      "We work closely with event organisers to integrate seamlessly into your event layout, branding and programme. Whether you're planning a local market, community fair, festival, school fundraiser or large public event, we can tailor our children's entertainment services to suit your venue, audience and expected attendance.",
    ],
    highlights: [
      "Children's entertainment for public events",
      "Arts, crafts and creative activities",
      "All-day engagement for young visitors",
      "Rotating programme for repeat visitors",
      "Outdoor gazebo and weather-ready setup",
    ],
    perfectFor: [
      "Markets",
      "Festivals",
      "School fairs",
      "Community celebrations",
    ],
    galleryImages: [
      { src: "/images/public-events.webp",  alt: "Group of children doing holiday crafts at an outdoor event" },
      { src: "/images/pc070239.webp",        alt: "Children in Santa hats doing arts and crafts at a public event" },
      { src: "/images/pc070120.webp",        alt: "Children and parents doing Christmas crafts at an outdoor market" },
    ],
  },
];

/* ── Tile teaser copy ────────────────────────────────────────────────── */
const TILES = [
  {
    id: "private-functions",
    label: "Private Functions",
    lines: [
      "Weddings, birthdays, family get-togethers. We set up a dedicated kids' space packed with games, crafts, and activities.",
      "They can dip in, take a breather, or stay all day. Either way, they're in good hands.",
    ],
  },
  {
    id: "corporate-events",
    label: "Corporate Events",
    lines: [
      "Kids at corporate events? Sorted. We keep them close by, engaged, and entertained, so parents stay present and your event runs the way it should.",
      "Because the best work events are the ones where everyone has a great time. Even the littlest attendees.",
    ],
  },
  {
    id: "public-events",
    label: "Public Events",
    lines: [
      "Festivals, markets, community events. We show up, set up, and bring the fun. Games, crafts, and themed entertainment for every age.",
      "Flexible enough for any size, location, or theme. Just point us to the spot and we'll handle the rest.",
    ],
  },
];

export default function ServiceTiles() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openService = SERVICES.find((s) => s.id === openId) ?? null;
  const handleClose = useCallback(() => setOpenId(null), []);

  return (
    <>
      <div className="container services">
        {TILES.map((tile) => {
          const svc = SERVICES.find((s) => s.id === tile.id)!;
          return (
            <button
              key={tile.id}
              type="button"
              className={`events-tile ${svc.color}`}
              onClick={() => setOpenId(tile.id)}
            >
              <h2 className="headline-small">{tile.label}</h2>
              <Image
                src={svc.image}
                alt={svc.imageAlt}
                className="event-thumbnail"
                width={1120}
                height={750}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="copy-wrapper">
                {tile.lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <ServiceModal service={openService} onClose={handleClose} />
    </>
  );
}
