"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projectImages = [
    { id: 1, image: "/img/projetparadicebar.jpeg", href: "https://paradicegroup.fr", filter: "website" },
    { id: 2, image: "/projects/pixevent.jpg", href: "/projects/pixevent", filter: "saas" },
    { id: 3, image: "/projects/coffee-shop.jpg", href: "/projects/paradice-coffee", filter: "website" },
    { id: 4, image: "/projects/booth.jpg", href: "/projects/paradice-booth", filter: "website" }
  ];

  const projects = t?.projects?.items ? t.projects.items.map(item => {
    const projectData = projectImages.find(p => p.id === item.id);
    return {
      ...item,
      filter: projectData?.filter || 'website',
      image: projectData?.image || '',
      href: projectData?.href || '#'
    };
  }) : [];

  const filters = [
    { id: "all", label: t?.projects?.filters?.all || "Tous" },
    { id: "saas", label: t?.projects?.filters?.saas || "SaaS" },
    { id: "website", label: t?.projects?.filters?.website || "Site Web" },
    { id: "mobile", label: t?.projects?.filters?.mobile || "Application Mobile" }
  ];

  const allFilteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.filter === activeFilter);
  
  // Limiter à 3 projets sur mobile, 6 sur desktop
  const projectLimit = isMobile ? 3 : 6;
  const displayedProjects = allFilteredProjects.slice(0, projectLimit);
  
  // Afficher le bouton si plus de 6 projets

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t?.projects?.title || "Nos"} <span className="text-primary">{t?.projects?.titleHighlight || "Projets"}</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            {t?.projects?.subtitle || "Découvrez nos réalisations récentes"}
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => {
            // Désactiver temporairement Application Mobile
            const isDisabled = filter.id === "mobile";
            
            return (
              <motion.button
                key={filter.id}
                onClick={() => !isDisabled && setActiveFilter(filter.id)}
                disabled={isDisabled}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                  isDisabled
                    ? "bg-gray-950/50 text-gray-600 border-gray-800/50 cursor-not-allowed opacity-50"
                    : activeFilter === filter.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-gray-950 text-gray-400 border-gray-800 hover:border-primary/30 hover:text-primary hover:bg-gray-900"
                }`}
                whileHover={!isDisabled ? { scale: 1.05 } : {}}
                whileTap={!isDisabled ? { scale: 0.95 } : {}}
              >
                {filter.label}
              </motion.button>
            );
          })}
        </div>

        <div className="relative min-h-[600px]">
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1
                  }
                },
                exit: { 
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.03,
                    staggerDirection: -1
                  }
                }
              }}
            >
              {displayedProjects.map((project) => (
                <motion.div
                  key={`${activeFilter}-${project.id}`}
                  layout
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 50,
                      scale: 0.8,
                      rotateX: -15
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        mass: 1
                      }
                    },
                    exit: { 
                      opacity: 0, 
                      y: -30,
                      scale: 0.9,
                      rotateX: 15,
                      transition: {
                        duration: 0.2
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  className="group perspective-1000"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <a 
                    href={project.href}
                    target={project.href.startsWith('http') ? '_blank' : '_self'}
                    rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <motion.div 
                      className="bg-gray-950 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-900 hover:border-primary/30 group relative cursor-pointer"
                      whileHover={{ 
                        boxShadow: "0 20px 40px rgba(53, 215, 156, 0.1)"
                      }}
                    >
                      {/* Accent vert en haut de la carte */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Image paysage du projet */}
                      <div className="relative w-full h-48 overflow-hidden bg-gray-950">
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-gray-950/90 z-10 group-hover:from-primary/10 transition-all duration-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #0a1f1a 0%, #030712 100%)';
                            const placeholder = e.currentTarget.parentElement!.querySelector('.placeholder-icon');
                            if (placeholder) {
                              (placeholder as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        {/* Badge de catégorie avec accent vert */}
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/20">
                            {project.category}
                          </span>
                        </div>
                        {/* Placeholder si l'image n'existe pas */}
                        <motion.div 
                          className="placeholder-icon absolute inset-0 items-center justify-center hidden"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: 0.3,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <div className="text-primary/30 text-5xl">
                            {project.filter === "website" ? "🌐" : 
                             project.filter === "mobile" ? "📱" : 
                             project.filter === "saas" ? "☁️" : "💼"}
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="p-6 bg-gradient-to-b from-gray-950 to-black"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >

                        <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-primary/90 transition-colors">
                          {project.title}
                        </h3>
                        
                        <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <p className="text-gray-600 text-xs">
                              {project.filter === "website" ? "Web" : 
                               project.filter === "mobile" ? "Mobile" : 
                               project.filter === "saas" ? "SaaS" : "Project"}
                            </p>
                          </div>
                          <p className="text-gray-600 text-xs">
                            {project.date}
                          </p>
                        </div>
                        
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;