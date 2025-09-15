"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = t.faq.items

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.faq.title} <span className="text-primary">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            {t.faq.subtitle}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={`faq-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-500 ease-in-out group"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-500 ease-in-out"
                  >
                    <h3 className="text-white font-medium pr-4 group-hover:text-primary transition-all duration-500 ease-in-out">{faq.question}</h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-primary transition-all duration-500 ease-in-out" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary transition-all duration-500 ease-in-out" />
                      )}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-0">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}