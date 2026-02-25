"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useState, useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { projects } from "@/data/projects";
import { designServices, devServices } from "@/data/services";

const words = ["websites", "mobile apps", "SaaS"];
const wordWidths = ["4.8em", "6.2em", "3.2em"]; // Largeurs approximatives pour chaque mot

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animation, setAnimation] = useState<"" | "out" | "in">("");
  const [cursorPhase, setCursorPhase] = useState<"idle" | "approach" | "push" | "return">("idle");

  useLenis();

  useEffect(() => {
    const interval = setInterval(() => {
      // Étape 1: Le curseur s'approche du mot
      setCursorPhase("approach");

      // Étape 2: Le curseur pousse et le mot sort
      setTimeout(() => {
        setCursorPhase("push");
        setAnimation("out");
      }, 400);

      // Étape 3: Le mot change et apparaît
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setAnimation("in");
      }, 800);

      // Étape 4: Le curseur redescend
      setTimeout(() => {
        setCursorPhase("idle");
      }, 1000);

      // Étape 5: Reset animation
      setTimeout(() => {
        setAnimation("");
      }, 1200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs variant="home" />
      <Navbar />

      {/* Hero Section */}
      <main className="relative z-10 pt-32 lg:pt-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 tracking-wide backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.15] text-white max-w-5xl mx-auto mb-8">
              <span className={`block transition-all duration-500 ease-out ${animation === "out" ? "opacity-80" : "opacity-100"}`}>
                We craft{" "}
                <span className="relative inline-block align-baseline">
                  <span
                    className="relative inline-flex items-center transition-all duration-500 ease-out"
                    style={{ width: wordWidths[wordIndex] }}
                  >
                    <span className="overflow-hidden h-[1.3em]">
                      <span
                        className={`glass-bubble inline-block whitespace-nowrap ${
                          animation === "out" ? "word-swipe-out" : animation === "in" ? "word-swipe-in" : ""
                        }`}
                      >
                        {words[wordIndex]}
                      </span>
                    </span>
                    {/* Animated cursor - starts right, moves left to select, then slides up */}
                    <span
                      className={`absolute top-1/2 -right-10 ${
                        cursorPhase === "idle" ? "cursor-idle" :
                        cursorPhase === "approach" ? "cursor-approach" :
                        cursorPhase === "push" ? "cursor-push" :
                        "cursor-return"
                      }`}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="drop-shadow-lg"
                      >
                        <path d="M4 0L20 12L12 14L8 24L4 0Z" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
              <span className="block">
                that users{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 italic inline-block pr-2">
                  love
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
              Premium digital agency turning bold ideas into products that captivate, convert, and scale.
            </p>

            {/* Showreel / Video Placeholder */}
            <div className="w-full relative mt-8 group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
              <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                {/* Placeholder Image simulating a video cover */}
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                  alt="Showreel"
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all group-hover:scale-110">
                    <Icon icon="solar:play-linear" width={32} className="text-white ml-1" />
                  </div>
                </div>

                {/* Video UI Elements */}
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                    Agency Showreel &apos;24
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/20 text-[10px] text-white backdrop-blur-sm">
                    01:45
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


      {/* Logo Marquee */}
      <section className="py-16 md:py-24 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
          <p className="text-sm text-gray-500 font-medium">
            TRUSTED BY INNOVATORS
          </p>
        </div>
        <div className="relative w-full overflow-x-hidden bg-white/[0.02] border-y border-white/5">
          <div className="marquee-track py-8">
            {[0, 1].map((i) => (
              <div key={i} className="marquee-set">
                <Image src="/logos/ophir-estate-2.png" alt="Ophir Estate" width={200} height={80} className="h-20 w-auto object-contain grayscale brightness-200 opacity-70 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
                <Image src="/logos/paradice-bar-2.png" alt="Parad'Ice Bar" width={200} height={80} className="h-20 w-auto object-contain grayscale brightness-200 opacity-70 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
                <Image src="/logos/paradice-booth-2.png" alt="Parad'Ice Booth" width={200} height={80} className="h-20 w-auto object-contain grayscale brightness-200 opacity-70 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
                <Image src="/logos/paradice-coffee-2.png" alt="Parad'Ice Coffee" width={200} height={80} className="h-20 w-auto object-contain grayscale brightness-200 opacity-70 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
                <Image src="/logos/prepcivique.png" alt="PrepCivique" width={200} height={80} className="h-20 w-auto object-contain brightness-0 invert opacity-70 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pt-12 md:pt-16 pb-24 md:pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Label */}
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">Results</p>
            </div>

            {/* Right side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-16">
                <span className="italic">Yathra</span> is your perfect choice in terms of
              </h2>

              {/* Features list */}
              <div className="space-y-0">
                <div className="flex items-center gap-8 py-6 border-b border-white/10">
                  <span className="text-2xl text-gray-400 font-mono">{`{/}`}</span>
                  <p className="text-xl text-white font-light">Hiring system with immediate start</p>
                </div>
                <div className="flex items-center gap-8 py-6 border-b border-white/10">
                  <span className="text-2xl text-gray-400 font-mono">{`{/}`}</span>
                  <p className="text-xl text-white font-light">Guaranteed on-time deliverables</p>
                </div>
                <div className="flex items-center gap-8 py-6">
                  <span className="text-2xl text-gray-400 font-mono">{`{/}`}</span>
                  <p className="text-xl text-white font-light">Flexible collaboration & fixed monthly rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Services</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              <span className="block whitespace-nowrap">Digital Product Design & Development</span>
              <span className="block italic">Services We Offer</span>
            </h2>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Design Card */}
            <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all"></div>
              <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">Design</h3>
              <div className="space-y-0 relative z-10">
                {designServices.map((service, i) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className={`service-row flex items-center justify-between py-5 cursor-pointer ${i < designServices.length - 1 ? "border-b border-white/10" : ""}`}
                  >
                    <span className="text-gray-300 transition-colors">{service.title}</span>
                    <svg className="w-5 h-5 text-gray-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Development Card */}
            <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-all"></div>
              <h3 className="text-2xl font-semibold text-white mb-8 relative z-10">Development</h3>
              <div className="space-y-0 relative z-10">
                {devServices.map((service, i) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className={`service-row flex items-center justify-between py-5 cursor-pointer ${i < devServices.length - 1 ? "border-b border-white/10" : ""}`}
                  >
                    <span className="text-gray-300 transition-colors">{service.title}</span>
                    <svg className="w-5 h-5 text-gray-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Bubble */}
          <div className="mt-10 flex justify-center">
            <div className="glass-card rounded-full py-4 px-6 flex items-center gap-6 hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                Y
              </div>
              <p className="text-white font-light text-sm md:text-base">
                Ready to turn your vision into reality?<br className="hidden md:block" /> Let&apos;s create something extraordinary together.
              </p>
              <a href="/contact" className="flex items-center gap-2 bg-white text-black font-medium pl-5 pr-2 py-2 rounded-full hover:bg-gray-100 transition-all text-sm group">
                Contact Us
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Our Work</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Projects that <span className="italic">speak for themselves</span>
            </h2>
          </div>

          {projects.slice(0, 3).map((project, index) => (
            <Link key={project.id} href={`/works/${project.id}`} className="block group">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${index < 2 ? "mb-32" : ""}`}>
                {/* Left - Text (Sticky) */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{tag}</span>
                    ))}
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">{project.flag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-tight group-hover:text-purple-300 transition-colors">
                    {project.headline}
                  </h3>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 mb-8"></div>

                  {/* Testimonial */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white font-medium">Client Review</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed italic">
                      {project.testimonial}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.avatarGradient} flex items-center justify-center text-white font-semibold`}>
                        {project.avatarLetter}
                      </div>
                      <div>
                        <p className="text-white font-medium italic">{project.author}</p>
                        <p className="text-gray-500 text-sm">{project.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Images */}
                <div className="space-y-6">
                  {project.images.map((img, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[4/3]">
                      <Image
                        src={img}
                        alt={`${project.title} - ${i === 0 ? "Main" : `Detail ${i}`}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-12 md:py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                Our Expertise
              </h2>
              <p className="text-gray-400 max-w-md">
                We provide a full-cycle digital service, from initial concept to
                final deployment.
              </p>
            </div>
            <a
              href="#"
              className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors flex items-center gap-1"
            >
              View all services <Icon icon="solar:arrow-right-linear" width={16} />
            </a>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Card 1: Large Left */}
            <div className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <Icon icon="solar:palette-linear" width={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-medium text-white mb-3">
                    Product Design
                  </h3>
                  <p className="text-gray-400 max-w-lg mb-8">
                    We design user-centric interfaces that are intuitive,
                    engaging, and scalable. Our approach blends aesthetics with
                    functionality.
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    <li className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                      UI/UX
                    </li>
                    <li className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                      Design Systems
                    </li>
                    <li className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                      Prototyping
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Small Right Top */}
            <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  <Icon icon="solar:code-circle-linear" width={24} className="text-white" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-medium text-white mb-2">
                    Development
                  </h3>
                  <p className="text-sm text-gray-400">
                    Robust front-end and back-end solutions using modern stacks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Small Left Bottom */}
            <div className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  <Icon icon="solar:smartphone-linear" width={24} className="text-white" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-medium text-white mb-2">
                    Mobile Apps
                  </h3>
                  <p className="text-sm text-gray-400">
                    Native iOS and Android applications focused on performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Large Right Bottom */}
            <div className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] group-hover:bg-indigo-500/20 transition-all"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <Icon icon="solar:rocket-linear" width={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-medium text-white mb-3">
                    Growth &amp; Strategy
                  </h3>
                  <p className="text-gray-400 max-w-lg mb-8">
                    Data-driven strategies to help your product find its market
                    and scale effectively.
                  </p>
                  <ul className="flex flex-wrap gap-3">
                    <li className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                      Analytics
                    </li>
                    <li className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                      SEO
                    </li>
                    <li className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                      Marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
