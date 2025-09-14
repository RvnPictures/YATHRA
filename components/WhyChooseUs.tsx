"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Lightbulb, 
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Expertise qui Génère des Résultats",
      description: "Notre équipe de professionnels expérimentés apporte des années d'expertise et de savoir-faire à votre projet."
    },
    {
      icon: Lightbulb,
      title: "Solutions Business Sur Mesure",
      description: "Nous comprenons que chaque entreprise est unique. C'est pourquoi nos solutions sont personnalisées."
    },
    {
      icon: Star,
      title: "Design Web Avant-Gardiste",
      description: "Laissez une impression durable sur votre audience avec nos services de design web de pointe."
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-6 lg:px-12 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pourquoi Choisir <span className="text-yathra-green">Yathra</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Des solutions sur mesure conçues pour répondre à vos besoins business uniques, 
            garantissant un succès durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 group-hover:border-yathra-green/50 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-white group-hover:text-yathra-green transition-colors" />
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {reason.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yathra-green"></div>
            <p className="text-gray-500 text-sm">
              Découvrez comment nous pouvons transformer votre présence digitale
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yathra-green"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;