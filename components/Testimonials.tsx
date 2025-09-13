"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  
  const testimonials = [
    {
      id: 1,
      content: "Travailler avec Yathra a été un plaisir. Leur équipe de design web a créé un site époustouflant qui capture parfaitement l'essence de notre marque. Les retours de nos clients ont été extrêmement positifs.",
      author: "Sarah Thompson",
      role: "CEO chez TechStart",
      avatar: "/testimonials/sarah.jpg",
      company: "TechStart"
    },
    {
      id: 2,
      content: "L'application mobile que Yathra a développée pour nous a dépassé nos attentes. Son interface conviviale et ses fonctionnalités fluides nous ont valu d'excellents avis de nos utilisateurs.",
      author: "Marc Roberts",
      role: "Fondateur de GreenEarth Eco Store",
      avatar: "/testimonials/marc.jpg",
      company: "GreenEarth"
    },
    {
      id: 3,
      content: "Yathra a transformé notre présence digitale. Leur stratégie marketing a augmenté notre trafic de 200% en seulement 6 mois. Une équipe hautement recommandée !",
      author: "Lisa Williams",
      role: "Directrice Marketing chez HealthTech Innovations",
      avatar: "/testimonials/lisa.jpg",
      company: "HealthTech"
    },
    {
      id: 4,
      content: "La plateforme SaaS développée par Yathra a révolutionné notre processus de travail. Leur attention aux détails et leur capacité à comprendre nos besoins ont rendu l'ensemble du processus fluide et sans stress.",
      author: "Michael Johnson",
      role: "CTO chez DataFlow Solutions",
      avatar: "/testimonials/michael.jpg",
      company: "DataFlow"
    },
    {
      id: 5,
      content: "Un travail exceptionnel sur notre site e-commerce ! L'équipe de Yathra a livré un design moderne et une expérience utilisateur intuitive qui a considérablement augmenté nos conversions.",
      author: "Emma Martin",
      role: "Responsable Digital chez Fashion Forward",
      avatar: "/testimonials/emma.jpg",
      company: "Fashion Forward"
    },
    {
      id: 6,
      content: "L'expertise de Yathra en développement mobile est incomparable. Ils ont créé une application robuste et évolutive qui sert parfaitement notre base d'utilisateurs grandissante.",
      author: "David Chen",
      role: "Product Owner chez MobileTech",
      avatar: "/testimonials/david.jpg",
      company: "MobileTech"
    }
  ];

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  // Calculate dimensions
  const cardWidth = 400;
  const gap = 24;
  const totalWidth = testimonials.length * (cardWidth + gap);
  
  // Transform x position to progress (0-1)
  const progress = useTransform(
    x,
    [-totalWidth, 0],
    [1, 0]
  );

  // Animation
  useEffect(() => {
    let controls: any;
    
    const startAnimation = () => {
      if (!isPaused) {
        controls = setInterval(() => {
          const currentX = x.get();
          const newX = currentX - 2; // Speed of scrolling
          
          if (Math.abs(newX) >= totalWidth) {
            x.set(0);
          } else {
            x.set(newX);
          }
        }, 30); // Update every 30ms for smooth animation
      }
    };
    
    startAnimation();
    
    return () => {
      if (controls) clearInterval(controls);
    };
  }, [isPaused, x, totalWidth]);

  return (
    <section id="testimonials" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Vos <span className="text-primary">Témoignages</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base">
            Ne vous fiez pas seulement à notre parole, écoutez ce que nos clients satisfaits ont à dire sur leur expérience avec Yathra. 
            Nous sommes fiers de construire des relations durables et de fournir des résultats exceptionnels.
          </p>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div 
          className="flex gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            style={{ x, width: "fit-content" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm flex-shrink-0 w-[400px] border border-gray-800 hover:border-primary/20 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle green accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Testimonial Content */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8 min-h-[120px]">
                  <span className="text-primary/60 text-lg font-serif">"</span>
                  {testimonial.content}
                  <span className="text-primary/60 text-lg font-serif">"</span>
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50 group-hover:border-primary/10 transition-colors duration-300">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800 ring-2 ring-gray-700 group-hover:ring-primary/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-gray-800" />
                    <div className="w-full h-full flex items-center justify-center text-primary/50 font-medium text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium text-sm group-hover:text-primary/90 transition-colors duration-300">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      {/* Progress Bar */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-center mt-12">
          <div className="relative w-64 h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
              style={{
                width: useTransform(progress, [0, 1], ["0%", "100%"]),
                boxShadow: "0 0 10px rgba(53, 215, 156, 0.5)"
              }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
            </motion.div>
            
            {/* Segments */}
            <div className="absolute inset-0 flex pointer-events-none">
              {[...Array(testimonials.length)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r border-gray-700/30 last:border-r-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;