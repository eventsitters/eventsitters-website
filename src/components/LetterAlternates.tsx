"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Targets every element that renders in Loose Hand Luke.
// Excludes .super-heading — its CSS letter-spacing breaks when characters
// are split into individual spans (each span gets spacing applied, not just
// between characters).
const SELECTOR = [
  ".title-hero",
  ".headline-large",
  ".headline-medium",
  ".headline-small",
  ".caption-large",
].join(",");

// FNV-1a hash — deterministic: same text + char position always produces the
// same result, so the alternates don't flicker between renders or navigations.
function shouldAlt(seed: string, idx: number): boolean {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  h ^= Math.imul(idx + 1, 0x9e3779b9) >>> 0;
  h >>>= 0;
  // ~50 % of characters get the alternate glyph
  return (h & 1) === 0;
}

// Walk only TEXT nodes inside el, skipping whitespace. Wraps each visible
// character in a <span> with or without font-feature-settings: "aalt" 1.
function applyAlts(el: HTMLElement, seed: string): void {
  let charIdx = 0;

  function walk(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text) return;
      const frag = document.createDocumentFragment();
      for (const char of text) {
        if (/\s/.test(char)) {
          frag.appendChild(document.createTextNode(char));
        } else {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline";
          if (shouldAlt(seed, charIdx)) {
            span.style.fontFeatureSettings = '"aalt" 1';
          }
          frag.appendChild(span);
          charIdx++;
        }
      }
      node.parentNode!.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      Array.from(node.childNodes).forEach(walk);
    }
  }

  Array.from(el.childNodes).forEach(walk);
}

export default function LetterAlternates() {
  const pathname = usePathname();

  useEffect(() => {
    const originals = new Map<HTMLElement, string>();

    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      const seed = el.textContent ?? "";
      originals.set(el, el.innerHTML);
      applyAlts(el, seed);
    });

    return () => {
      originals.forEach((html, el) => {
        el.innerHTML = html;
      });
    };
  }, [pathname]);

  return null;
}
