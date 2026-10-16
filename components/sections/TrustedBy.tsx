"use client";

import Image from "next/image";

const brands = [
  { name: "Ajazz", file: "ajazz.png" },
  { name: "Arc Pulse", file: "arcpulse.png" },
  { name: "Aula", file: "aula.png" },
  { name: "Epomaker", file: "epomaker.png" },
  { name: "Fifine", file: "fifine.png" },
  { name: "Geekon", file: "Geekomlogo.png" },
  { name: "Gravastar", file: "gravastar.png" },
  { name: "HyperX", file: "hyperx.png" },
  { name: "Insta360", file: "insta360logo.png" },
  { name: "KNF Concept", file: "knfconcept.png" },
  { name: "Nothing", file: "nothinglogo.png" },
  { name: "Shokz", file: "shokz.png" },
  { name: "Turtle Beach", file: "turtlebeach.png" },
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
                width={120}
                height={48}
                className="object-contain invert brightness-200 opacity-80 hover:opacity-100 transition-opacity"
                style={{ width: 120, height: 48 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
