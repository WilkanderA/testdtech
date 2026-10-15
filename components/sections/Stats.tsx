"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const platforms = [
  {
    name: "TikTok",
    followers: "—",
    views: "—",
    metric: "Monthly Views",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "YouTube",
    followers: "—",
    views: "—",
    metric: "Monthly Views",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Instagram",
    followers: "—",
    views: "—",
    metric: "Monthly Reach",
    color: "from-violet-500 to-purple-500",
  },
];

const topStats = [
  { value: "—", label: "Total Followers" },
  { value: "—", label: "Monthly Views" },
  { value: "—", label: "Avg. Engagement Rate" },
  { value: "—", label: "Platforms" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Analytics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By the{" "}
            <span className="text-gradient">numbers</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Real-time verified metrics across all platforms.
          </p>
        </motion.div>

        {/* Top-line stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {topStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Per-platform cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/40 transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} mb-4 flex items-center justify-center`}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{p.name}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-sm">Followers</span>
                  <span className="text-zinc-200 font-semibold">{p.followers}</span>
                </div>
                <div className="h-px bg-zinc-800" />
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-sm">{p.metric}</span>
                  <span className="text-zinc-200 font-semibold">{p.views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
