"use client";

import { motion } from "framer-motion";
import { Paintbrush, RefreshCw, Clock, Film, BarChart2, Shield } from "lucide-react";

const items = [
  {
    icon: Paintbrush,
    title: "Full Creative Control",
    body: "Content is produced in my authentic style. Send your product and any brief — I handle the rest.",
  },
  {
    icon: RefreshCw,
    title: "Revisions",
    body: "1 revision included. Additional revisions available as an add-on at $50 per revision.",
  },
  {
    icon: Clock,
    title: "Turnaround",
    body: "~7 business days from product receipt to first draft delivery.",
  },
  {
    icon: Film,
    title: "Raw Footage",
    body: "Not included by default. Available as an add-on upon request.",
  },
  {
    icon: BarChart2,
    title: "Campaign Metrics",
    body: "Post-campaign analytics report provided. Required for collaborations not through TikTok Shop.",
  },
  {
    icon: Shield,
    title: "Usage Rights",
    body: "Growth, Pro, and Enterprise tiers includes organic usage rights. Starter tier does not include usage rights. Extensions available based on sales performance, especially for Meta/TikTok ads.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How partnerships{" "}
            <span className="text-gradient">work</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Everything you need to know before we get started.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-violet-500/30 bg-violet-500/5"
        >
          <div>
            <p className="font-semibold text-zinc-100">Need something custom?</p>
            <p className="text-zinc-400 text-sm mt-1">Long-term partnerships and bulk deals available.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors whitespace-nowrap"
          >
            Contact for Custom Package →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
