const stats = [
  { value: "4K+", label: "Total Followers" },
  { value: "3", label: "Platforms" },
  { value: "4K+", label: "Combined Reach" },
  { value: "100%", label: "Authentic Content" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Analytics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By the{" "}
            <span className="text-gradient">numbers</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Engaged tech audience across TikTok, Instagram, and YouTube.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
