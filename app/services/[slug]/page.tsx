import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Icon from "@/components/Icon";
import LenisWrapper from "./LenisWrapper";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — ${service.category} | Yathra`,
    description: service.description,
    openGraph: {
      title: `${service.title} — ${service.category} | Yathra`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  const relatedServices = services.filter(
    (s) => s.category === service.category && s.id !== service.id
  );

  const gradientColor =
    service.category === "Design"
      ? "from-purple-500 to-pink-500"
      : "from-blue-500 to-cyan-500";

  const glowColor =
    service.category === "Design"
      ? "bg-purple-500/20"
      : "bg-blue-500/20";

  return (
    <LenisWrapper>
      <div className="relative overflow-hidden">
        <BackgroundBlobs variant="works" />
        <Navbar />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 lg:pt-44 pb-16 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 group"
            >
              <Icon
                icon="solar:arrow-left-linear"
                width={16}
                className="text-gray-400 group-hover:text-white transition-colors"
              />
              All Services
            </Link>

            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 tracking-wide backdrop-blur-md">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientColor}`}></span>
                {service.category}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white mb-6">
                {service.title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl mb-10">
                {service.description}
              </p>

              {/* CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all"
              >
                Start a project
                <span className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">
                  <Icon
                    icon="solar:arrow-right-linear"
                    width={16}
                    className="text-black"
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left - Label */}
              <div>
                <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
                  What&apos;s Included
                </p>
                <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                  Everything you need for{" "}
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    exceptional results
                  </span>
                </h2>
              </div>

              {/* Right - Features List */}
              <div className="space-y-0">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 py-5 border-b border-white/10"
                  >
                    <span className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center shrink-0 opacity-80`}>
                      <Icon
                        icon="solar:check-read-linear"
                        width={18}
                        className="text-white"
                      />
                    </span>
                    <p className="text-lg text-white font-light">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative z-10 py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                How we <span className="italic">deliver</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We dive deep into your goals, audience, and market to define a clear strategy and scope.",
                  icon: "solar:magnifer-linear",
                },
                {
                  step: "02",
                  title: "Execution",
                  desc: "Our team designs and develops with weekly check-ins, ensuring quality and alignment at every stage.",
                  icon: "solar:code-circle-linear",
                },
                {
                  step: "03",
                  title: "Launch & Support",
                  desc: "We deploy, optimize, and provide ongoing support to ensure long-term success.",
                  icon: "solar:rocket-linear",
                },
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="glass-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${glowColor} rounded-full blur-[60px] group-hover:opacity-150 transition-all`}></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                      <Icon
                        icon={phase.icon}
                        width={24}
                        className="text-white"
                      />
                    </div>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">
                      Step {phase.step}
                    </p>
                    <h3 className="text-xl font-medium text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="relative z-10 py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
                Related Services
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                Other <span className="italic">{service.category.toLowerCase()}</span> services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.id}`}
                  className="glass-card rounded-2xl p-8 group hover:border-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                      <Icon
                        icon={related.icon}
                        width={22}
                        className="text-gray-400 group-hover:text-white transition-colors"
                      />
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors mb-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {related.description}
                      </p>
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
    </LenisWrapper>
  );
}
