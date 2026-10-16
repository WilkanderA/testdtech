"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";

const videos = [
  {
    title: "Add your video title here",
    platform: "Instagram",
    href: "https://www.instagram.com/reel/DecHQ8MOUd6/",
    thumbnail: "/assets/vid1.PNG",
  },
  {
    title: "Add your video title here",
    platform: "TikTok",
    href: "https://www.tiktok.com/@geekom.usaminipc/video/7672669606590385439?lang=en",
    thumbnail: "/assets/vid6.jpg",
  },
  {
    title: "Add your video title here",
    platform: "TikTok",
    href: "https://www.tiktok.com/@geekom.usaminipc/video/7673070958084771103?lang=en",
    thumbnail: "/assets/vid5.PNG",
  },
  {
    title: "Add your video title here",
    platform: "Instagram",
    href: "https://www.instagram.com/reel/DeacB61u2v8/",
    thumbnail: "/assets/vid2.jpg",
  },
  {
    title: "Add your video title here",
    platform: "TikTok",
    href: "https://www.tiktok.com/@testd.tech/video/7671337724384726285",
    thumbnail: "/assets/vid4.PNG",
  },
  {
    title: "Add your video title here",
    platform: "TikTok",
    href: "https://www.tiktok.com/@testd.tech/video/7690620258729741581",
    thumbnail: "/assets/vid3.PNG",
  },
];

const platformIcons: Record<string, React.ReactNode> = {
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

const platformColors: Record<string, string> = {
  TikTok: "bg-black/60 text-white",
  Instagram: "bg-black/60 text-white",
  YouTube: "bg-black/60 text-white",
};

export default function FeaturedContent() {
  return (
    <section id="content" className="py-24 px-6 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-gradient">content</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A selection of recent videos — click any to watch.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-500/50 transition-colors bg-zinc-900 aspect-[9/16] flex flex-col"
            >
              {/* Thumbnail or placeholder */}
              <div className="flex-1 bg-zinc-800 flex items-center justify-center relative">
                {video.thumbnail ? (
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-zinc-700">
                    <Play className="w-8 h-8" />
                    <span className="text-xs">Add thumbnail</span>
                  </div>
                )}
                {/* Platform icon — top right corner */}
                <div className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center ${platformColors[video.platform]}`}>
                  {platformIcons[video.platform]}
                </div>

                {/* Play overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/20 transition-all flex items-center justify-center">
                    <Play className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
