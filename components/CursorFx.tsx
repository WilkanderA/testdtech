"use client";

import { useEffect, useRef } from "react";

export default function CursorFx() {
  const orbRef       = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // no custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const orb  = orbRef.current;
    const spot = spotlightRef.current;
    if (!orb || !spot) return;

    let mx = -999, my = -999;
    let sx = -999, sy = -999;
    let hasMoved = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      orb.style.left = mx + "px";
      orb.style.top  = my + "px";

      if (!hasMoved) {
        hasMoved = true;
        sx = mx; sy = my;
        orb.style.opacity  = "1";
        spot.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", onMove);

    const onOver = () => {};
    window.addEventListener("mouseover", onOver);

    let raf: number;
    const loop = () => {
      sx += (mx - sx) * 0.07;
      sy += (my - sy) * 0.07;
      spot.style.left = sx + "px";
      spot.style.top  = sy + "px";
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

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
      {/* Orb — always visible, snaps to cursor */}
      <div
        ref={orbRef}
        className="fixed pointer-events-none z-9999"
        style={{
          width: 12, height: 12,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(139,92,246,0.8)",
          boxShadow: "0 0 14px 5px rgba(139,92,246,0.4)",
          opacity: 0,
        }}
      />
    </>
  );
}
