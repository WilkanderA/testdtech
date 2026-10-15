import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
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
      <About />
      <Stats />
      <Audience />
      <Packages />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
