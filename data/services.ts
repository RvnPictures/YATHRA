export interface Service {
  id: string;
  title: string;
  category: "Design" | "Development";
  icon: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  // Design
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    icon: "solar:palette-linear",
    description:
      "We design intuitive, user-centered interfaces that balance aesthetics with functionality. From wireframes to high-fidelity prototypes, every pixel is crafted to deliver seamless experiences that drive engagement and conversions.",
    features: [
      "User research & persona mapping",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Design system creation",
      "Usability testing & iteration",
      "Interaction design & micro-animations",
    ],
  },
  {
    id: "web-design",
    title: "Web Design",
    category: "Design",
    icon: "solar:monitor-linear",
    description:
      "We create stunning, responsive websites that reflect your brand identity and captivate your audience. Our designs are built for performance, accessibility, and conversion — turning visitors into customers.",
    features: [
      "Custom website design",
      "Responsive & mobile-first layouts",
      "Brand-aligned visual identity",
      "Conversion-optimized pages",
      "SEO-friendly structure",
      "Content strategy & copywriting support",
    ],
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    category: "Design",
    icon: "solar:smartphone-linear",
    description:
      "We design mobile apps that users love to use. From concept to polished UI, we craft native-feeling experiences for iOS and Android that are intuitive, engaging, and aligned with platform guidelines.",
    features: [
      "iOS & Android design",
      "App UX flows & navigation",
      "Component-based design systems",
      "Interactive prototyping",
      "App Store asset design",
      "Gesture & animation design",
    ],
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    category: "Design",
    icon: "solar:refresh-circle-linear",
    description:
      "Transform your outdated website into a modern, high-performing digital experience. We analyze what works, fix what doesn't, and redesign your site to meet today's standards for speed, UX, and conversions.",
    features: [
      "UX audit & gap analysis",
      "Information architecture restructuring",
      "Modern visual redesign",
      "Performance optimization",
      "Content migration strategy",
      "A/B testing & data-driven decisions",
    ],
  },
  {
    id: "ux-ui-audit",
    title: "UX/UI Audit",
    category: "Design",
    icon: "solar:clipboard-check-linear",
    description:
      "Get an expert evaluation of your product's user experience and interface design. We identify usability issues, conversion blockers, and design inconsistencies, then deliver actionable recommendations to improve your product.",
    features: [
      "Heuristic evaluation",
      "User flow analysis",
      "Accessibility compliance review",
      "Competitive benchmarking",
      "Conversion funnel analysis",
      "Prioritized improvement roadmap",
    ],
  },

  // Development
  {
    id: "web-development",
    title: "Web Development",
    category: "Development",
    icon: "solar:code-circle-linear",
    description:
      "We build fast, scalable, and maintainable web applications using modern frameworks. From single-page apps to complex platforms, our code is clean, tested, and production-ready.",
    features: [
      "Next.js & React development",
      "TypeScript-first codebase",
      "API design & integration",
      "Database architecture",
      "Authentication & security",
      "CI/CD & deployment pipelines",
    ],
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    category: "Development",
    icon: "solar:rocket-linear",
    description:
      "Launch your product idea fast with a focused, functional MVP. We help startups and founders go from concept to a live product in weeks — validating your idea with real users before scaling.",
    features: [
      "Rapid prototyping & validation",
      "Lean feature prioritization",
      "Full-stack development",
      "User feedback integration",
      "Scalable architecture from day one",
      "Launch & iteration support",
    ],
  },
  {
    id: "webflow-development",
    title: "WebFlow Development",
    category: "Development",
    icon: "solar:widget-linear",
    description:
      "We build pixel-perfect, CMS-powered websites on Webflow that your team can easily manage. Ideal for marketing sites, portfolios, and content-driven platforms — no code maintenance required.",
    features: [
      "Custom Webflow development",
      "CMS & dynamic content setup",
      "Responsive animations & interactions",
      "SEO & performance optimization",
      "Third-party integrations",
      "Team training & handoff",
    ],
  },
  {
    id: "landing-page",
    title: "Landing Page",
    category: "Development",
    icon: "solar:document-linear",
    description:
      "We design and develop high-converting landing pages that turn traffic into leads. Every element — from headline to CTA — is optimized for clarity, trust, and action.",
    features: [
      "Conversion-focused design",
      "A/B testing ready",
      "Fast load times & performance",
      "Analytics & tracking setup",
      "Copywriting & messaging",
      "Mobile-optimized layouts",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    category: "Development",
    icon: "solar:smartphone-2-linear",
    description:
      "We develop native and cross-platform mobile applications that perform flawlessly. From concept to App Store, we handle the full lifecycle with a focus on performance, UX, and reliability.",
    features: [
      "React Native & native development",
      "Cross-platform compatibility",
      "Offline-first architecture",
      "Push notifications & real-time features",
      "App Store submission & optimization",
      "Post-launch maintenance & updates",
    ],
  },
];

export const designServices = services.filter((s) => s.category === "Design");
export const devServices = services.filter((s) => s.category === "Development");
