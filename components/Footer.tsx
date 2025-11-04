"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const TikTokIcon = () => (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );

  return (
    <footer className="bg-black border-t border-gray-800 mt-8">
      <div className="container mx-auto px-4 py-8">
        {/* Bottom Section with Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>&copy; {currentYear}</span>
            <Image
              src="/img/logo/logo_yathra_vert_trans_texte.png"
              alt="Yathra"
              width={35}
              height={12}
              className="inline-block object-contain"
            />
            <span>Tous droits réservés.</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/yathratech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yathra-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/yathratech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yathra-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@yathratech?_t=ZN-90z7GBAAreY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yathra-green transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;