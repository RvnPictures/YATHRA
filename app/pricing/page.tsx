"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const designPlans = [
  {
    name: "Landing Page",
    tagline: "Perfect for validating an idea or launching a campaign fast",
    icon: "solar:document-linear",
    features: [
      "Custom responsive design",
      "Conversion-optimized layout",
      "Copywriting support",
      "SEO-friendly structure",
      "Analytics & tracking setup",
      "Delivered in 1–2 weeks",
    ],
    accent: "from-purple-500 to-pink-500",
    glow: "bg-purple-500",
  },
  {
    name: "Website",
    tagline: "For brands that need a strong, professional digital presence",
    icon: "solar:monitor-linear",
    features: [
      "Multi-page custom design",
      "Mobile-first & responsive",
      "CMS or blog integration",
      "Brand-aligned visual identity",
      "SEO optimization",
      "Delivered in 4–8 weeks",
    ],
    accent: "from-blue-500 to-indigo-500",
    glow: "bg-blue-500",
    popular: true,
  },
  {
    name: "Web App / SaaS",
    tagline: "For startups and businesses building complex digital products",
    icon: "solar:code-circle-linear",
    features: [
      "Full UI/UX design & development",
      "Custom frontend & backend",
      "Database architecture",
      "Authentication & security",
      "API design & integrations",
      "Delivered in 8–16 weeks",
    ],
    accent: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-500",
  },
];

const additionalServices = [
  {
    name: "Branding & Identity",
    tagline: "Logo, charte graphique, supports digitaux & print",
    icon: "solar:palette-linear",
    features: [
      "Logo design & variations",
      "Color palette & typography",
      "Brand guidelines document",
      "Social media templates",
      "Print-ready collateral",
      "Delivered in 2–4 weeks",
    ],
    accent: "from-pink-500 to-rose-500",
    glow: "bg-pink-500",
  },
  {
    name: "Mobile App",
    tagline: "Native or cross-platform apps that users love",
    icon: "solar:smartphone-linear",
    features: [
      "iOS & Android design",
      "React Native or native development",
      "Push notifications & real-time",
      "App Store submission",
      "Post-launch updates",
      "Timeline based on scope",
    ],
    accent: "from-emerald-500 to-teal-500",
    glow: "bg-emerald-500",
  },
  {
    name: "Website Redesign",
    tagline: "Transform your outdated site into a modern experience",
    icon: "solar:refresh-circle-linear",
    features: [
      "UX audit & gap analysis",
      "Modern visual redesign",
      "Performance optimization",
      "Content migration",
      "SEO improvements",
      "Delivered in 4–6 weeks",
    ],
    accent: "from-amber-500 to-orange-500",
    glow: "bg-amber-500",
  },
];

const comparisonRows = [
  { label: "Design quality", freelancer: "Variable", agency: "Consistent", yathra: "Premium" },
  { label: "Dedicated team", freelancer: "Single person", agency: "Rotating staff", yathra: "Dedicated experts" },
  { label: "Communication", freelancer: "Unpredictable", agency: "Account managers", yathra: "Direct access" },
  { label: "Delivery speed", freelancer: "Depends on availability", agency: "Standard", yathra: "Fast & reliable" },
  { label: "Tech stack", freelancer: "Limited", agency: "Varied", yathra: "Modern & cutting-edge" },
  { label: "Post-launch support", freelancer: "Rarely", agency: "Paid extra", yathra: "Included" },
  { label: "Strategic guidance", freelancer: "None", agency: "Generic", yathra: "Tailored to your goals" },
];

const faqItems = [
  {
    q: "What services do you provide?",
    a: "We offer end-to-end digital services: UI/UX Design, Web Design, Web Development, Mobile App Development, Branding, MVP Development, Website Redesign, and UX/UI Audits. We've delivered 15+ successful projects across industries like real estate, EdTech, SaaS, insurance, and hospitality.",
  },
  {
    q: "How do you estimate project costs?",
    a: "Every project starts with a free discovery call where we analyze your needs, goals, and constraints. We then provide a detailed proposal with a clear scope, timeline, team structure, and transparent estimate. No hidden fees, no surprises.",
  },
  {
    q: "How quickly can you start?",
    a: "Typically within 3–5 business days after approval. We assign your dedicated team, set up communication channels (Slack, Notion), and hold a kickoff alignment session to hit the ground running.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We love working with startups and have helped several go from idea to live product. We understand the need for speed, iteration, and building scalable MVPs that attract users and investors.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, battle-tested stacks: React, Next.js, TypeScript, Tailwind CSS for frontend; Node.js, Python, PostgreSQL for backend; React Native and Flutter for mobile. We choose the best tools for each project.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer maintenance packages for continuous updates, performance monitoring, UX optimization, and feature additions. We don't just build and leave, we stay involved to help your product grow.",
  },
];

