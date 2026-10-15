import Image from "next/image";

const brands = [
  { name: "Ajazz", file: "ajazz.png" },
  { name: "Arc Pulse", file: "arcpulse.png" },
  { name: "Aula", file: "aula.png" },
  { name: "Epomaker", file: "epomaker.png" },
  { name: "Fifine", file: "fifine.png" },
  { name: "Geekon", file: "geekomlogo.png" },
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
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Partnered with{" "}
          <span className="text-gradient">leading tech brands</span>
        </h2>
      </div>

      {/* Marquee wrapper */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 gap-12 animate-marquee">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center w-32 shrink-0"
            >
              <Image
                src={`/assets/${b.file}`}
                alt={b.name}
                width={120}
                height={48}
                className="object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0 gap-12 animate-marquee" aria-hidden>
          {brands.map((b) => (
            <div
              key={`${b.name}-dup`}
              className="flex items-center justify-center w-32 shrink-0"
            >
              <Image
                src={`/assets/${b.file}`}
                alt={b.name}
                width={120}
                height={48}
                className="object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
