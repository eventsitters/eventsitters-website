/**
 * Dynamically updates <meta name="theme-color"> so the browser status bar
 * matches the currently open overlay (mobile menu, modals).
 *
 * Uses hex literals because CSS custom properties can't be used as meta content.
 * Next.js renders the tag as a React 19 HostHoistable fiber (tag 26), which
 * means it is tracked in React's fiber tree. DO NOT remove it from the DOM
 * directly — doing so leaves React holding a stale stateNode with parentNode=null,
 * which crashes commitDeletionEffectsOnFiber on the next navigation:
 *   `finishedRoot.parentNode.removeChild(finishedRoot)` → TypeError
 *
 * Instead, update the content attribute in-place so the element stays in the
 * DOM and React's fiber reference remains valid.
 */

export const THEME_COLORS: Record<string, string> = {
  "pale-blue":      "#ebeff8",
  "pale-yellow":    "#fff6e3",
  "pale-purple":    "#f7f3f9",
  "pale-turquoise": "#eef7f4",
  "pale-red":       "#ffe7e2",
  "pale-pink":      "#fdf2f5",
  "white":          "#ffffff",
};

const DEFAULT = "transparent";

export function setThemeColor(colorKey: string): void {
  const content = THEME_COLORS[colorKey] ?? colorKey;
  // Update the existing element in-place — never remove it.
  // React 19 tracks this element as a HostHoistable fiber; removing it
  // externally orphans the fiber and causes a null.removeChild crash on
  // the next navigation commit.
  const existing = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (existing) {
    existing.setAttribute("content", content);
  } else {
    // Fallback: element not yet in DOM (e.g. before hydration) — create it.
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = content;
    document.head.appendChild(meta);
  }
}

export function resetThemeColor(): void {
  setThemeColor(DEFAULT);
}
