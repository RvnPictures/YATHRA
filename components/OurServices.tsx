"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Users
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const OurServices = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Monitor,
      title: t.services.web.title,
      description: t.services.web.description
    },
    {
      icon: Smartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.description
    },
    {
      icon: Cloud,
      title: t.services.saas.title,
      description: t.services.saas.description
    },
    {
      icon: Users,
      title: t.services.consulting.title,
      description: t.services.consulting.description
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-12 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Stars pattern background */}
      <div className="absolute inset-0 opacity-30">
        {/* Multiple stars scattered across the background */}
        <div className="absolute top-10 left-20 text-yathra-green/20">✦</div>
        <div className="absolute top-32 left-40 text-yathra-green/15 text-sm">✧</div>
        <div className="absolute top-20 left-60 text-yathra-green/25 text-lg">⋆</div>
        <div className="absolute top-40 left-32 text-yathra-green/20">✦</div>
        <div className="absolute top-16 right-20 text-yathra-green/15">✧</div>
        <div className="absolute top-28 right-40 text-yathra-green/20 text-lg">⋆</div>
        <div className="absolute top-44 right-60 text-yathra-green/15 text-sm">✦</div>
        <div className="absolute top-52 right-32 text-yathra-green/25">✧</div>
        <div className="absolute bottom-20 left-40 text-yathra-green/20">⋆</div>
        <div className="absolute bottom-32 left-60 text-yathra-green/15 text-lg">✦</div>
        <div className="absolute bottom-40 left-20 text-yathra-green/25 text-sm">✧</div>
        <div className="absolute bottom-16 right-40 text-yathra-green/20">⋆</div>
        <div className="absolute bottom-28 right-60 text-yathra-green/15 text-lg">✦</div>
        <div className="absolute bottom-44 right-20 text-yathra-green/25">✧</div>
        <div className="absolute top-1/2 left-1/4 text-yathra-green/15 text-sm">⋆</div>
        <div className="absolute top-1/3 left-1/2 text-yathra-green/20">✦</div>
        <div className="absolute top-2/3 right-1/4 text-yathra-green/15 text-lg">✧</div>
        <div className="absolute top-1/4 right-1/3 text-yathra-green/25">⋆</div>
        <div className="absolute bottom-1/3 left-1/3 text-yathra-green/20 text-sm">✦</div>
        <div className="absolute bottom-1/4 right-1/2 text-yathra-green/15">✧</div>
        
        {/* Additional scattered stars for depth */}
        <div className="absolute top-[15%] left-[10%] text-yathra-green/10 text-xs">⋆</div>
        <div className="absolute top-[25%] left-[80%] text-yathra-green/10 text-xs">✦</div>
        <div className="absolute top-[45%] left-[15%] text-yathra-green/10 text-xs">✧</div>
        <div className="absolute top-[55%] right-[15%] text-yathra-green/10 text-xs">⋆</div>
        <div className="absolute top-[65%] left-[70%] text-yathra-green/10 text-xs">✦</div>
        <div className="absolute top-[75%] right-[70%] text-yathra-green/10 text-xs">✧</div>
        <div className="absolute top-[85%] left-[50%] text-yathra-green/10 text-xs">⋆</div>
        <div className="absolute top-[35%] right-[50%] text-yathra-green/10 text-xs">✦</div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.services.title} <span className="text-yathra-green">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Background rectangle with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-lg overflow-hidden">
                  {/* Vertical lines pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px)`,
                  }} />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="relative p-12 flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="p-4 rounded-lg bg-gray-900/70 backdrop-blur-sm border border-gray-800 group-hover:border-yathra-green/30 transition-all duration-300">
                      <Icon className="h-10 w-10 text-white group-hover:text-yathra-green transition-colors" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurServices;