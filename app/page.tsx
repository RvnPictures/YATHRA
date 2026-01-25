"use client";

import Image from "next/image";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <>
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-900/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 z-50"
          >
            <span className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm tracking-tighter">
              Y.
            </span>
            <span className="hidden sm:block">Yathra</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
            <a
              href="#work"
              className="px-5 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              Work
            </a>
            <a
              href="#services"
              className="px-5 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              Services
            </a>
            <a
              href="#agency"
              className="px-5 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              About
            </a>
            <a
              href="#pricing"
              className="px-5 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all"
            >
              Pricing
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all"
            >
              Let&apos;s talk
              <Icon icon="solar:arrow-right-up-linear" width={18} />
            </a>
            <button className="md:hidden text-white pt-1">
              <Icon icon="solar:hamburger-menu-linear" width={28} />
            </button>
          </div>
        </div>
      </nav>

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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white max-w-5xl mx-auto mb-8">
              We craft digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400">
                experiences
              </span>{" "}
              that scale.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
              An award-winning design agency transforming businesses through
              creative strategy, branding, and powerful web development.
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
        <div className="relative w-full flex overflow-x-hidden border-y border-white/5 bg-white/[0.01]">
          <div className="marquee-content py-8 items-center">
            {/* Repeated Logos */}
            <div className="flex items-center gap-16 md:gap-32 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:infinity-linear" width={32} /> Linear
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:cube-linear" width={32} /> Dropbox
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:wallet-linear" width={32} /> Coinbase
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:bolt-linear" width={32} /> Stripe
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:plain-linear" width={32} /> Vercel
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:infinity-linear" width={32} /> Linear
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:cube-linear" width={32} /> Dropbox
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:wallet-linear" width={32} /> Coinbase
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:bolt-linear" width={32} /> Stripe
              </span>
              <span className="text-2xl font-semibold tracking-tight flex gap-2 items-center">
                <Icon icon="solar:plain-linear" width={32} /> Vercel
              </span>
            </div>
          </div>
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

      {/* Call to Action */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8">
            Have an idea? <br />
            <span className="text-gray-500">Let&apos;s build it together.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <button className="w-full sm:w-auto h-16 px-10 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
              Start a project
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <Icon icon="solar:arrow-right-up-linear" width={16} />
              </div>
            </button>
            <button className="w-full sm:w-auto h-16 px-10 rounded-full border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all">
              hello@yathra.agency
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <a
                href="#"
                className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2 mb-6"
              >
                Yathra.
              </a>
              <p className="text-gray-500 text-sm leading-relaxed">
                A digital product agency crafting experiences that combine
                design, technology, and strategy.
              </p>
            </div>
            <div className="flex gap-16 flex-wrap">
              <div>
                <h4 className="text-white font-medium mb-4">Sitemap</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Agency
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Socials</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Twitter / X
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <div>© 2024 Yathra Agency. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
