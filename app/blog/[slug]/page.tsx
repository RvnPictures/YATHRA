import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, BlogCategory } from "@/data/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Icon from "@/components/Icon";
import LenisWrapper from "./LenisWrapper";

type Props = { params: Promise<{ slug: string }> };

const categoryColors: Record<BlogCategory, string> = {
  Design: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  Development: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Business: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  Trends: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Yathra Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Yathra Blog`,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <LenisWrapper>
      <div className="relative overflow-hidden">
        <BackgroundBlobs variant="works" />
        <Navbar />

        {/* Hero Section */}
        <article className="relative z-10 pt-32 lg:pt-44 pb-16 md:pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10 group"
            >
              <Icon
                icon="solar:arrow-left-linear"
                width={16}
                className="text-gray-400 group-hover:text-white transition-colors"
              />
              Back to blog
            </Link>

            {/* Category badge */}
            <div className="mb-6">
              <span
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-semibold">
                  {post.author.avatar}
                </div>
                <span>{post.author.name}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="inline-flex items-center gap-1.5">
                <Icon
                  icon="solar:calendar-linear"
                  width={14}
                  className="text-gray-500"
                />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span>{post.readTime}</span>
            </div>

            {/* Cover Image */}
            <div className="glass-card rounded-[2rem] p-3 md:p-4 overflow-hidden mb-16">
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/9]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-300 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Author Section */}
        <section className="relative z-10 px-6 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[120px]"></div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold shrink-0">
                {post.author.avatar}
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                  Written by
                </p>
                <p className="text-white text-lg font-medium mb-2">
                  {post.author.name}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="relative z-10 px-6 pb-24 md:pb-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
                More in{" "}
                <span className="italic">{post.category}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="glass-card rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-500"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-medium border backdrop-blur-md ${categoryColors[related.category]}`}
                        >
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <time dateTime={related.date}>
                          {formatDate(related.date)}
                        </time>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{related.readTime}</span>
                      </div>
                      <h3 className="text-lg font-medium text-white leading-snug group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
        <Footer />
      </div>
    </LenisWrapper>
  );
}
