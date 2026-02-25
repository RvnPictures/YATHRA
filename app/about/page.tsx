"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CTASection from "@/components/CTASection";
import { useLenis } from "@/hooks/useLenis";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "12+", label: "Industries served" },
  { value: "2h", label: "Average response time" },
];

const values = [
  {
    icon: "solar:star-shine-linear",
    title: "Excellence",
    desc: "We don't cut corners. Every pixel, every line of code is crafted to the highest standard because your product deserves nothing less.",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "Partnership",
    desc: "We're not just vendors, we're true partners. Your success is our success, and we invest in long-term relationships built on trust.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "solar:bolt-linear",
    title: "Speed",
    desc: "In a fast-moving market, timing matters. We deliver on schedule without sacrificing quality, so you never miss a window of opportunity.",
    gradient: "from-cyan-500/20 to-pink-500/20",
  },
  {
    icon: "solar:lightbulb-linear",
    title: "Innovation",
    desc: "We stay ahead of the curve, leveraging the latest technologies and design trends to give your product a competitive edge.",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
];

const expertise = [
  {
    category: "Design",
    tools: ["Figma", "Adobe Suite", "Framer", "Spline 3D"],
  },
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "PostgreSQL", "Supabase"],
  },
  {
    category: "Mobile",
    tools: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
];

export default function AboutPage() {
  useLenis();

  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs variant="about" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 lg:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">About Yathra</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white mb-8">
              A digital agency built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 italic">
                craft & conviction
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              We&apos;re Yathra, a team of designers, developers and strategists who turn ambitious ideas into digital products that people love to use.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-[2rem] p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Label */}
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Our story</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                Born from a simple belief: <span className="italic">great design drives growth</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                Yathra was founded with a clear mission: to bridge the gap between visionary ideas and exceptional digital products. We noticed that too many businesses were stuck with outdated designs, slow development cycles, and agencies that didn&apos;t truly understand their goals.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                So we built something different. An agency that combines world-class design with rock-solid engineering, delivered at startup speed. We work closely with each client, treating every project as if it were our own.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Today, we partner with startups, scale-ups and established brands across industries like real estate, fintech, hospitality and SaaS, helping them create digital experiences that truly resonate with their audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Our values</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              What drives <span className="italic">everything</span> we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item) => (
              <div key={item.title} className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all`}></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                    <Icon icon={item.icon} width={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Our approach</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                We don&apos;t just build products, we build <span className="italic">momentum</span>
              </h2>
            </div>

            <div>
              <div className="space-y-0">
                <div className="flex items-start gap-6 py-6 border-b border-white/10">
                  <span className="text-sm font-mono text-gray-600 mt-1 flex-shrink-0">01</span>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-2">We listen first</h3>
                    <p className="text-gray-400 leading-relaxed">Before writing a single line of code, we immerse ourselves in your business, your users, and your market to understand what truly matters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 py-6 border-b border-white/10">
                  <span className="text-sm font-mono text-gray-600 mt-1 flex-shrink-0">02</span>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-2">We iterate fast</h3>
                    <p className="text-gray-400 leading-relaxed">Weekly deliverables, constant feedback loops, and transparent communication ensure the project always moves in the right direction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 py-6 border-b border-white/10">
                  <span className="text-sm font-mono text-gray-600 mt-1 flex-shrink-0">03</span>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-2">We deliver quality</h3>
                    <p className="text-gray-400 leading-relaxed">Pixel-perfect design, clean code, and rigorous testing. We launch products that perform flawlessly from day one.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 py-6">
                  <span className="text-sm font-mono text-gray-600 mt-1 flex-shrink-0">04</span>
                  <div>
                    <h3 className="text-xl text-white font-medium mb-2">We stay involved</h3>
                    <p className="text-gray-400 leading-relaxed">Launch is just the beginning. We provide ongoing support, optimization, and strategic guidance to help your product grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">Tech Stack</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Modern tools for <span className="italic">modern products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((group) => (
              <div key={group.category} className="glass-card rounded-[2rem] p-8 hover:border-white/20 transition-all">
                <h3 className="text-lg font-semibold text-white mb-6">{group.category}</h3>
                <div className="space-y-3">
                  {group.tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                      <span className="text-gray-300 text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 md:pt-12 pb-24 md:pb-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-[2rem] md:rounded-[3rem] py-16 md:py-24 px-8 md:px-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                Ready to work<br />with us?
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Let&apos;s discuss your next project. We&apos;d love to hear about your vision and show you how we can bring it to life.
              </p>
              <div className="flex items-center justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-white text-black pl-8 pr-2 py-2 rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-all"
                >
                  Get in Touch
                  <span className="w-10 h-10 rounded-full bg-black/10 grid place-items-center">
                    <Icon icon="solar:arrow-right-linear" width={18} className="text-black" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
