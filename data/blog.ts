export type BlogCategory = "Design" | "Development" | "Business" | "Trends";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "yathra-is-live",
    title: "Yathra.fr est en ligne — Une agence digitale pensée pour les marques ambitieuses",
    excerpt:
      "Nous sommes ravis d'annoncer le lancement officiel de Yathra.fr. Design premium, développement sur mesure et stratégie digitale : découvrez ce que nous construisons pour vous.",
    category: "Business",
    coverImage: "/projects/yathra-hero.png",
    date: "2025-02-25",
    readTime: "5 min",
    author: {
      name: "Yathra Team",
      avatar: "Y",
      bio: "Yathra est une agence digitale spécialisée dans le design premium, le développement web sur mesure et la stratégie de marque pour les entreprises ambitieuses.",
    },
    content: [
      "Aujourd'hui marque une étape importante pour nous : Yathra.fr est officiellement en ligne. Après des mois de travail, de réflexion et de perfectionnement, notre agence digitale a enfin sa vitrine. Et elle reflète exactement ce que nous sommes : une équipe passionnée par le design, la technologie et la croissance des marques que nous accompagnons.",
      "Yathra est née d'un constat simple. Trop d'entreprises se retrouvent avec des sites web génériques, des expériences utilisateur médiocres et des agences qui ne comprennent pas vraiment leurs objectifs business. Nous avons voulu créer quelque chose de différent : une agence qui allie design de classe mondiale, développement solide et une vraie approche partenaire avec chaque client.",
      "Côté design, nous proposons un accompagnement complet : UI/UX Design, Web Design, Mobile App Design, refonte de sites existants et audits UX/UI. Chaque projet commence par une phase d'écoute et de recherche pour comprendre vos utilisateurs, votre marché et vos objectifs. Ensuite, nous concevons des interfaces intuitives, esthétiques et pensées pour convertir — du wireframe au prototype haute fidélité.",
      "Côté développement, nous construisons avec les technologies les plus modernes : Next.js, React, TypeScript, Tailwind CSS, Node.js, PostgreSQL. Que ce soit un site vitrine performant, une landing page optimisée pour la conversion, un MVP pour valider votre idée ou une application mobile complète, nous livrons du code propre, testé et prêt pour la production.",
      "Ce qui nous différencie ? Notre approche. Nous ne sommes pas de simples prestataires — nous sommes de vrais partenaires. Nous travaillons en sprints courts avec des livraisons hebdomadaires, une communication transparente et des boucles de feedback constantes. Le lancement n'est jamais la fin : nous restons impliqués pour optimiser, itérer et faire grandir votre produit dans la durée.",
      "Nos premiers projets parlent d'eux-mêmes. Nous avons accompagné Ophir Estate dans la refonte de leur site immobilier de luxe (+40% de leads qualifiés), développé PrepCivique, une plateforme EdTech avec 98% de taux de réussite, construit PixEvent, un SaaS de partage photo événementiel, et créé l'identité visuelle complète de Parad'Ice Group. Chaque projet est une preuve de notre engagement envers l'excellence.",
      "Yathra.fr n'est que le début. Ce blog sera l'endroit où nous partagerons nos réflexions sur le design, le développement, les tendances digitales et les stratégies qui aident les entreprises à se démarquer. Si vous avez un projet ambitieux en tête — que ce soit un nouveau site, une application, un MVP ou une refonte complète — nous serions ravis d'en discuter. Bienvenue chez Yathra.",
    ],
    tags: ["Yathra", "Lancement", "Agence Digitale", "Web Design", "Développement Web"],
  },
  {
    id: "ophir-estate-site-immobilier-luxe",
    title: "Ophir Estate — Comment nous avons conçu un site immobilier de luxe qui génère +40% de leads",
    excerpt:
      "Étude de cas : la refonte complète du site Ophir Estate, agence immobilière de luxe sur la Côte d'Azur. Design premium, performances optimisées et +40% de leads qualifiés.",
    category: "Design",
    coverImage: "/projects/ophir-hero.png",
    date: "2025-02-20",
    readTime: "6 min",
    author: {
      name: "Yathra Team",
      avatar: "Y",
      bio: "Yathra est une agence digitale spécialisée dans le design premium, le développement web sur mesure et la stratégie de marque pour les entreprises ambitieuses.",
    },
    content: [
      "Quand Ophir Estate nous a contactés, le constat était clair : leur site web ne reflétait pas la qualité de leur portefeuille immobilier de luxe. Les propriétés valaient des millions, mais le site ressemblait à un template générique des années 2010. Les visiteurs quittaient le site avant même de regarder les annonces. Il fallait tout reprendre de zéro.",
      "Le brief était ambitieux : créer un site qui respire le luxe dès la première seconde, qui met en valeur chaque propriété comme une œuvre d'art, et qui transforme les visiteurs en demandes de visite qualifiées. Le tout avec des performances irréprochables et un référencement naturel optimisé pour capter le trafic organique des recherches immobilières haut de gamme.",
      "Nous avons commencé par une phase de recherche approfondie : analyse des sites concurrents dans l'immobilier de luxe, étude des comportements des acheteurs premium, et benchmark des meilleures expériences digitales dans le secteur. Chaque décision de design — de la typographie aux micro-interactions — a été pensée pour évoquer l'exclusivité et la confiance.",
      "Le résultat : un site construit avec Next.js et Tailwind CSS, avec des animations fluides via Framer Motion, des temps de chargement inférieurs à 1.2 seconde, et un parcours utilisateur optimisé pour la conversion. Les fiches propriétés sont immersives, avec des galeries plein écran et des descriptions qui racontent une histoire plutôt que de lister des caractéristiques.",
      "Les chiffres parlent d'eux-mêmes : +40% de leads qualifiés, -35% de taux de rebond et +60% de trafic organique depuis le lancement. Ophir Estate a désormais une présence digitale qui est à la hauteur de ses propriétés d'exception. Ce projet illustre parfaitement notre conviction : un design premium n'est pas un luxe, c'est un investissement qui se mesure en résultats concrets.",
    ],
    tags: ["Immobilier de Luxe", "Web Design", "Étude de Cas", "Site Vitrine", "SEO Immobilier", "Côte d'Azur"],
  },
  {
    id: "prepcivique-plateforme-edtech",
    title: "PrepCivique — Développement d'une plateforme EdTech avec 98% de taux de réussite",
    excerpt:
      "Comment nous avons conçu et développé PrepCivique, la plateforme de préparation à l'examen civique français avec 1050+ questions interactives et un modèle freemium.",
    category: "Development",
    coverImage: "/projects/prepcivique-hero.png",
    date: "2025-02-15",
    readTime: "7 min",
    author: {
      name: "Yathra Team",
      avatar: "Y",
      bio: "Yathra est une agence digitale spécialisée dans le design premium, le développement web sur mesure et la stratégie de marque pour les entreprises ambitieuses.",
    },
    content: [
      "PrepCivique est né d'un problème réel : les candidats à la naturalisation française n'avaient aucune plateforme moderne pour préparer l'examen civique obligatoire. Les ressources existantes étaient éparpillées dans des PDF obsolètes, sans aucun moyen de suivre sa progression ou de simuler les conditions réelles de l'examen. Il fallait une solution interactive, complète et accessible.",
      "Nous avons conçu et développé une plateforme EdTech full-stack de A à Z. L'architecture repose sur Next.js et TypeScript côté frontend, Node.js et PostgreSQL côté backend, avec une intégration Stripe pour le modèle d'abonnement premium. Chaque choix technique a été guidé par la performance et la scalabilité.",
      "Le cœur de la plateforme, c'est son contenu : 1050+ questions interactives réparties sur 3 parcours d'apprentissage (civique, A2, B2), des simulations d'examen chronométrées en conditions réelles, des cours structurés avec glossaire, et un tableau de bord de progression détaillé. Le modèle freemium offre 10 questions gratuites par jour, avec un accès illimité pour les abonnés premium.",
      "L'expérience utilisateur a été pensée pour réduire la friction au maximum. L'inscription est rapide, la navigation intuitive, et chaque quiz fournit un feedback immédiat avec des explications détaillées pour chaque réponse. Le design est clair, accessible et fonctionne parfaitement sur mobile — essentiel pour un public qui révise souvent en déplacement.",
      "Le SEO a été un axe stratégique majeur. Nous avons optimisé chaque page pour les requêtes liées à la préparation à l'examen civique français : balises structurées, contenu riche, vitesse de chargement optimale et maillage interne intelligent. Résultat : PrepCivique se positionne naturellement sur les recherches clés de son marché.",
      "Avec un taux de réussite de 98% parmi ses utilisateurs, une note de satisfaction de 4.9/5 et une croissance organique constante, PrepCivique est la preuve qu'un produit bien conçu et bien développé peut avoir un impact réel sur la vie des gens. Ce projet reste l'un des plus gratifiants que nous ayons réalisés.",
    ],
    tags: ["EdTech", "SaaS", "Développement Web", "Next.js", "Plateforme E-learning", "Étude de Cas"],
  },
  {
    id: "wimassur-site-assurance",
    title: "WimAssur — Création d'un site vitrine professionnel pour un courtier en assurance",
    excerpt:
      "Comment nous avons aidé WimAssur à établir sa présence digitale avec un site moderne, un blog SEO et un système de demande de devis en ligne.",
    category: "Business",
    coverImage: "/projects/wimassur-hero.png",
    date: "2025-02-08",
    readTime: "5 min",
    author: {
      name: "Yathra Team",
      avatar: "Y",
      bio: "Yathra est une agence digitale spécialisée dans le design premium, le développement web sur mesure et la stratégie de marque pour les entreprises ambitieuses.",
    },
    content: [
      "WimAssur est un courtier en assurance indépendant basé en France, spécialisé dans les solutions sur mesure pour les particuliers et les professionnels. Quand ils nous ont contactés, ils n'avaient aucune présence en ligne et dépendaient entièrement du bouche-à-oreille pour acquérir de nouveaux clients. Dans un marché aussi concurrentiel que l'assurance, c'était un frein majeur à leur croissance.",
      "L'objectif était clair : créer un site professionnel qui inspire confiance, présente clairement leurs services et génère des demandes de devis en ligne. Nous avons opté pour un design épuré avec une palette de verts chaleureux qui évoque la sécurité et la fiabilité — des valeurs essentielles dans le secteur de l'assurance.",
      "Le site a été construit avec Next.js et Tailwind CSS pour des performances optimales. Chaque page a été pensée pour la conversion : des descriptions de services claires, des témoignages clients, un formulaire de demande de devis simplifié et des garanties de réponse rapide (moins de 24h). L'architecture mobile-first garantit une expérience fluide sur tous les appareils.",
      "L'un des éléments clés du projet a été l'intégration d'un blog SEO. Nous avons mis en place une stratégie de contenu autour de thématiques d'assurance recherchées par les internautes : comparatifs, guides pratiques, actualités réglementaires. Ce blog génère un trafic organique croissant et positionne WimAssur comme un expert de confiance dans son domaine.",
      "Depuis le lancement, WimAssur a accompagné plus de 100 clients satisfaits, maintient un temps de réponse inférieur à 24h et publie régulièrement du contenu sur son blog. Le site est devenu leur principal canal d'acquisition de nouveaux clients. Ce projet démontre qu'un site vitrine bien conçu reste l'un des meilleurs investissements pour un professionnel indépendant.",
    ],
    tags: ["Assurance", "Site Vitrine", "SEO", "Blog", "Courtier", "Étude de Cas"],
  },
  {
    id: "paradice-group-identite-visuelle",
    title: "Parad'Ice Group — Création d'une identité visuelle complète pour une chaîne de bars & cafés",
    excerpt:
      "Comment nous avons développé le branding complet de Parad'Ice Group : logo, charte graphique, supports digitaux et print pour une marque vibrante et mémorable.",
    category: "Design",
    coverImage: "/projects/paradice-hero.png",
    date: "2025-01-30",
    readTime: "5 min",
    author: {
      name: "Yathra Team",
      avatar: "Y",
      bio: "Yathra est une agence digitale spécialisée dans le design premium, le développement web sur mesure et la stratégie de marque pour les entreprises ambitieuses.",
    },
    content: [
      "Parad'Ice Group exploite une chaîne de bars et coffee shops tendance à travers la France. En pleine expansion, la marque faisait face à un problème courant chez les enseignes multi-sites : une identité visuelle incohérente. Chaque établissement avait ses propres visuels, ses propres couleurs, ses propres supports. Impossible de construire une reconnaissance de marque solide dans ces conditions.",
      "Notre mission : créer une identité visuelle unifiée, bold et mémorable, qui capture l'énergie vibrante de l'univers Parad'Ice tout en étant suffisamment flexible pour s'adapter à tous les supports — de l'enseigne en façade au menu, en passant par les réseaux sociaux et le merchandising.",
      "Nous avons développé un univers graphique inspiré du néon, avec des couleurs vives, des contrastes forts et une typographie moderne qui parle directement à la cible jeune et urbaine de Parad'Ice. Le logo a été conçu pour fonctionner en version couleur comme en monochrome, sur fond clair comme sur fond sombre, en grand format comme en favicon.",
      "Le livrable final comprenait plus de 20 éléments : logo principal et déclinaisons, charte graphique complète, templates pour réseaux sociaux, design de menus et cartes, supports d'impression, guidelines d'utilisation de la marque, et un site web qui consolide la cohérence digitale de l'ensemble. Chaque pièce a été pensée comme partie d'un système modulaire.",
      "Les résultats ont été immédiats : +80% de reconnaissance de marque, +150% d'engagement sur les réseaux sociaux et une cohérence visuelle de 100% entre tous les points de contact. Parad'Ice Group a désormais une identité qui est aussi mémorable et énergique que l'expérience qu'ils offrent à leurs clients. Le branding, quand il est bien fait, change tout.",
    ],
    tags: ["Branding", "Identité Visuelle", "Logo", "Charte Graphique", "Hospitality", "Étude de Cas"],
  },
  {
    id: "pixevent-saas-photo-evenementiel",
    title: "PixEvent — Développement d'un SaaS de partage photo événementiel en temps réel",
    excerpt:
      "Comment nous avons conçu et développé PixEvent, une plateforme qui simplifie le partage de photos lors d'événements grâce à un simple QR code, sans inscription ni téléchargement.",
    category: "Development",
    coverImage: "/projects/pixevent-hero.png",
    date: "2025-01-22",
    readTime: "6 min",
    author: {
      name: "Yathra Team",
      avatar: "Y",
      bio: "Yathra est une agence digitale spécialisée dans le design premium, le développement web sur mesure et la stratégie de marque pour les entreprises ambitieuses.",
    },
    content: [
      "PixEvent est un produit SaaS français qui résout un problème que tout le monde connaît : comment partager les photos d'un événement simplement, sans obliger les invités à télécharger une app ou créer un compte ? La réponse : un QR code qui ouvre instantanément une galerie partagée. Scanner, accéder, partager — en moins de 3 secondes, sur n'importe quel appareil.",
      "Les fondateurs de PixEvent avaient une vision claire mais avaient besoin d'un partenaire technique capable de transformer leur concept en un produit live, performant et scalable. Nous avons pris le projet en charge de A à Z : architecture technique, design d'interface, développement full-stack, tests et mise en production.",
      "La stack technique repose sur Next.js et TypeScript côté frontend, Node.js côté backend, PostgreSQL pour la base de données et AWS pour l'infrastructure cloud. Le choix d'AWS était essentiel pour gérer les pics de charge lors d'événements où des centaines d'invités uploadent des photos simultanément. L'intégration d'une API QR code permet aux organisateurs de générer des accès uniques en un clic.",
      "Le design suit une approche dark-themed, élégante et centrée sur la simplicité. Le parcours utilisateur principal — scanner un QR code, voir la galerie, uploader une photo — devait fonctionner en moins de 3 secondes. Chaque écran a été optimisé pour la vitesse et la clarté, avec une attention particulière portée à l'expérience mobile.",
      "Côté organisateur, le dashboard permet de créer des espaces photos privés, personnaliser les paramètres de la galerie, suivre les uploads en temps réel et télécharger l'ensemble des photos après l'événement. L'authentification est sécurisée, et chaque espace est isolé pour garantir la confidentialité des photos.",
      "Depuis le lancement, PixEvent affiche un uptime de 99.9%, une note de satisfaction de 4.9/5, et plus de 10 000 photos partagées. La plateforme fonctionne parfaitement pour les mariages, les soirées d'entreprise, les anniversaires et les événements professionnels. Ce projet illustre notre capacité à prendre un concept et le transformer en un produit SaaS complet, prêt pour le marché.",
    ],
    tags: ["SaaS", "Event Tech", "Développement Web", "Application Web", "QR Code", "Étude de Cas"],
  },
];
