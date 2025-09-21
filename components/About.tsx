"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Users, Trophy, Code, Rocket } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Trophy,
      value: t.about.stats.projects.value,
      label: t.about.stats.projects.label
    },
    {
      icon: Users,
      value: t.about.stats.clients.value,
      label: t.about.stats.clients.label
    },
    {
      icon: Code,
      value: t.about.stats.technologies.value,
      label: t.about.stats.technologies.label
    },
    {
      icon: Rocket,
      value: t.about.stats.experience.value,
      label: t.about.stats.experience.label
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Notre Mission
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.about.description2}
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong>Innovation continue :</strong> Veille technologique permanente pour proposer les solutions les plus avancées
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong>Approche agile :</strong> Méthodologie Scrum avec sprints de 2 semaines pour une livraison rapide et itérative
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong>Transparence totale :</strong> Communication régulière, accès au code source, et documentation complète
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800 hover:border-primary/30 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technologies & Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-primary font-semibold mb-3">Frontend</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-primary font-semibold mb-3">Backend</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Node.js</li>
                <li>Python / Django</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-primary font-semibold mb-3">Mobile</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>React Native</li>
                <li>Flutter</li>
                <li>iOS / Swift</li>
                <li>Android / Kotlin</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-primary font-semibold mb-3">Cloud & DevOps</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>AWS / Azure</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;