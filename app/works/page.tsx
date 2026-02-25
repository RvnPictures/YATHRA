"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { projects } from "@/data/projects";

export default function WorksPage() {
  const lenisRef = useLenis();

  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs variant="works" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 lg:pt-44 pb-20 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Title & Stats */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 tracking-wide backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Portfolio
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] text-white mb-8">
                We transform{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 italic">
                  Ideas
                </span>{" "}
                into design{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 italic">
                  Success Stories
                </span>
              </h1>

              <p className="text-lg text-gray-400 font-light leading-relaxed mb-10 max-w-lg">
                Explore our portfolio of award-winning digital products designed
                and built for ambitious brands.
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-8 mb-10">
                <div>
                  <p className="text-3xl md:text-4xl font-semibold text-white">15+</p>
                  <p className="text-sm text-gray-500">Projects Delivered</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold text-white">100%</p>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <p className="text-3xl md:text-4xl font-semibold text-white">3x</p>
                  <p className="text-sm text-gray-500">Avg. ROI Increase</p>
                </div>
              </div>

              {/* CTA + Clutch */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => lenisRef.current?.scrollTo("#projects", { duration: 1.5 })}
                  className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all"
                >
                  All Cases
                  <span className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">
                    <Icon icon="solar:arrow-down-linear" width={16} className="text-black" />
                  </span>
                </button>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">Awarded Agency</span>
                </div>
              </div>
            </div>

            {/* Right - Featured Project Card */}
            <div className="relative">
              {/* Main image with slight rotation */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                  alt="Featured Project - Ophir Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating glass card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 glass-card rounded-2xl p-5 max-w-[280px] backdrop-blur-xl">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-gray-300">
                    Real Estate
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-gray-300">
                    Web Design
                  </span>
                </div>
                <p className="text-white text-sm font-medium mb-2">Ophir Estate</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Premium luxury real estate website with +40% qualified leads increase.
                </p>
              </div>

              {/* Floating stats badge */}
              <div className="absolute -top-4 -right-4 md:-right-8 glass-card rounded-xl px-4 py-3 backdrop-blur-xl">
                <p className="text-2xl font-bold text-white">+40%</p>
                <p className="text-[10px] text-gray-400">Qualified Leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Projects that{" "}
              <span className="italic">speak for themselves</span>
            </h2>
          </div>

          {/* Project Cards */}
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/works/${project.id}`}
                className={`glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 lg:p-14 relative overflow-hidden group hover:border-white/15 transition-all duration-500 block cursor-pointer`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "top-0 right-0" : "bottom-0 left-0"
                  } w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${
                    index === 0
                      ? "bg-amber-500"
                      : index === 1
                      ? "bg-cyan-500"
                      : "bg-indigo-500"
                  }`}
                ></div>

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10 ${
                    index % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div className={`flex flex-col justify-between ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    {/* Tags */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                          {project.flag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6 leading-tight">
                        {project.headline}
                      </h3>

                      <div className="w-full h-px bg-white/10 mb-6"></div>

                      {/* Testimonial */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-white text-sm font-medium">
                            Client Review
                          </span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-3.5 h-3.5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed italic text-sm md:text-base">
                          {project.testimonial}
                        </p>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-br ${project.avatarGradient} flex items-center justify-center text-white font-semibold text-sm`}
                      >
                        {project.avatarLetter}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm italic">
                          {project.author}
                        </p>
                        <p className="text-gray-500 text-xs">{project.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Images */}
                  <div className={`space-y-4 ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-[16/10]">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - Main`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-[4/3]">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} - Detail 1`}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 delay-100"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-[4/3]">
                        <Image
                          src={project.images[2]}
                          alt={`${project.title} - Detail 2`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 delay-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
