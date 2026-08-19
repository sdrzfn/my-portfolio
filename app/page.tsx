import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PaperClip from "@/components/scrapbook/PaperClip";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="page-grid">
        <PaperClip className="hero-clip" />
        <Hero />
        <WhatIDo />
        <FeaturedProjects />
        <Experience />
        <Contact />
        {/* <Journal /> */}
      </div>
      <Footer />
    </main>
  );
}
