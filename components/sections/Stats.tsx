import { TrendingUp } from "lucide-react";

interface PlatformCounts {
  tiktok: number | null;
  instagram: number | null;
  youtube: number | null;
}

async function getStats(): Promise<PlatformCounts> {
  try {
    // During build, use absolute URL via env; in dev relative works
    const base =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
    const res = await fetch(`${base}/api/stats`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { tiktok: null, instagram: null, youtube: null };
    return res.json();
  } catch {
    return { tiktok: null, instagram: null, youtube: null };
  }
}

function formatCount(n: number | null): string {
  if (n === null) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export default async function Stats() {
  const counts = await getStats();

  const total =
    (counts.tiktok ?? 0) + (counts.instagram ?? 0) + (counts.youtube ?? 0);

  const topStats = [
    {
      value: formatCount(total || null),
      label: "Total Followers",
    },
    { value: formatCount(counts.tiktok), label: "TikTok Followers" },
    { value: formatCount(counts.youtube), label: "YouTube Subscribers" },
    { value: formatCount(counts.instagram), label: "Instagram Followers" },
  ];

  const platforms = [
    {
      name: "TikTok",
      followers: formatCount(counts.tiktok),
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "YouTube",
      followers: formatCount(counts.youtube),
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Instagram",
      followers: formatCount(counts.instagram),
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="stats" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Analytics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By the{" "}
            <span className="text-gradient">numbers</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Live follower counts updated daily across all platforms.
          </p>
        </div>

        {/* Top-line stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {topStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Per-platform cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/40 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-linear-to-br ${p.color} mb-4 flex items-center justify-center`}
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{p.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm">Followers</span>
                <span className="text-zinc-200 font-semibold text-lg">
                  {p.followers}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
