"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#fd6a4c", // --red
  "#849ed1", // --blue
  "#94ccb8", // --turquoise
  "#fcc951", // --yellow
  "#f2aebe", // --pink
  "#cab6d7", // --purple
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number; rotationSpeed: number;
  color: string;
  w: number; h: number;
  isCircle: boolean;
  opacity: number;
}

export default function Confetti({ onDone }: { onDone?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const particles: Particle[] = [];
    const count = 140;

    for (let i = 0; i < count; i++) {
      // Fountain from centre-bottom — behind where the toast sits
      const x = W * 0.5 + (Math.random() - 0.5) * 60;
      // Full upward fan: standard math angles 20°–160° (y-up convention)
      const angleDeg = 20 + Math.random() * 140;
      const rad = (angleDeg * Math.PI) / 180;
      const speed = 11 + Math.random() * 18;

      particles.push({
        x, y: H,
        vx: Math.cos(rad) * speed,
        vy: -Math.sin(rad) * speed, // canvas y is inverted
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 14,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        w: 9 + Math.random() * 9,
        h: 4 + Math.random() * 5,
        isCircle: Math.random() > 0.65,
        opacity: 1,
      });
    }

    let raf: number;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      let alive = false;

      for (const p of particles) {
        p.vy += 0.38; // gravity
        p.vx *= 0.993; // light air resistance
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y > H + 20) p.opacity = Math.max(0, p.opacity - 0.03);
        if (p.opacity <= 0) continue;

        alive = true;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.isCircle) {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        ctx.restore();
      }

      if (alive) {
        raf = requestAnimationFrame(draw);
      } else {
        onDoneRef.current?.();
      }
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []); // runs once on mount — remount via `key` for each new burst

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9997,
      }}
    />
  );
}
