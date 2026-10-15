"use client";

import { motion } from "framer-motion";
import { Users, MapPin, BarChart2 } from "lucide-react";

const demographics = [
  {
    icon: Users,
    label: "Primary Age Group",
    value: "18–34",
    sub: "Core audience",
    bar: 71,
  },
  {
    icon: Users,
    label: "Male Audience",
    value: "—%",
    sub: "Gender split",
    bar: 0,
  },
  {
    icon: MapPin,
    label: "Top Country",
    value: "United States",
    sub: "Geographic reach",
    bar: 0,
  },
  {
    icon: BarChart2,
    label: "US Viewership",
    value: "—%",
    sub: "of total views",
    bar: 0,
  },
];

const geoList = [
  { country: "United States", pct: "—%" },
  { country: "United Kingdom", pct: "—%" },
  { country: "Canada", pct: "—%" },
  { country: "Australia", pct: "—%" },
  { country: "Other", pct: "—%" },
];

export default function Audience() {
  return (
    <section id="audience" className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
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
            Demographics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Know the{" "}
            <span className="text-gradient">audience</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Engaged, tech-savvy consumers — primarily young adults with high
            purchase intent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {demographics.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800"
              >
                <d.icon className="w-5 h-5 text-violet-400 mb-3" />
                <div className="text-2xl font-bold mb-1">{d.value}</div>
                <div className="text-zinc-500 text-xs">{d.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Geo breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
          >
            <h3 className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-6">
              Top Regions
            </h3>
            <div className="space-y-4">
              {geoList.map((g, i) => (
                <div key={g.country}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-zinc-300">{g.country}</span>
                    <span className="text-violet-400 font-medium">{g.pct}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: i === 0 ? "85%" : `${20 - i * 4}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
