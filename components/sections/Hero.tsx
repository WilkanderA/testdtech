"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socials = [
  { name: "TikTok", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Instagram", href: "#" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-28 h-28 rounded-full bg-zinc-800 border-2 border-violet-500/50 glow-violet-sm flex items-center justify-center text-3xl font-bold text-gradient"
        >
          DT
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Test D{" "}
          <span className="text-gradient">Tech</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          Authentic tech content — reviews, peripherals, and gear across
          TikTok, YouTube &amp; Instagram.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-600 hover:bg-violet-500 text-white glow-violet-sm px-8 border-transparent"
            )}
          >
            <Mail className="w-4 h-4 mr-2" />
            Partner With Us
          </a>
          <a
            href="#packages"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-zinc-700 hover:border-violet-500 hover:text-violet-400 text-zinc-300 bg-transparent"
            )}
          >
            View Packages
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="text-zinc-500 hover:text-violet-400 transition-colors text-sm font-medium"
            >
              {s.name}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-linear-to-b from-violet-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
