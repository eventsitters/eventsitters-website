"use client";

import { useEffect } from "react";
import gsap from "gsap";

// Restores the original GSAP timeline that was previously replicated as a CSS keyframe animation.
export default function RainbowAnimation() {
  useEffect(() => {
    const root = document.documentElement;
    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 4, ease: "none" } });
    tl.to(root, { "--rainbow": "#cab6d7" }) // blue → purple
      .to(root, { "--rainbow": "#fd6a4c" }) // purple → red
      .to(root, { "--rainbow": "#f2aebe" }) // red → pink
      .to(root, { "--rainbow": "#fcc951" }) // pink → yellow
      .to(root, { "--rainbow": "#94ccb8" }) // yellow → turquoise
      .to(root, { "--rainbow": "#849ed1" }); // turquoise → blue

    return () => { tl.kill(); };
  }, []);

  return null;
}
