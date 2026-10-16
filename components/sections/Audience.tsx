"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, MapPin, BarChart2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full rounded-2xl overflow-hidden"
        >
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto"
            unoptimized
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const demographics = [
  {
    icon: Users,
    label: "Male Audience",
    value: "68%",
    sub: "Gender split",
  },
  {
    icon: Users,
    label: "Core Age Group",
    value: "18–34",
    sub: "86.1% of audience",
  },
  {
    icon: MapPin,
    label: "Top Country",
    value: "United States",
    sub: "72.3% of viewers",
  },
  {
    icon: BarChart2,
    label: "English-Speaking",
    value: "76.5%",
    sub: "US + UK + Canada",
  },
];

const ageGroups = [
  { label: "18–24", pct: 47.7 },
  { label: "25–34", pct: 38.4 },
  { label: "35–44", pct: 8.7 },
  { label: "45–54", pct: 4.1 },
  { label: "55+", pct: 1.1 },
];

const geoList = [
  { country: "United States", pct: "72.3%" },
  { country: "Netherlands", pct: "2.9%" },
  { country: "United Kingdom", pct: "2.8%" },
  { country: "Brazil", pct: "1.5%" },
  { country: "Canada", pct: "1.4%" },
];

export default function Audience() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {lightbox && (
        <Lightbox
          src={lightbox}
          alt="TikTok analytics"
          onClose={() => setLightbox(null)}
        />
      )}
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

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Age breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
          >
            <h3 className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-6">
              Age Groups
            </h3>
            <div className="space-y-4">
              {ageGroups.map((a, i) => (
                <div key={a.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-zinc-300">{a.label}</span>
                    <span className="text-violet-400 font-medium">{a.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full rounded-full bg-linear-to-r from-violet-600 to-violet-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

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
                      whileInView={{ width: g.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full rounded-full bg-linear-to-r from-violet-600 to-violet-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Analytics screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-sm font-medium text-zinc-400 tracking-widest uppercase mb-6 text-center">
            TikTok Analytics
          </h3>
          <div className="flex justify-center gap-8">
            {["ttanalytics1.PNG", "ttanalytics2.PNG", "ttanalytics3.PNG"].map((file, i) => (
              <motion.button
                key={file}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setLightbox(`/assets/${file}`)}
                className="w-36 rounded-xl overflow-hidden border border-zinc-800 hover:border-violet-500 transition-colors cursor-pointer shrink-0"
              >
                <Image
                  src={`/assets/${file}`}
                  alt={`TikTok analytics ${i + 1}`}
                  width={200}
                  height={350}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
