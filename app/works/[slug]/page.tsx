import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Icon from "@/components/Icon";
import LenisWrapper from "./LenisWrapper";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study | Yathra`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Case Study | Yathra`,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.id === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projects[projectIndex - 1] ?? projects[projects.length - 1];
  const nextProject = projects[projectIndex + 1] ?? projects[0];

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
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 group"
          >
            <Icon icon="solar:arrow-left-linear" width={16} className="text-gray-400 group-hover:text-white transition-colors" />
            Back to all projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left - Project Info */}
            <div>
              {/* Tags */}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-white mb-6">
                {project.title}
              </h1>

              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-lg">
                {project.headline}
              </p>

              {/* Live Site Link */}
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all"
                >
                  Visit Live Site
                  <span className="w-8 h-8 rounded-full bg-black/10 grid place-items-center">
                    <Icon icon="solar:arrow-right-up-linear" width={16} className="text-black" />
                  </span>
                </a>
              )}
            </div>

            {/* Right - Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {result.value}
                  </p>
                  <p className="text-sm text-gray-400">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="relative z-10 px-6 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-3 md:p-4 overflow-hidden">
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden aspect-[16/9]">
              <Image
                src={project.images[0]}
                alt={`${project.title} — Main`}
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* The Challenge */}
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
                The Challenge
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                Understanding the{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  problem
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {project.challenge}
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
                Our Solution
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                Crafting the{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  solution
                </span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
              Built with{" "}
              <span className="italic">the right tools</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.stack.map((tech) => (
              <div
                key={tech}
                className="glass-card rounded-xl px-6 py-4 hover:border-white/15 transition-all duration-300"
              >
                <p className="text-white font-medium text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 font-medium tracking-widest uppercase mb-4">
              Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight">
              A closer{" "}
              <span className="italic">look</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-2 overflow-hidden"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={img}
                    alt={`${project.title} — Screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"></div>
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed italic mb-8 max-w-3xl mx-auto">
                {project.testimonial}
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.avatarGradient} flex items-center justify-center text-white font-semibold`}
                >
                  {project.avatarLetter}
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{project.author}</p>
                  <p className="text-gray-500 text-sm">{project.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="relative z-10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={`/works/${prevProject.id}`}
              className="glass-card rounded-2xl p-8 group hover:border-white/15 transition-all duration-300"
            >
              <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                <Icon icon="solar:arrow-left-linear" width={14} className="text-gray-500" />
                Previous Project
              </p>
              <p className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors">
                {prevProject.title}
              </p>
            </Link>

            <Link
              href={`/works/${nextProject.id}`}
              className="glass-card rounded-2xl p-8 text-right group hover:border-white/15 transition-all duration-300"
            >
              <p className="text-sm text-gray-500 mb-2 flex items-center justify-end gap-2">
                Next Project
                <Icon icon="solar:arrow-right-linear" width={14} className="text-gray-500" />
              </p>
              <p className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors">
                {nextProject.title}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
    </LenisWrapper>
  );
}
