"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              href="https://linkedin.com/company/yathra"
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
              href="https://twitter.com/yathra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yathra-green transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;