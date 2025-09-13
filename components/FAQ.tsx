"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "Combien de temps faut-il pour développer un site web ?",
    answer: "Le délai varie selon la complexité et les exigences du projet. Notre équipe s'efforce de livrer les projets dans les délais tout en maintenant les plus hauts standards de qualité. Un site vitrine simple peut prendre 2-4 semaines, tandis qu'une application web complexe peut nécessiter 2-6 mois."
  },
  {
    question: "Pouvez-vous créer un design de site web responsive qui fonctionne sur tous les appareils ?",
    answer: "Absolument ! Tous nos sites web sont conçus avec une approche mobile-first, garantissant une expérience utilisateur optimale sur tous les appareils - smartphones, tablettes et ordinateurs de bureau. Nous testons rigoureusement sur différentes tailles d'écran et navigateurs."
  },
  {
    question: "Quelles stratégies de marketing digital utilisez-vous pour générer du trafic ?",
    answer: "Nous employons une approche multi-canal incluant le SEO on-page et off-page, le marketing de contenu, les campagnes publicitaires ciblées (Google Ads, réseaux sociaux), l'email marketing et l'optimisation du taux de conversion pour maximiser votre visibilité en ligne."
  },
  {
    question: "Pouvez-vous gérer des projets de développement d'applications mobiles à grande échelle ?",
    answer: "Oui, notre équipe a l'expertise et les ressources pour gérer des projets d'applications mobiles de toute envergure. Nous utilisons des méthodologies agiles et des architectures scalables pour assurer que votre application puisse grandir avec votre entreprise."
  },
  {
    question: "Pouvez-vous intégrer des APIs tierces dans notre application mobile ?",
    answer: "Certainement ! Nous avons une vaste expérience dans l'intégration d'APIs tierces comme les systèmes de paiement, les réseaux sociaux, les services de géolocalisation, les CRM et bien d'autres pour enrichir les fonctionnalités de votre application."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Questions Fréquemment <span className="text-primary">Posées</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Des questions ? Nous avons les réponses. Consultez notre section FAQ pour obtenir des informations précieuses sur nos processus, tarifs et plus encore. La transparence est au cœur de nos interactions clients.
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