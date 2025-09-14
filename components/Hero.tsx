"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-6 lg:px-12 bg-black relative overflow-hidden pt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-2 sm:gap-6 lg:gap-12 py-2 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl order-2 lg:order-1"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
            Notre voyage commence avec vos <span className="text-yathra-green">idées</span>.
          </h1>
          
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
            Chez Yathra, nous créons des solutions digitales sur mesure qui propulsent votre entreprise 
            vers de nouveaux sommets. De la conception web innovante aux applications mobiles performantes, 
            nous transformons votre vision en succès numérique.
          </p>

          <div className="mb-8 md:mb-12">
            <a href="https://calendly.com/ravinesiva/30min" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-yathra-green text-black hover:bg-yathra-green/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-xs sm:text-sm font-semibold transition-colors"
              >
                Démarrer votre projet
                <ArrowRight className="ml-2 h-3 sm:h-4 w-3 sm:w-4" />
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex items-start lg:items-center justify-center lg:justify-end order-1 lg:order-2 -mt-4 sm:mt-0"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Image
                src="/img/logo/logo_yathra_vert_trans_texte.png"
                alt="Yathra Logo"
                width={500}
                height={200}
                className="object-contain drop-shadow-2xl w-48 sm:w-64 md:w-80 lg:w-[500px] h-auto"
                priority
              />
              <div className="absolute inset-0 blur-[50px] opacity-30">
                <Image
                  src="/img/logo/logo_yathra_vert_trans_texte.png"
                  alt="Yathra Logo Shadow"
                  width={500}
                  height={200}
                  className="object-contain w-48 sm:w-64 md:w-80 lg:w-[500px] h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-2 sm:mt-4 lg:mt-8 inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-yathra-green/10 border border-yathra-green/20"
            >
              <span className="text-yathra-green text-xs sm:text-sm font-medium">
                Développement Web & Mobile Premium
              </span>
            </motion.div>
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-yathra-green/20 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: -360,
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-yathra-green/10 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-bl from-yathra-green/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;