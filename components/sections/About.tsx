"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Hands-on testing of the latest tech, peripherals, and gear",
  "Authentic, unsponsored opinions that audiences trust",
  "Multi-platform presence across TikTok, YouTube & Instagram",
  "Consistent, high-quality production with 4K setup showcase",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text side */}
          <div>
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Real reviews.{" "}
              <span className="text-gradient">Real results.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Test D Tech is a tech-focused content brand built on genuine
              testing and honest opinions. From gaming peripherals to everyday
              gadgets, every piece of content is crafted to help an engaged
              audience make smarter buying decisions.
            </p>
            <p className="text-zinc-500 text-base leading-relaxed">
              Brand partnerships are treated as collaborations, not placements —
              your product gets the same thorough treatment our audience expects.
            </p>
          </div>

          {/* Highlights side */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800"
              >
                <CheckCircle2 className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
