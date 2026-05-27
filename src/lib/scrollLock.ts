/**
 * Shared flag that SmoothAnchorLink sets while GSAP is animating a scroll.
 * Nav.tsx reads it to suppress the hide-on-scroll logic during programmatic scrolls,
 * preventing the nav from sliding away mid-animation and causing visual jitter.
 */

let _locked = false;

export function isScrollLocked(): boolean {
  return _locked;
}

export function lockScroll(ms: number): void {
  _locked = true;
  setTimeout(() => { _locked = false; }, ms + 100); // +100 ms buffer past animation end
}
