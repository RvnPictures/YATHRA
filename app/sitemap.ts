import { MetadataRoute } from 'next';

// Configuration de base - À modifier selon votre domaine
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yathra.fr';

// Types pour une meilleure maintenabilité
type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: Date | string;
};

type DynamicRoute = {
  slug: string;
  lastModified: Date;
  type: 'project' | 'blog' | 'service';
};

// Routes statiques avec leurs configurations SEO
const staticRoutes: RouteConfig[] = [
  {
    path: '',
    priority: 1.0,
    changeFrequency: 'daily',
  },
  {
    path: 'services',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: 'projects',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: 'about',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: 'contact',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: 'faq',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
];

// Langues supportées
const languages = ['fr', 'en'] as const;
type Language = typeof languages[number];

/**
 * Fonction pour récupérer les routes dynamiques
 * En production, ceci pourrait faire un appel API ou lire depuis une base de données
 */
async function getDynamicRoutes(): Promise<DynamicRoute[]> {
  // Exemple de données mockées - Remplacez par votre logique de récupération
  const projects = [
    { slug: 'paradice-bar', lastModified: new Date('2025-09-15'), type: 'project' as const },
    { slug: 'pixevent', lastModified: new Date('2025-09-20'), type: 'project' as const },
    { slug: 'paradice-coffee', lastModified: new Date('2025-09-25'), type: 'project' as const },
    { slug: 'paradice-booth', lastModified: new Date('2025-09-30'), type: 'project' as const },
  ];

  // Exemple de récupération depuis une API (commenté)
  /*
  try {
    const response = await fetch(`${BASE_URL}/api/sitemap-routes`, {
      next: { revalidate: 3600 } // Cache pour 1 heure
    });
    if (response.ok) {
      const data = await response.json();
      return data.routes;
    }
  } catch (error) {
    console.error('Erreur récupération routes dynamiques:', error);
  }
  */

  return projects;
}

/**
 * Génère une URL complète avec alternates pour le multilingue
 */
function generateUrlEntry(
  path: string,
  config: Omit<RouteConfig, 'path'>,
  dynamicLastMod?: Date
): MetadataRoute.Sitemap[number] {
  const lastModified = dynamicLastMod || config.lastModified || new Date();
  
  return {
    url: `${BASE_URL}${path ? `/${path}` : ''}`,
    lastModified,
    changeFrequency: config.changeFrequency,
    priority: config.priority,
    alternates: {
      languages: {
        fr: `${BASE_URL}${path ? `/${path}` : ''}`,
        en: `${BASE_URL}/en${path ? `/${path}` : ''}`,
      },
    },
  };
}

/**
 * Fonction principale de génération du sitemap
 * Exportée par défaut pour Next.js App Router
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [];
  
  // 1. Ajouter toutes les routes statiques pour chaque langue
  for (const route of staticRoutes) {
    // Version française (langue par défaut)
    urls.push(generateUrlEntry(route.path, route));
    
    // Version anglaise
    urls.push({
      url: `${BASE_URL}/en${route.path ? `/${route.path}` : ''}`,
      lastModified: route.lastModified || new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          fr: `${BASE_URL}${route.path ? `/${route.path}` : ''}`,
          en: `${BASE_URL}/en${route.path ? `/${route.path}` : ''}`,
        },
      },
    });
  }

  // 2. Récupérer et ajouter les routes dynamiques
  const dynamicRoutes = await getDynamicRoutes();
  
  for (const route of dynamicRoutes) {
    const basePath = route.type === 'project' ? 'projects' : 
                     route.type === 'blog' ? 'blog' : 
                     'services';
    
    // Version française
    urls.push(generateUrlEntry(
      `${basePath}/${route.slug}`,
      {
        priority: 0.7,
        changeFrequency: 'monthly',
      },
      route.lastModified
    ));
    
    // Version anglaise
    urls.push({
      url: `${BASE_URL}/en/${basePath}/${route.slug}`,
      lastModified: route.lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${BASE_URL}/${basePath}/${route.slug}`,
          en: `${BASE_URL}/en/${basePath}/${route.slug}`,
        },
      },
    });
  }

  // Trier par priorité décroissante pour optimiser le crawl
  urls.sort((a, b) => (b.priority || 0.5) - (a.priority || 0.5));

  return urls;
}

/**
 * Configuration pour le chunking si > 50k URLs
 * Décommentez et adaptez si nécessaire
 */
/*
export async function generateSitemaps() {
  // Calculer le nombre total d'URLs
  const dynamicRoutes = await getDynamicRoutes();
  const totalUrls = (staticRoutes.length * languages.length) + 
                    (dynamicRoutes.length * languages.length);
  
  const maxUrlsPerSitemap = 50000;
  const numberOfSitemaps = Math.ceil(totalUrls / maxUrlsPerSitemap);
  
  // Générer un tableau d'IDs pour chaque sitemap
  return Array.from({ length: numberOfSitemaps }, (_, i) => ({
    id: i,
  }));
}

// Sitemap segmenté pour gestion > 50k URLs
export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const maxUrlsPerSitemap = 50000;
  const start = id * maxUrlsPerSitemap;
  const end = start + maxUrlsPerSitemap;
  
  // Générer toutes les URLs comme avant
  const allUrls = await generateAllUrls(); // Refactoriser la logique ci-dessus
  
  // Retourner seulement le segment approprié
  return allUrls.slice(start, end);
}
*/