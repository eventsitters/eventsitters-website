"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox, { type GalleryImage } from "./GalleryLightbox";

const images: GalleryImage[] = [
  { src: "/images/arts-crafts-santa.jpg",         alt: "Child carefully colouring a detailed illustration at an Event Sitters activity station" },
  { src: "/images/toys-blocks-pyramid.jpg",        alt: "Rainbow-coloured wooden building blocks stacked in a pyramid in front of a cosy play tent with bunting flags" },
  { src: "/images/arts-crafts-christmas-tree.jpg", alt: "Child colouring a Christmas tree illustration with a green marker at an Event Sitters craft session" },
  { src: "/images/public-event-santa-crafts.jpg",  alt: "Children in Santa hats doing arts and crafts at an outdoor public event, with Event Sitters signage visible" },
  { src: "/images/toys-blocks-building.jpg",       alt: "Young boy in a cap concentrating on building a tower with colourful wooden blocks" },
  { src: "/images/cozy-corner-tent.jpg",           alt: "Young boy relaxing inside a cosy play tent surrounded by stuffed animals and soft cushions" },
  { src: "/images/event-sitter-with-child.jpg",    alt: "Event Sitter in a yellow dress helping a smiling young boy at a craft table" },
  { src: "/images/public-event-christmas-market.jpg", alt: "Children and parents doing Christmas crafts together at an outdoor market event" },
];

const cells = [
  { cls: "one",   span: "gallery-cell-3" },
  { cls: "two",   span: "gallery-cell-6" },
  { cls: "three", span: "gallery-cell-3" },
  { cls: "four",  span: "gallery-cell-4" },
  { cls: "five",  span: "gallery-cell-4" },
  { cls: "six",   span: "gallery-cell-4" },
  { cls: "seven", span: "gallery-cell-7" },
  { cls: "eight", span: "gallery-cell-5" },
];

export default function GalleryGrid() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="w-layout-layout gallery wf-layout-layout">
        {cells.map((cell, i) => (
          <div key={cell.cls} className={`w-layout-cell ${cell.span}`}>
            <button
              type="button"
              className={`gallery-image-container ${cell.cls} gallery-lightbox-trigger`}
              onClick={() => setActiveImage(images[i])}
              aria-label={`View image: ${images[i].alt}`}
            >
              <Image
                src={images[i].src}
                alt={images[i].alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </button>
          </div>
        ))}
      </div>

      <GalleryLightbox
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </>
  );
}
