'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useState } from 'react';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr', label: 'FR', fullLabel: 'Français' },
    { code: 'en', label: 'EN', fullLabel: 'English' }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as 'fr' | 'en');
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 w-full hover:bg-gray-800 transition-colors ${
                  language === lang.code ? 'bg-gray-800 text-primary' : 'text-gray-300'
                }`}
              >
                <span className="font-semibold">{lang.label}</span>
                <span className="text-sm">{lang.fullLabel}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary/90 text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change language"
      >
        <span className="font-bold text-sm">{language.toUpperCase()}</span>
      </motion.button>
    </div>
  );
}