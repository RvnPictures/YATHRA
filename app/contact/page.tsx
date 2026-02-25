"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { useLenis } from "@/hooks/useLenis";

const projectTypes = [
  "Web Design",
  "Web Development",
  "Mobile App",
  "Branding",
  "MVP / SaaS",
  "Other",
];

const budgetRanges = [
  "< 3 000 €",
  "3 000 – 10 000 €",
  "10 000 – 25 000 €",
  "25 000 – 50 000 €",
  "50 000 € +",
];

export default function ContactPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useLenis();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, projectType: selectedProject, budget: selectedBudget });
  };

  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs variant="contact" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 lg:pt-44 pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Heading */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 tracking-wide backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white mb-6">
                Let&apos;s build
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 italic">
                  something great
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-12">
                Tell us about your project and we&apos;ll get back to you within 24 hours with a free consultation.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:contact@yathra.fr"
                  className="glass-card rounded-2xl p-5 flex items-center gap-5 group hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon="solar:letter-linear" width={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Email us</p>
                    <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                      contact@yathra.fr
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>

                <a
                  href="tel:+33652834276"
                  className="glass-card rounded-2xl p-5 flex items-center gap-5 group hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon="solar:phone-linear" width={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Call us</p>
                    <p className="text-white font-medium group-hover:text-pink-300 transition-colors">
                      +33 6 52 83 42 76
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>

                <div className="glass-card rounded-2xl p-5 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon="solar:map-point-linear" width={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Based in</p>
                    <p className="text-white font-medium">France &mdash; Working worldwide</p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
                <Icon icon="solar:clock-circle-linear" width={18} className="text-gray-500" />
                Average response time: <span className="text-white font-medium">under 2 hours</span>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:sticky lg:top-28">
              <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/8 rounded-full blur-[60px]"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold text-white mb-1">Start a project</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill in the details and we&apos;ll reach out.</p>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all text-sm"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-3">Project type</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedProject(selectedProject === type ? null : type)}
                          className={`px-4 py-2 rounded-full text-sm transition-all border ${
                            selectedProject === type
                              ? "bg-purple-500/20 border-purple-500/50 text-white"
                              : "bg-white/[0.03] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="mb-6">
                    <label className="block text-sm text-gray-400 mb-3">Estimated budget</label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setSelectedBudget(selectedBudget === range ? null : range)}
                          className={`px-4 py-2 rounded-full text-sm transition-all border ${
                            selectedBudget === range
                              ? "bg-purple-500/20 border-purple-500/50 text-white"
                              : "bg-white/[0.03] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm text-gray-400 mb-2">Tell us about your project *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, goals, and timeline..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full group relative inline-flex items-center justify-center gap-3 bg-white text-black py-3.5 rounded-full font-semibold text-base hover:bg-gray-100 transition-all overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <span className="relative z-10 w-8 h-8 rounded-full bg-black/10 grid place-items-center group-hover:bg-black/20 transition-all">
                      <Icon icon="solar:arrow-right-linear" width={16} className="text-black" />
                    </span>
                  </button>

                  <p className="text-xs text-gray-600 text-center mt-4">
                    We&apos;ll respond within 24 hours. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">How it works</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
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
                title: "Proposal",
                desc: "You receive a detailed proposal with scope, timeline, and transparent pricing.",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                step: "03",
                icon: "solar:code-circle-linear",
                title: "Design & Build",
                desc: "We design and develop your product with weekly updates and feedback loops.",
                gradient: "from-cyan-500/20 to-pink-500/20",
              },
              {
                step: "04",
                icon: "solar:rocket-2-linear",
                title: "Launch",
                desc: "Your product goes live with full QA, optimization, and ongoing support.",
                gradient: "from-pink-500/20 to-purple-500/20",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/20 transition-all">
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

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-6">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Questions? <span className="italic">Answers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "It depends on the scope. A landing page takes 1-2 weeks, a full website 4-8 weeks, and a complex web app or MVP 8-16 weeks. We'll give you a precise timeline during our first call.",
              },
              {
                q: "What's your pricing model?",
                a: "We offer both project-based fixed pricing and monthly retainer models. Every project starts with a free consultation where we scope everything together, so there are no surprises.",
              },
              {
                q: "Do you work with startups?",
                a: "Absolutely. We love working with startups and have helped several raise funding with MVPs we built. We understand the need for speed and iteration.",
              },
              {
                q: "What technologies do you use?",
                a: "We use modern, battle-tested stacks: React, Next.js, TypeScript for web; React Native and Flutter for mobile; and Node.js, Python for backends. We choose the best tool for each project.",
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes. We offer maintenance packages and retainer options for continuous updates, monitoring, and improvements. We don't just build and leave.",
              },
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

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
        <div className={`w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "rotate-45 bg-white/10" : "group-hover:bg-white/10"}`}>
          <Icon icon="solar:add-circle-linear" width={20} className="text-white" />
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
