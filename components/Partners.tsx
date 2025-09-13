"use client";

import { motion } from "framer-motion";

const partners = [
  { id: 1, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
  { id: 2, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
  { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
  { id: 4, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png" },
  { id: 5, name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
  { id: 6, name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png" },
  { id: 7, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png" },
  { id: 8, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png" },
];

export default function Partners() {
  // Triple the partners to ensure seamless infinite scroll
  const triplePartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nous sommes fiers de collaborer avec des entreprises leaders dans leur domaine
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{
            background: "linear-gradient(90deg, rgba(3, 7, 18, 1) 0%, rgba(3, 7, 18, 0.9) 20%, rgba(3, 7, 18, 0.7) 40%, rgba(3, 7, 18, 0.4) 60%, rgba(3, 7, 18, 0.1) 80%, rgba(3, 7, 18, 0) 100%)"
          }} />
          <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none" style={{
            background: "linear-gradient(270deg, rgba(3, 7, 18, 1) 0%, rgba(3, 7, 18, 0.9) 20%, rgba(3, 7, 18, 0.7) 40%, rgba(3, 7, 18, 0.4) 60%, rgba(3, 7, 18, 0.1) 80%, rgba(3, 7, 18, 0) 100%)"
          }} />
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-33.333%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {triplePartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 px-8"
                  style={{ width: "200px" }}
                >
                  <div className="w-full h-24 flex items-center justify-center group cursor-pointer">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[120px] max-h-[60px] object-contain filter brightness-0 invert opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                      style={{
                        filter: "brightness(0) invert(1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "brightness(0) saturate(100%) invert(69%) sepia(66%) saturate(416%) hue-rotate(107deg) brightness(96%) contrast(91%)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "brightness(0) invert(1)";
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === 1 
                  ? "w-8 bg-primary" 
                  : "w-4 bg-gray-600"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}