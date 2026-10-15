import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Stats from "@/components/sections/Stats";
import Audience from "@/components/sections/Audience";
import Packages from "@/components/sections/Packages";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Stats />
      <Audience />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
