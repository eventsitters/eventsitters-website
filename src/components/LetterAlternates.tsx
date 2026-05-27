"use client";

import { useLayoutEffect } from "react";
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

// Applies alternates to an element without removing any existing DOM nodes.
//
// CRITICAL: React 19 tracks text nodes in its fiber tree by reference. If we
// remove a text node (via replaceChild / innerHTML =), React's fiber holds a
// stale reference. When React commits a navigation it calls
//   textNode.parentNode.removeChild(textNode)
// on every fiber it's deleting — but the detached node has parentNode === null,
// causing "Cannot read properties of null (reading 'removeChild')" and aborting
// the navigation before the new page can render.
//
// Fix: keep every text node in the DOM (React can still find it). Instead we
//   1. Insert a <span> with character sub-spans *before* the text node.
//   2. Clear the text node's content so the text doesn't render twice.
// Cleanup reverses both operations, leaving the DOM pristine for React.
function applyAlts(el: HTMLElement, seed: string): () => void {
  const insertedWrappers: HTMLElement[] = [];
  const clearedTextNodes: Array<{ node: Text; text: string }> = [];
  let charIdx = 0;

  function walk(node: Node): void {
    if (node.nodeType === Node.TEXT_NODE) {
      const textNode = node as Text;
      const text = textNode.textContent ?? "";
      if (!text.trim()) return; // skip pure-whitespace nodes

      // Build a wrapper span with per-character sub-spans.
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline";

      for (const char of text) {
        if (/\s/.test(char)) {
          wrapper.appendChild(document.createTextNode(char));
        } else {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline";
          if (shouldAlt(seed, charIdx)) {
            span.style.fontFeatureSettings = '"aalt" 1';
          }
          wrapper.appendChild(span);
          charIdx++;
        }
      }

      // Insert the wrapper BEFORE the text node — keeps the text node in the
      // DOM so React's fiber reference remains valid.
      textNode.parentNode!.insertBefore(wrapper, textNode);
      insertedWrappers.push(wrapper);

      // Empty the text node so it doesn't render duplicate text.
      clearedTextNodes.push({ node: textNode, text });
      textNode.textContent = "";
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Snapshot childNodes before walking so mid-walk insertions don't loop.
      Array.from(node.childNodes).forEach(walk);
    }
  }

  Array.from(el.childNodes).forEach(walk);

  return () => {
    // Remove the inserted wrappers (no-op if the element was already removed
    // from the DOM by React — .remove() on a detached node is safe).
    insertedWrappers.forEach(span => span.remove());
    // Restore text node content (no-op on detached nodes).
    clearedTextNodes.forEach(({ node, text }) => { node.textContent = text; });
  };
}

export default function LetterAlternates() {
  const pathname = usePathname();

  // useLayoutEffect runs synchronously after React commits to the DOM but
  // before the browser paints — alternates are applied in the same frame as
  // the new page render, preventing a flash of un-alternated headings.
  useLayoutEffect(() => {
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
      const seed = el.textContent ?? "";
      cleanups.push(applyAlts(el, seed));
    });

    return () => cleanups.forEach(fn => fn());
  }, [pathname]);

  return null;
}
