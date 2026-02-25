export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  headline: string;
  tags: string[];
  flag: string;
  testimonial: string;
  author: string;
  role: string;
  avatarGradient: string;
  avatarLetter: string;
  images: string[];
  stack: string[];
  liveUrl: string;
  description: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
}

export const projects: Project[] = [
  {
    id: "wimassur",
    title: "WimAssur",
    headline:
      "WimAssur established a strong online presence with a professional insurance showcase website",
    tags: ["Insurance", "Web Design", "SEO"],
    flag: "\u{1F1EB}\u{1F1F7}",
    testimonial:
      "\u201CYathra delivered a clean, professional website that perfectly represents our brand. Our clients find it easy to navigate and request quotes online.\u201D",
    author: "WimAssur",
    role: "Insurance Brokerage, France",
    avatarGradient: "from-emerald-500 to-teal-600",
    avatarLetter: "W",
    images: [
      "/projects/wimassur-hero.png",
      "/projects/wimassur-detail-1.png",
      "/projects/wimassur-detail-2.png",
    ],
    stack: ["Next.js", "Tailwind CSS", "Figma", "SEO", "Blog Integration"],
    liveUrl: "https://wimassur.fr",
    description:
      "WimAssur is an independent insurance brokerage based in France, offering tailored insurance solutions for individuals and professionals. Yathra designed and developed a modern showcase website with an integrated blog, contact forms, and SEO optimization to help them attract and convert clients online.",
    challenge:
      "WimAssur needed a professional digital presence to build trust with potential clients in a competitive insurance market. They had no website and relied entirely on word-of-mouth. They needed a site that would convey credibility, clearly present their services, and generate quote requests through an easy-to-use online form.",
    solution:
      "We designed a clean, trust-inspiring website with a warm green color palette that reflects security and reliability. The site features a streamlined quote request flow, a contact page with rapid response guarantees, and an SEO-optimized blog with articles on insurance topics to drive organic traffic. The entire site is built for performance and mobile-first usability.",
    results: [
      { label: "Clients Satisfied", value: "100+" },
      { label: "Response Time", value: "<24h" },
      { label: "Blog Articles", value: "10+" },
      { label: "ORIAS Certified", value: "Yes" },
    ],
  },
  {
    id: "prepcivique",
    title: "PrepCivique",
    headline:
      "PrepCivique helps thousands prepare for the French civic exam with a 98% success rate",
    tags: ["EdTech", "SaaS", "Web App"],
    flag: "\u{1F1EB}\u{1F1F7}",
    testimonial:
      "\u201CYathra built a platform that truly makes a difference. The user experience is seamless, and our students love the interactive quizzes and progress tracking.\u201D",
    author: "PrepCivique",
    role: "EdTech, France",
    avatarGradient: "from-indigo-600 to-blue-500",
    avatarLetter: "P",
    images: [
      "/projects/prepcivique-hero.png",
      "/projects/prepcivique-detail-1.png",
      "/projects/prepcivique-detail-2.png",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://prepcivique.fr",
    description:
      "PrepCivique is a French EdTech platform that helps candidates prepare for the civic exam required for French naturalization. With 1050+ interactive questions, exam simulations, structured courses, and progress tracking, it provides a comprehensive preparation experience for civic, A2, and B2 level exams.",
    challenge:
      "Candidates preparing for the French naturalization exam had no dedicated, modern platform to practice on. Existing resources were outdated, scattered across PDFs, and offered no way to track progress or simulate real exam conditions. There was a clear need for an interactive, all-in-one solution aligned with the official program.",
    solution:
      "We designed and developed a full-stack EdTech platform with interactive QCM quizzes, timed exam simulations under real conditions, structured courses with a glossary, and a progress tracking dashboard. The platform offers 1050+ questions across 3 learning paths, with a freemium model (10 free questions/day) and Stripe-powered premium subscriptions.",
    results: [
      { label: "Success Rate", value: "98%" },
      { label: "Questions Available", value: "1050+" },
      { label: "Learning Paths", value: "3" },
      { label: "User Satisfaction", value: "4.9/5" },
    ],
  },
  {
    id: "ophir-estate",
    title: "Ophir Estate",
    headline:
      "Ophir Estate achieved a 40% increase in qualified leads with our premium web design",
    tags: ["Real Estate", "Web Design", "UI/UX"],
    flag: "\u{1F1EB}\u{1F1F7}",
    testimonial:
      "\u201CYathra transformed our digital presence with exceptional attention to detail. Their creative approach perfectly captured our luxury brand identity.\u201D",
    author: "Ophir Estate",
    role: "Luxury Real Estate, France",
    avatarGradient: "from-amber-500 to-orange-600",
    avatarLetter: "O",
    images: [
      "/projects/ophir-hero.png",
      "/projects/ophir-detail-1.png",
      "/projects/ophir-detail-2.png",
    ],
    stack: ["Next.js", "Tailwind CSS", "Figma", "Framer Motion", "Vercel"],
    liveUrl: "https://www.ophirestate.com",
    description:
      "Ophir Estate is a luxury real estate agency based in France, specializing in high-end properties across the French Riviera. Yathra designed and developed a premium website that reflects the exclusivity of their brand while driving measurable business results.",
    challenge:
      "Ophir Estate needed a digital presence that matched the prestige of their luxury property portfolio. Their previous website was outdated, failed to convey the premium nature of their listings, and generated very few qualified leads from online visitors. They needed a complete redesign that would attract high-net-worth clients and convert them into serious inquiries.",
    solution:
      "We crafted a bespoke, visually stunning website with immersive property showcases, smooth animations, and an intuitive user experience. Every design decision\u2014from the typography to the micro-interactions\u2014was made to evoke luxury and trust. We implemented a streamlined inquiry flow and optimized the site for performance and SEO to capture organic traffic from property searches.",
    results: [
      { label: "Qualified Leads", value: "+40%" },
      { label: "Page Load Speed", value: "1.2s" },
      { label: "Bounce Rate Reduction", value: "-35%" },
      { label: "Organic Traffic", value: "+60%" },
    ],
  },
  {
    id: "paradice",
    title: "Parad\u2019Ice Group",
    headline:
      "Parad\u2019Ice Bar & Coffee elevated their brand with our complete visual identity system",
    tags: ["Hospitality", "Branding", "Identity"],
    flag: "\u{1F1EB}\u{1F1F7}",
    testimonial:
      "\u201CThe neon-inspired branding Yathra created for us perfectly captures our vibrant atmosphere. Our customers love the new visual identity!\u201D",
    author: "Parad\u2019Ice Group",
    role: "Bar & Coffee Chain, France",
    avatarGradient: "from-cyan-400 to-pink-500",
    avatarLetter: "P",
    images: [
      "/projects/paradice-hero.png",
      "/projects/paradice-detail-1.png",
      "/projects/paradice-detail-2.png",
    ],
    stack: ["Figma", "Adobe Illustrator", "Brand Strategy", "Print Design"],
    liveUrl: "https://paradice-group.fr",
    description:
      "Parad\u2019Ice Group operates a chain of trendy bars and coffee shops across France. Yathra developed a complete brand identity system\u2014from logo design to digital and print collateral\u2014that captures the vibrant, neon-inspired energy of their venues and resonates with a young, urban audience.",
    challenge:
      "Parad\u2019Ice was expanding rapidly but lacked a cohesive brand identity. Each location had inconsistent visual elements, making it hard to build brand recognition. They needed a unified identity system that could scale across multiple venues while capturing the fun, vibrant energy that defines the Parad\u2019Ice experience.",
    solution:
      "We developed a bold, neon-inspired brand identity with a flexible design system that works across all touchpoints\u2014from signage and menus to social media and merchandise. The visual language we created is instantly recognizable, energetic, and perfectly suited for their target demographic. We also designed a website that reinforces brand consistency across all digital channels.",
    results: [
      { label: "Deliverables", value: "20+" },
      { label: "Brand Recognition", value: "+80%" },
      { label: "Social Engagement", value: "+150%" },
      { label: "Design Consistency", value: "100%" },
    ],
  },
  {
    id: "pixevent",
    title: "PixEvent",
    headline:
      "PixEvent simplifies event photo sharing with instant QR code access for every guest",
    tags: ["SaaS", "Web App", "Event Tech"],
    flag: "\u{1F1EB}\u{1F1F7}",
    testimonial:
      "\u201CYathra built exactly the product we envisioned. The platform is fast, intuitive, and our users love how simple it is to share photos at events.\u201D",
    author: "PixEvent",
    role: "Event Technology, France",
    avatarGradient: "from-indigo-500 to-purple-600",
    avatarLetter: "P",
    images: [
      "/projects/pixevent-hero.png",
      "/projects/pixevent-detail-1.png",
      "/projects/pixevent-detail-2.png",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "QR Code API"],
    liveUrl: "https://pixevent.com",
    description:
      "PixEvent is a French event tech platform that lets organizers create private photo spaces for their events. Guests access the gallery instantly by scanning a QR code\u2014no app download, no sign-up. Yathra designed and developed the full-stack SaaS product from concept to launch.",
    challenge:
      "The founders needed a seamless way for event guests to share and access photos without friction. Existing solutions required app downloads or complex sign-ups, which killed adoption rates. They needed a technical partner to build a fast, scalable platform with a frictionless user experience that works on any device.",
    solution:
      "We designed a clean, dark-themed interface focused on simplicity and speed. The core flow\u2014scan a QR code, access the gallery, upload photos\u2014was built to work in under 3 seconds on any device. We implemented secure authentication, real-time photo syncing, and a robust backend on Node.js and PostgreSQL to handle high-traffic events with hundreds of simultaneous uploads.",
    results: [
      { label: "Time to Access", value: "<3s" },
      { label: "Platform Uptime", value: "99.9%" },
      { label: "User Satisfaction", value: "4.9/5" },
      { label: "Photos Shared", value: "10K+" },
    ],
  },
];
