import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yathra.fr';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json',
          '/*?preview=*',
        ],
      },
      // Règles spécifiques pour les bots agressifs
      {
        userAgent: ['AhrefsBot', 'SemrushBot'],
        crawlDelay: 10,
        allow: '/',
      },
    ],
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
      // Si vous avez des sitemaps segmentés, ajoutez-les ici
      // `${BASE_URL}/sitemap-0.xml`,
      // `${BASE_URL}/sitemap-1.xml`,
    ],
    host: BASE_URL,
  };
}