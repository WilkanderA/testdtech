"use client";

import Image from "next/image";

const brands = [
  { name: "Ajazz", file: "ajazz.png", scale: 1.3 },
  { name: "Arc Pulse", file: "arcpulse.png", scale: 1 },
  { name: "Aula", file: "aula.png", scale: 1 },
  { name: "Epomaker", file: "epomaker.png", scale: 1 },
  { name: "Fifine", file: "fifine.png", scale: 1.3 },
  { name: "Geekon", file: "geekomlogo1.png", scale: 1 },
  { name: "Gravastar", file: "gravastar.png", scale: 1 },
  { name: "HyperX", file: "hyperx.png", scale: 1 },
  { name: "Insta360", file: "insta360logo.png", scale: 1.3 },
  { name: "KNF Concept", file: "knfconcept.png", scale: 1 },
  { name: "Nothing", file: "nothinglogo.png", scale: 1.9 },
  { name: "Shokz", file: "shokz.png", scale: 0.7 },
  { name: "Turtle Beach", file: "turtlebeach.png", scale: 1 },
];

export default function TrustedBy() {
  return (
    <section className="relative z-10 py-16 overflow-hidden bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Partnered with leading {" "}
          <span className="text-gradient">tech brands</span>
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Two identical tracks side by side — animation moves exactly -50% so second half = first half */}
        <div className="flex w-max animate-marquee" style={{ willChange: "transform", transform: "translateZ(0)" }}>
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-6 shrink-0"
            >
              <Image
                src={`/assets/${b.file}`}
                alt={b.name}
                width={160}
                height={60}
                className="invert brightness-200 opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: 44, width: "auto", maxWidth: 140, objectFit: "contain", transform: `scale(${b.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
