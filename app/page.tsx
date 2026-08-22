"use client";

import { useEffect } from "react";
import gsap from "gsap";
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
  useEffect(() => {
    gsap.from("main > *", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out",
      delay: 2.5,
    });
  }, []);
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
