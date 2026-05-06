import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WhatIDo from "@/components/WhatIDo";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Lakshyan Alahari — Full Stack Developer";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", "Portfolio of Lakshyan Alahari — Full Stack Web Developer crafting bold, editorial, motion-rich web experiences with React, Three.js and Node.");
    if (!meta.parentElement) document.head.appendChild(meta);
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <WhatIDo />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
