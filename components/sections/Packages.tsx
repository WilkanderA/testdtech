"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter",
    price: "$400",
    perVideo: "$200/video",
    videos: "2 Videos",
    features: [
      "2 Short-form videos",
      "Cross-posted to TikTok & Instagram",
      "Product showcase format",
      "Link in bio placement",
    ],
    rights: "30 days usage rights",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$550",
    perVideo: "$183/video",
    videos: "3 Videos",
    features: [
      "3 Short-form videos",
      "TikTok, Instagram & YouTube",
      "Product showcase format",
      "Story/reel cross-post",
      "Link in bio placement",
    ],
    rights: "60 days usage rights",
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$850",
    perVideo: "$170/video",
    videos: "5 Videos",
    features: [
      "5 Short-form videos",
      "All platforms",
      "Product showcase format",
      "Story + short-form repurpose",
      "Link in bio placement",
      "Priority scheduling",
    ],
    rights: "90 days usage rights",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$1,500",
    perVideo: "$150/video",
    videos: "10 Videos",
    features: [
      "10 Short-form videos",
      "All platforms",
      "Product showcase format",
      "Story + short-form repurpose",
      "Link in bio placement",
      "Priority scheduling",
      "Dedicated account support",
    ],
    rights: "180 days usage rights",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Custom",
    price: "Let's Talk",
    perVideo: "Your terms",
    videos: "You Choose",
    features: [
      "Any video count",
      "Any platform combo",
      "Product showcase format",
      "Flexible timeline",
      "Link in bio placement",
    ],
    rights: "Negotiable usage rights",
    popular: false,
    cta: "Get Started",
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

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            opts={{ align: "start", loop: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {packages.map((pkg) => (
                <CarouselItem
                  key={pkg.name}
                  className="pl-3 pt-5 basis-4/5 sm:basis-1/2 lg:basis-1/4"
                >
                  <div
                    className={`relative flex flex-col h-full min-h-130 p-6 rounded-2xl border transition-all ${
                      pkg.popular
                        ? "bg-violet-950/40 border-violet-500 glow-violet"
                        : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-violet-600 text-white text-xs px-3 py-0.5 flex items-center gap-1 whitespace-nowrap">
                          <Zap className="w-3 h-3" /> Most Popular
                        </Badge>
                      </div>
                    )}

                    {/* Title + price */}
                    <div className="mb-6 text-center">
                      <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                        {pkg.name}
                      </h3>
                      <div className="text-4xl font-bold text-gradient leading-none mb-1">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-zinc-500 mt-2">{pkg.perVideo}</div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-zinc-800 mb-6" />

                    {/* Video count pill */}
                    <div className="flex justify-center mb-6">
                      <div className="inline-flex items-center gap-1.5 bg-zinc-800 rounded-full px-4 py-2 text-sm font-semibold text-zinc-200">
                        {pkg.videos}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 flex-1">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                          <span className="text-zinc-300 text-sm leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Usage rights */}
                    <div className="h-px bg-zinc-800 my-5" />
                    <div className="flex items-start gap-2.5 mb-6">
                      <Check className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                      <span className="text-zinc-300 text-sm">{pkg.rights}</span>
                    </div>

                    <a
                      href="#contact"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full justify-center py-6 text-sm font-semibold",
                        pkg.popular
                          ? "bg-violet-600 hover:bg-violet-500 text-white border-transparent"
                          : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-transparent"
                      )}
                    >
                      {pkg.cta}
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-zinc-900 border-zinc-700 hover:bg-zinc-800 hover:border-violet-500 text-zinc-300" />
              <CarouselNext className="static translate-y-0 bg-zinc-900 border-zinc-700 hover:bg-zinc-800 hover:border-violet-500 text-zinc-300" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
