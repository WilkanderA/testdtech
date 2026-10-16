"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFx() {
  const orbRef       = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // no custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = -999, my = -999;
    let sx = -999, sy = -999;
    let started = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (!started) {
        started = true;
        sx = mx; sy = my;
        setReady(true);
      }
      const orb = orbRef.current;
      if (orb) { orb.style.left = mx + "px"; orb.style.top = my + "px"; }
    };
    window.addEventListener("mousemove", onMove);

    const onEnter = () => {
      const orb  = orbRef.current;
      const spot = spotlightRef.current;
      if (orb)  orb.style.opacity  = "1";
      if (spot) spot.style.opacity = "1";
    };
    const onLeave = () => {
      const orb  = orbRef.current;
      const spot = spotlightRef.current;
      if (orb)  orb.style.opacity  = "0";
      if (spot) spot.style.opacity = "0";
    };
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.documentElement.addEventListener("mouseleave", onLeave);

    let raf: number;
    const loop = () => {
      sx += (mx - sx) * 0.07;
      sy += (my - sy) * 0.07;
      const spot = spotlightRef.current;
      if (spot) { spot.style.left = sx + "px"; spot.style.top = sy + "px"; }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="fixed pointer-events-none z-9997"
        style={{
          width: 400, height: 400,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          opacity: 0,
        }}
      />
      {/* Orb */}
      <div
        ref={orbRef}
        className="fixed pointer-events-none z-9999"
        style={{
          width: 12, height: 12,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(139,92,246,0.8)",
          boxShadow: "0 0 14px 5px rgba(139,92,246,0.4)",
          opacity: 1,
        }}
      />
    </>
  );
}
