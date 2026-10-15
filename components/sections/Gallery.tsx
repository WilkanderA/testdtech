"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  aspect: i % 3 === 0 ? "tall" : "wide",
}));

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6">
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
            Content
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Production{" "}
            <span className="text-gradient">quality</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Every video is shot in 4K with deliberate lighting and editing — content
            your brand will be proud to be featured in.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`break-inside-avoid rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center ${
                item.aspect === "tall" ? "h-72" : "h-48"
              }`}
            >
              <div className="flex flex-col items-center gap-2 text-zinc-700">
                <ImageIcon className="w-8 h-8" />
                <span className="text-xs">Add image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
