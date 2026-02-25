"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="z-50"
        >
          <Image
            src="/yathra-logo-white.png"
            alt="Yathra"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/works"
            className="text-base text-gray-300 hover:text-white transition-all"
          >
            Works
          </Link>
          <a
            href="/#services"
            className="text-base text-gray-300 hover:text-white transition-all flex items-center gap-1"
          >
            Services
            <Icon icon="solar:alt-arrow-down-linear" width={16} />
          </a>
          <a
            href="/#industries"
            className="text-base text-gray-300 hover:text-white transition-all flex items-center gap-1"
          >
            Industries
            <Icon icon="solar:alt-arrow-down-linear" width={16} />
          </a>
          <a
            href="/#pricing"
            className="text-base text-gray-300 hover:text-white transition-all"
          >
            Pricing
          </a>
          <a
            href="/#about"
            className="text-base text-gray-300 hover:text-white transition-all"
          >
            About
          </a>
          <a
            href="/#blog"
            className="text-base text-gray-300 hover:text-white transition-all"
          >
            Blog
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all"
          >
            Contact Us
            <span className="w-7 h-7 rounded-full bg-black/10 backdrop-blur-sm grid place-items-center">
              <Icon icon="solar:arrow-right-linear" width={14} className="text-black translate-y-px" />
            </span>
          </Link>
          <button className="md:hidden text-white pt-1">
            <Icon icon="solar:hamburger-menu-linear" width={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}
