import { useEffect } from "react";

/**
 * Sets --modal-height on the root element to the real visible viewport height.
 * On iOS Safari the browser toolbar sits outside the layout viewport, so
 * 100dvh can still be taller than what's actually visible. visualViewport.height
 * gives the true visible height and is the only reliable cross-browser fix.
 */
export function useModalHeight(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const update = () => {
      const h = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty("--modal-height", `${h}px`);
    };

    update();
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);

    return () => {
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
      document.documentElement.style.removeProperty("--modal-height");
    };
  }, [active]);
}
