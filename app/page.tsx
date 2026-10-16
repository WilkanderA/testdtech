import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Audience from "@/components/sections/Audience";
import FeaturedContent from "@/components/sections/FeaturedContent";
import Packages from "@/components/sections/Packages";
import HowItWorks from "@/components/sections/HowItWorks";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <TrustedBy />
      <Audience />
      <FeaturedContent />
      <Packages />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
