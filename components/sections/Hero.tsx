"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function CountUp({ to }: { to: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M+`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K+`;
    return Math.round(v).toString();
  });

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
}

const socials = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@testd.tech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/testd.tech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC2d8J25W7T0qJpYzRDNOJzw",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    href: "https://a.co/d/0gfHngTD",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.047-.869-1.233-1.273-1.808-2.103-1.731 1.766-2.956 2.294-5.197 2.294-2.652 0-4.714-1.636-4.714-4.91 0-2.557 1.387-4.298 3.365-5.149 1.714-.756 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.124-.818-1.774-.818-1.206 0-2.282.618-2.545 1.897-.054.285-.261.567-.549.582l-3.076-.333c-.259-.056-.546-.266-.472-.662C5.57 2.387 8.55 1.5 11.23 1.5c1.37 0 3.162.365 4.243 1.403 1.37 1.284 1.239 2.995 1.239 4.858v4.402c0 1.323.549 1.903 1.066 2.618.181.253.221.555-.01.744l-2.624 2.27zm3.559 1.988C18.733 21.16 15.515 22.5 12.69 22.5c-3.949 0-7.52-1.46-10.218-3.892-.212-.192-.023-.454.232-.305 2.906 1.69 6.498 2.707 10.209 2.707 2.502 0 5.255-.519 7.785-1.594.381-.163.701.25.005.367zm.921-1.049c-.289-.372-1.92-.176-2.651-.089-.223.027-.257-.166-.057-.307 1.299-.913 3.429-.649 3.677-.344.249.309-.065 2.441-1.285 3.459-.188.157-.367.073-.283-.134.275-.685.888-2.214.599-2.585z" />
      </svg>
    ),
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/TestDTech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.511 5.853l4.005-4.613 2.382 2.369-4.395 4.363h6.222v3.366h-6.241l4.414 4.363-2.382 2.369-4.935-4.949-4.934 4.949-2.382-2.369 4.414-4.363H2.874V7.972h6.222L4.701 3.609l2.382-2.369 4.005 4.613V0h3.366v5.853zM10.145 16.17h3.366v7.83h-3.366z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — circuit board fade */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Fade the circuit board out toward center so text stays clean */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, #09090b 30%, transparent 100%)' }} />
        {/* Violet glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pb-24">
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 w-48 h-48 rounded-full border-2 border-violet-500/50 glow-violet-sm overflow-hidden"
        >
          <Image
            src="/assets/profilepic.PNG"
            alt="Test D Tech"
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        {/* Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-(family-name:--font-orbitron)"
        >
          TEST D{" "}
          <span className="text-gradient">TECH</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10 font-[\'Courier_New\',monospace]"
        >
          Authentic Tech Content
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3 md:gap-5 mb-12 flex-wrap"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-violet-400 hover:border-violet-500 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-zinc-900 border border-zinc-800">
            <span className="text-2xl md:text-3xl font-bold text-gradient"><CountUp to={4000} /></span>
            <span className="text-zinc-500 text-xs mt-1 text-center px-2">Total Followers</span>
          </div>
          <div className="flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-zinc-900 border border-zinc-800">
            <span className="text-2xl md:text-3xl font-bold text-gradient"><CountUp to={14500000} /></span>
            <span className="text-zinc-500 text-xs mt-1 text-center px-2">Total Views</span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-violet-600 hover:bg-violet-500 text-white glow-violet-sm px-8 md:px-14 py-5 md:py-7 text-base md:text-lg border-transparent w-full sm:w-auto"
            )}
          >
            <Mail className="w-4 h-4 mr-2" />
            Let's Work Together
          </a>
          <a
            href="#packages"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-zinc-700 hover:border-violet-500 hover:text-violet-400 text-zinc-300 bg-transparent px-8 md:px-10 py-5 md:py-7 text-base md:text-lg w-full sm:w-auto"
            )}
          >
            View Packages
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
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
