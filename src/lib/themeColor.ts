/**
 * Dynamically updates <meta name="theme-color"> so the browser status bar
 * matches the currently open overlay (mobile menu, modals).
 *
 * Uses hex literals because CSS custom properties can't be used as meta content.
 * Next.js renders the tag statically (from layout.tsx viewport export) so
 * querySelector always finds an existing element to update.
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

const DEFAULT = "#ffffff";

export function setThemeColor(colorKey: string): void {
  const content = THEME_COLORS[colorKey] ?? colorKey;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = content;
}

export function resetThemeColor(): void {
  setThemeColor(DEFAULT);
}
