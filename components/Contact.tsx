"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  
  const contactOptions = [
    {
      title: t.contact.info.email.title,
      value: t.contact.info.email.value,
      icon: Mail,
      href: "mailto:contact@yathra.fr",
    },
    {
      title: t.contact.info.phone.title,
      value: t.contact.info.phone.value,
      icon: Phone,
      href: "tel:+33652834276",
    },
  ];

  return (
    <section id="contact" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <a href="https://calendly.com/ravinesiva/30min" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-yathra-green text-black hover:bg-yathra-green/90 rounded-full px-8 py-6 text-sm font-semibold transition-colors"
            >
              {t.contact.form.send}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={option.href}
                  className="group block"
                >
                  <motion.div 
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-500 hover:bg-gray-900/70 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(53,215,156,0.3)] hover:scale-105"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <motion.div 
                        className="p-2 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          {option.title}
                        </p>
                        <p className="text-white group-hover:text-primary transition-colors duration-300">
                          {option.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}