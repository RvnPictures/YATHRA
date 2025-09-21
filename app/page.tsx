"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundAnimation />
      <Header />
      <main className="relative z-10">
        <Hero />
        <WhyChooseUs />
        <OurServices />
        <Projects />
        <About />
        <Testimonials />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}