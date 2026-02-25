"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import { blogPosts, BlogCategory } from "@/data/blog";

const categories: ("All" | BlogCategory)[] = [
  "All",
  "Design",
  "Development",
  "Business",
  "Trends",
];

const categoryColors: Record<BlogCategory, string> = {
  Design: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  Development: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Business: "bg-amber-500/15 text-amber-300 border-amber-500/20",
  Trends: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

const categoryGlows: Record<BlogCategory, string> = {
  Design: "bg-pink-500",
  Development: "bg-blue-500",
  Business: "bg-amber-500",
  Trends: "bg-emerald-500",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  useLenis();
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>(
    "All"
  );

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="relative overflow-hidden">
      <BackgroundBlobs variant="works" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 lg:pt-44 pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 tracking-wide backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            {blogPosts.length} Articles
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] text-white mb-6">
            Insights &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 italic">
              Ideas
            </span>
          </h1>

          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl mb-12">
            Thoughts on design, development, and building digital products that
            make a difference.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-white text-black"
                    : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative z-10 px-6 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/blog/${featuredPost.id}`}
              className="glass-card rounded-[2rem] md:rounded-[3rem] p-4 md:p-6 block group hover:border-white/15 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow */}
              <div
                className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15 group-hover:opacity-25 transition-opacity duration-500 ${categoryGlows[featuredPost.category]}`}
              ></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 relative z-10">
                {/* Image */}
                <div className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden aspect-[16/10]">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md ${categoryColors[featuredPost.category]}`}
                    >
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center py-2 md:py-4">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon
                        icon="solar:calendar-linear"
                        width={14}
                        className="text-gray-500"
                      />
                      <time dateTime={featuredPost.date}>
                        {formatDate(featuredPost.date)}
                      </time>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight group-hover:text-purple-200 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed mb-6 text-base md:text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
                      {featuredPost.author.avatar}
                    </div>
                    <span className="text-sm text-gray-300">
                      {featuredPost.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {gridPosts.length > 0 && (
        <section className="relative z-10 px-6 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="glass-card rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-500 relative"
                >
                  {/* Glow */}
                  <div
                    className={`absolute bottom-0 right-0 w-[250px] h-[250px] rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${categoryGlows[post.category]}`}
                  ></div>

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-medium border backdrop-blur-md ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-medium text-white mb-3 leading-snug group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-semibold">
                        {post.author.avatar}
                      </div>
                      <span className="text-xs text-gray-400">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <section className="relative z-10 px-6 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto text-center py-20">
            <p className="text-gray-500 text-lg">
              No articles in this category yet. Check back soon.
            </p>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </div>
  );
}
