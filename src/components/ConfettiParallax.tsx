'use client';

import { useEffect, useRef } from 'react';

export interface ElConfig {
  selector: string;
  mx?: number; // max translateX at full mouse X deviation from centre
  my?: number; // max translateY at full mouse Y deviation from centre
  sx?: number; // max translateX at 100% scroll progress
  sy?: number; // max translateY at 100% scroll progress
}

export default function ConfettiParallax({ els }: { els: readonly ElConfig[] }) {
  const elsRef = useRef(els);

  useEffect(() => {
    const configs = elsRef.current;

    // Instantaneous targets driven by events
    const mouseX = new Map<string, number>();
    const mouseY = new Map<string, number>();
    const scrollX = new Map<string, number>();
    const scrollY = new Map<string, number>();

    // Spring-interpolated current values
    const curX = new Map<string, number>();
    const curY = new Map<string, number>();

    for (const cfg of configs) {
      mouseX.set(cfg.selector, 0);
      mouseY.set(cfg.selector, 0);
      scrollX.set(cfg.selector, 0);
      scrollY.set(cfg.selector, 0);
      curX.set(cfg.selector, 0);
      curY.set(cfg.selector, 0);
    }

    function getNodes(sel: string) {
      return document.querySelectorAll<HTMLElement>(sel);
    }

    // Remove CSS transitions — rAF handles smoothing instead
    for (const cfg of configs) {
      for (const el of getNodes(cfg.selector)) {
        el.style.transition = 'none';
        el.style.willChange = 'transform';
      }
    }

    // How quickly each frame closes the gap to target (0–1).
    // ~0.07 gives a natural spring feel without overshooting.
    const LERP = 0.07;

    let rafId = 0;
    let active = true;

    function tick() {
      if (!active) return;
      let dirty = false;

      for (const cfg of configs) {
        const tx = (mouseX.get(cfg.selector) ?? 0) + (scrollX.get(cfg.selector) ?? 0);
        const ty = (mouseY.get(cfg.selector) ?? 0) + (scrollY.get(cfg.selector) ?? 0);
        const cx = curX.get(cfg.selector) ?? 0;
        const cy = curY.get(cfg.selector) ?? 0;

        const nx = cx + (tx - cx) * LERP;
        const ny = cy + (ty - cy) * LERP;

        if (Math.abs(nx - cx) > 0.005 || Math.abs(ny - cy) > 0.005) dirty = true;

        curX.set(cfg.selector, nx);
        curY.set(cfg.selector, ny);

        // Subtle rotation: circles tilt slightly in the direction they drift
        const rot = nx * 0.04;

        for (const el of getNodes(cfg.selector)) {
          el.style.transform = `translate(${nx}px, ${ny}px) rotate(${rot}deg)`;
        }
      }

      // Keep the loop alive only while values are still moving
      if (dirty) rafId = requestAnimationFrame(tick);
      else rafId = 0;
    }

    function wake() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    function onMouseMove(e: MouseEvent) {
      // Map cursor to ±1 relative to viewport centre so movement is bidirectional
      const rx = (e.clientX / window.innerWidth  - 0.5) * 2;
      const ry = (e.clientY / window.innerHeight - 0.5) * 2;
      for (const cfg of configs) {
        if (cfg.mx != null) mouseX.set(cfg.selector, cfg.mx * rx);
        if (cfg.my != null) mouseY.set(cfg.selector, cfg.my * ry);
      }
      wake();
    }

    function onMouseLeave() {
      // Float everything back to neutral
      for (const cfg of configs) {
        mouseX.set(cfg.selector, 0);
        mouseY.set(cfg.selector, 0);
      }
      wake();
    }

    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      for (const cfg of configs) {
        if (cfg.sx != null) scrollX.set(cfg.selector, cfg.sx * p);
        if (cfg.sy != null) scrollY.set(cfg.selector, cfg.sy * p);
      }
      wake();
    }

    // Disable all animations on mobile viewports. We check two things:
    // 1. Viewport width ≥ 768px — catches DevTools emulation where the host mouse
    //    still matches (hover: hover) even when viewing a narrow simulated screen.
    // 2. Pointer capability — catches real touch devices at any width.
    // Both must be true for any interactions to run.
    const desktopMQ  = window.matchMedia('(min-width: 768px)');
    const pointerMQ  = window.matchMedia('(hover: hover) and (pointer: fine)');

    const isDesktop = () => desktopMQ.matches && pointerMQ.matches;

    function attachOrDetach() {
      if (isDesktop()) {
        window.addEventListener('mousemove',    onMouseMove,  { passive: true });
        document.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('scroll',       onScroll,     { passive: true });
      } else {
        window.removeEventListener('mousemove',    onMouseMove);
        document.removeEventListener('mouseleave', onMouseLeave);
        window.removeEventListener('scroll',       onScroll);
        // Reset all offsets so circles return to neutral on mobile
        for (const cfg of configs) {
          mouseX.set(cfg.selector, 0);
          mouseY.set(cfg.selector, 0);
          scrollX.set(cfg.selector, 0);
          scrollY.set(cfg.selector, 0);
        }
        wake();
      }
    }

    attachOrDetach();
    desktopMQ.addEventListener('change', attachOrDetach);
    pointerMQ.addEventListener('change', attachOrDetach);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove',    onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll',       onScroll);
      desktopMQ.removeEventListener('change', attachOrDetach);
      pointerMQ.removeEventListener('change', attachOrDetach);
      for (const cfg of configs) {
        for (const el of getNodes(cfg.selector)) {
          el.style.transform = '';
          el.style.willChange = '';
        }
      }
    };
  }, []);

  return null;
}
