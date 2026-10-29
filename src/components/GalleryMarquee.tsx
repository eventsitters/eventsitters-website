import type { CSSProperties } from "react";
import Image from "next/image";
import { softMasks } from "@/lib/galleryShapes";

const images = [
  { src: "/images/arts-crafts-santa.jpg",         alt: "Child carefully colouring a detailed illustration at an Event Sitters activity station" },
  { src: "/images/toys-blocks-pyramid.jpg",        alt: "Rainbow-coloured wooden building blocks stacked in a pyramid in front of a cosy play tent with bunting flags" },
  { src: "/images/arts-crafts-christmas-tree.jpg", alt: "Child colouring a Christmas tree illustration with a green marker at an Event Sitters craft session" },
  { src: "/images/public-event-santa-crafts.jpg",  alt: "Children in Santa hats doing arts and crafts at an outdoor public event, with Event Sitters signage visible" },
  { src: "/images/toys-blocks-building.jpg",       alt: "Young boy in a cap concentrating on building a tower with colourful wooden blocks" },
  { src: "/images/cozy-corner-tent.jpg",           alt: "Young boy relaxing inside a cosy play tent surrounded by stuffed animals and soft cushions" },
  { src: "/images/event-sitter-with-child.jpg",    alt: "Event Sitter in a yellow dress helping a smiling young boy at a craft table" },
  { src: "/images/public-event-christmas-market.jpg", alt: "Children and parents doing Christmas crafts together at an outdoor market event" },
];

// Frame cycle from the redesign: hand-cut blob, rounded rectangle, circle.
const shapes = ["soft", "rounded", "circle", "rounded", "soft"] as const;

function frameStyle(i: number): CSSProperties {
  const shape = shapes[i % shapes.length];
  const ratio = shape === "circle" ? "1" : i % 2 ? "3 / 4" : "4 / 3";
  if (shape !== "soft") return { aspectRatio: ratio };
  const mask = `${softMasks[i % softMasks.length]} center / 100% 100% no-repeat`;
  return { aspectRatio: ratio, mask, WebkitMask: mask };
}

/** An endless, slowly drifting strip of photos. */
export default function GalleryMarquee() {
  return (
    <div className="gallery-marquee">
      <div className="gallery-marquee-track">
        {/* Two identical copies so the -50% translate loops seamlessly */}
        {[0, 1].map((copy) => (
          <ul key={copy} className="gallery-marquee-list" aria-hidden={copy === 1 ? true : undefined}>
            {images.map((image, i) => (
              <li key={image.src} className={`gallery-marquee-item s${i % 4} ${shapes[i % shapes.length]}`}>
                <div className="gallery-marquee-frame" style={frameStyle(i)}>
                  <Image
                    src={image.src}
                    alt={copy === 1 ? "" : image.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    sizes="(min-width: 900px) 26rem, 70vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
