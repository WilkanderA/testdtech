"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter",
    price: "$350",
    description: "Two dedicated videos cross-posted to TikTok and Instagram — perfect for first-time brand partnerships.",
    features: [
      "2 dedicated videos",
      "Cross-posted to TikTok & Instagram",
      "30-day usage rights",
      "Basic performance report",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$500",
    description: "Three videos with full cross-platform distribution to grow your brand reach.",
    features: [
      "3 dedicated videos",
      "TikTok, Instagram & YouTube",
      "60-day usage rights",
      "Detailed analytics report",
      "Story/reel cross-post",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$750",
    description: "Six videos across all platforms — ideal for sustained campaigns and product launches.",
    features: [
      "6 dedicated videos",
      "All platforms",
      "90-day usage rights",
      "Full analytics breakdown",
      "Story + short-form repurpose",
      "Priority scheduling",
    ],
    popular: false,
    cta: "Go Pro",
  },
  {
    name: "Enterprise",
    price: "$1,000",
    description: "10 videos for brands looking for maximum exposure and a long-term creator partnership.",
    features: [
      "10 dedicated videos",
      "All platforms",
      "Unlimited usage rights",
      "Dedicated account support",
      "Custom reporting",
      "Long-term partnership rates",
    ],
    popular: false,
    cta: "Contact Us",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-zinc-900/30">
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
            Partnership Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your{" "}
            <span className="text-gradient">package</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Flexible tiers built for brands of every size. All packages include
            authentic content creation and verified delivery.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all ${
                pkg.popular
                  ? "bg-violet-950/40 border-violet-500 glow-violet"
                  : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-violet-600 text-white text-xs px-3 py-0.5 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Most Popular
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">{pkg.name}</h3>
                <div className="text-3xl font-bold text-gradient mb-3">{pkg.price}</div>
                <p className="text-zinc-500 text-sm leading-relaxed">{pkg.description}</p>
              </div>

              <div className="space-y-2.5 flex-1 mb-6">
                {pkg.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={cn(
                  buttonVariants(),
                  "w-full justify-center",
                  pkg.popular
                    ? "bg-violet-600 hover:bg-violet-500 text-white border-transparent"
                    : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-transparent"
                )}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
