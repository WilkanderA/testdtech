import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import Audience from "@/components/sections/Audience";
import Packages from "@/components/sections/Packages";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

function StatsFallback() {
  return (
    <section id="stats" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">Analytics</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By the <span className="text-gradient">numbers</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Live follower counts updated daily across all platforms.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {["Total Followers", "TikTok Followers", "YouTube Subscribers", "Instagram Followers"].map((label) => (
            <div key={label} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center animate-pulse">
              <div className="h-10 w-20 bg-zinc-800 rounded mx-auto mb-2" />
              <div className="text-zinc-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Suspense fallback={<StatsFallback />}>
        <Stats />
      </Suspense>
      <Audience />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