const trustPoints = [
  {
    icon: "solar:verified-check-linear",
    title: "Proven Results",
    desc: "15+ successful digital products with measurable improvements in leads, engagement, and revenue.",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    icon: "solar:users-group-rounded-linear",
    title: "100% Client Satisfaction",
    desc: "Every project we've delivered has met or exceeded our clients' expectations. Our track record speaks for itself.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "solar:bolt-linear",
    title: "Fast & Reliable Delivery",
    desc: "We work in sprints with weekly deliverables and constant communication. No missed deadlines, no excuses.",
    gradient: "from-cyan-500/20 to-pink-500/20",
  },
  {
    icon: "solar:star-shine-linear",
    title: "Senior-Level Specialists",
    desc: "You work directly with experienced designers and developers. No juniors learning on your budget.",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    icon: "solar:code-circle-linear",
    title: "Modern Tech Stack",
    desc: "Next.js, React, TypeScript, Tailwind CSS. We build with the latest tools for maximum performance and scalability.",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    icon: "solar:shield-check-linear",
    title: "True Partnership",
    desc: "We're not vendors. We're partners who invest in your success with strategic guidance, transparency, and long-term support.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export default function PricingPage() {
  useLenis();

  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs variant="works" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 lg:pt-44 pb-20 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-300">Pricing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] text-white mb-6">
              Start{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 italic">
                2x faster
              </span>{" "}
              with a transparent estimate
            </h1>

            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mb-10">
              Every project is unique. We provide custom proposals with clear scope, timeline, and pricing. No templates, no surprises.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all"
              >
                Get a Free Estimate
                <span className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">
                  <Icon icon="solar:arrow-right-linear" width={16} className="text-black" />
                </span>
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Icon icon="solar:clock-circle-linear" width={16} className="text-gray-500" />
                Free consultation, response within 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Plans */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">
              Core Services
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              <span className="italic">Flexible</span> options for every stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designPlans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col ${
                  plan.popular ? "border-purple-500/30" : ""
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[11px] font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Glow */}
                <div className={`absolute top-0 right-0 w-[250px] h-[250px] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${plan.glow}`}></div>

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.accent} flex items-center justify-center mb-6 opacity-90`}>
                    <Icon icon={plan.icon} width={26} className="text-white" />
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">{plan.tagline}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Icon icon="solar:check-read-linear" width={18} className="text-purple-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-full font-medium text-sm transition-all ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    Get a Quote
                    <Icon icon="solar:arrow-right-linear" width={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">
              Additional Services
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Need something <span className="italic">specific?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 flex flex-col"
              >
                <div className={`absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${service.glow}`}></div>

                <div className="relative z-10 flex flex-col flex-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-6 opacity-90`}>
                    <Icon icon={service.icon} width={26} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.tagline}</p>

                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Icon icon="solar:check-read-linear" width={18} className="text-gray-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-full font-medium text-sm bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    Get a Quote
                    <Icon icon="solar:arrow-right-linear" width={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">
              Comparison
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              A clear breakdown to{" "}
              <span className="italic">help you choose</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Freelancers, traditional agencies, or Yathra? Here&apos;s how we compare on what matters most.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-0 border-b border-white/10">
              <div className="p-6"></div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 font-medium">Freelancer</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 font-medium">Traditional Agency</p>
              </div>
              <div className="p-6 text-center bg-purple-500/5">
                <p className="text-sm text-white font-semibold">Yathra</p>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 gap-0 ${
                  i < comparisonRows.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="p-5 pl-6">
                  <p className="text-sm text-white font-medium">{row.label}</p>
                </div>
                <div className="p-5 text-center">
                  <p className="text-sm text-gray-500">{row.freelancer}</p>
                </div>
                <div className="p-5 text-center">
                  <p className="text-sm text-gray-500">{row.agency}</p>
                </div>
                <div className="p-5 text-center bg-purple-500/5">
                  <p className="text-sm text-purple-300 font-medium">{row.yathra}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Yathra */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">
              Why Yathra
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Why ambitious brands{" "}
              <span className="italic">trust</span> us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${point.gradient} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-5">
                    <Icon icon={point.icon} width={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              From first contact to <span className="italic">launch</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: "solar:chat-round-dots-linear",
                title: "Discovery Call",
                desc: "We learn about your project, goals and vision during a free 30-min call.",
                gradient: "from-purple-500/20 to-blue-500/20",
              },
              {
                step: "02",
                icon: "solar:document-text-linear",
                title: "Custom Proposal",
                desc: "You receive a detailed proposal with clear scope, timeline, and transparent pricing.",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                step: "03",
                icon: "solar:code-circle-linear",
                title: "Design & Build",
                desc: "We design and develop your product with weekly updates and constant feedback loops.",
                gradient: "from-cyan-500/20 to-pink-500/20",
              },
              {
                step: "04",
                icon: "solar:rocket-2-linear",
                title: "Launch & Support",
                desc: "Your product goes live with full QA, optimization, and ongoing support included.",
                gradient: "from-pink-500/20 to-purple-500/20",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="glass-card rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-all`}></div>
                <div className="relative z-10">
                  <span className="text-sm font-mono text-gray-600 mb-4 block">{item.step}</span>
                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                    <Icon icon={item.icon} width={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Questions? <span className="italic">Answers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`glass-card rounded-2xl overflow-hidden transition-all ${open ? "border-white/15" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <span className="text-white font-medium text-lg pr-4">{question}</span>
        <div className={`w-10 h-10 rounded-full border border-white/10 bg-white/5 grid place-items-center flex-shrink-0 transition-all duration-300 ${open ? "rotate-45 bg-white/10" : "group-hover:bg-white/10"}`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
