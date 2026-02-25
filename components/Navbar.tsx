"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { designServices, devServices } from "@/data/services";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

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

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-base text-gray-300 hover:text-white transition-all flex items-center gap-1"
            >
              Services
              <Icon
                icon="solar:alt-arrow-down-linear"
                width={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="isolate rounded-2xl p-6 min-w-[520px] border border-white/15 shadow-2xl shadow-black/50 bg-[#0d0d1a] backdrop-blur-none">
                <div className="grid grid-cols-2 gap-8">
                  {/* Design Column */}
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3 px-3">
                      Design
                    </p>
                    <div className="space-y-0.5">
                      {designServices.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                            <Icon icon={service.icon} width={16} className="text-gray-400 group-hover:text-white transition-colors" />
                          </span>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Development Column */}
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3 px-3">
                      Development
                    </p>
                    <div className="space-y-0.5">
                      {devServices.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                            <Icon icon={service.icon} width={16} className="text-gray-400 group-hover:text-white transition-colors" />
                          </span>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          <Link
            href="/about"
            className="text-base text-gray-300 hover:text-white transition-all"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-base text-gray-300 hover:text-white transition-all"
          >
            Blog
          </Link>
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
