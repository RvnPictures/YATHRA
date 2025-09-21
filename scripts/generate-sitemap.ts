#!/usr/bin/env node

/**
 * Script de génération de sitemap statique
 * Usage: npm run generate:sitemap
 * 
 * Ce script génère un sitemap.xml statique avec support multilingue (FR/EN)
 * et gestion automatique du chunking pour > 50k URLs
 */

import * as fs from 'fs';
import * as path from 'path';

// Configuration
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yathra.fr';
const MAX_URLS_PER_SITEMAP = 50000;
const OUTPUT_DIR = path.join(process.cwd(), 'public');

// Types
interface Route {
  path: string;
  lang: 'fr' | 'en';
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: number;
  alternates: {
    lang: string;
    href: string;
  }[];
}

// Routes statiques
const staticRoutes: Omit<Route, 'lang'>[] = [
  { path: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
  { path: '/services', changefreq: 'weekly', priority: 0.9 },
  { path: '/projects', changefreq: 'weekly', priority: 0.9 },
  { path: '/about', changefreq: 'monthly', priority: 0.8 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },
  { path: '/faq', changefreq: 'monthly', priority: 0.7 },
];

/**
 * Charge les routes dynamiques depuis un fichier JSON ou une API
 */
async function loadDynamicRoutes(): Promise<Route[]> {
  const routesFilePath = path.join(process.cwd(), 'data', 'routes.json');
  
  // Si le fichier existe, le charger
  if (fs.existsSync(routesFilePath)) {
    const content = fs.readFileSync(routesFilePath, 'utf-8');
    return JSON.parse(content);
  }

  // Sinon, retourner des données d'exemple
  console.log('⚠️ Fichier data/routes.json non trouvé. Utilisation de données d\'exemple.');
  return [
    { path: '/projects/paradice-bar', lang: 'fr', lastmod: '2025-09-15', changefreq: 'monthly', priority: 0.7 },
    { path: '/projects/paradice-bar', lang: 'en', lastmod: '2025-09-15', changefreq: 'monthly', priority: 0.7 },
    { path: '/projects/pixevent', lang: 'fr', lastmod: '2025-09-20', changefreq: 'monthly', priority: 0.7 },
    { path: '/projects/pixevent', lang: 'en', lastmod: '2025-09-20', changefreq: 'monthly', priority: 0.7 },
  ];
}

/**
 * Génère le XML pour une URL avec hreflang
 */
function generateUrlXml(url: SitemapUrl): string {
  const alternatesXml = url.alternates
    .map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}"/>`)
    .join('\n');

  return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
${alternatesXml}
  </url>`;
}

/**
 * Génère le contenu XML du sitemap
 */
function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlsXml = urls.map(generateUrlXml).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlsXml}
</urlset>`;
}

/**
 * Génère un sitemap index pour plusieurs sitemaps
 */
function generateSitemapIndexXml(sitemapFiles: string[]): string {
  const sitemapsXml = sitemapFiles
    .map(file => `  <sitemap>
    <loc>${BASE_URL}/${file}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`)
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapsXml}
</sitemapindex>`;
}

/**
 * Convertit les routes en format sitemap avec alternates
 */
function buildSitemapUrls(routes: Route[]): SitemapUrl[] {
  const urlMap = new Map<string, SitemapUrl>();

  // Construire toutes les routes statiques pour les deux langues
  for (const route of staticRoutes) {
    const frPath = route.path === '/' ? '' : route.path;
    const enPath = route.path === '/' ? '/en' : `/en${route.path}`;
    
    // URL française
    const frUrl: SitemapUrl = {
      loc: `${BASE_URL}${frPath}`,
      lastmod: route.lastmod || new Date().toISOString().split('T')[0],
      changefreq: route.changefreq || 'weekly',
      priority: route.priority || 0.5,
      alternates: [
        { lang: 'fr', href: `${BASE_URL}${frPath}` },
        { lang: 'en', href: `${BASE_URL}${enPath}` },
        { lang: 'x-default', href: `${BASE_URL}${frPath}` },
      ],
    };
    urlMap.set(frUrl.loc, frUrl);

    // URL anglaise
    const enUrl: SitemapUrl = {
      loc: `${BASE_URL}${enPath}`,
      lastmod: route.lastmod || new Date().toISOString().split('T')[0],
      changefreq: route.changefreq || 'weekly',
      priority: route.priority || 0.5,
      alternates: [
        { lang: 'fr', href: `${BASE_URL}${frPath}` },
        { lang: 'en', href: `${BASE_URL}${enPath}` },
        { lang: 'x-default', href: `${BASE_URL}${frPath}` },
      ],
    };
    urlMap.set(enUrl.loc, enUrl);
  }

  // Ajouter les routes dynamiques
  for (const route of routes) {
    const fullPath = route.lang === 'en' && !route.path.startsWith('/en') 
      ? `/en${route.path}` 
      : route.path;
    
    const url: SitemapUrl = {
      loc: `${BASE_URL}${fullPath}`,
      lastmod: route.lastmod || new Date().toISOString().split('T')[0],
      changefreq: route.changefreq || 'weekly',
      priority: route.priority || 0.5,
      alternates: [],
    };

    // Construire les alternates basés sur le path
    const basePath = route.path.replace(/^\/en/, '');
    url.alternates = [
      { lang: 'fr', href: `${BASE_URL}${basePath}` },
      { lang: 'en', href: `${BASE_URL}/en${basePath}` },
      { lang: 'x-default', href: `${BASE_URL}${basePath}` },
    ];

    urlMap.set(url.loc, url);
  }

  return Array.from(urlMap.values());
}

/**
 * Fonction principale
 */
async function generateSitemap() {
  console.log('🚀 Génération du sitemap...');
  
  try {
    // Créer le dossier de sortie s'il n'existe pas
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Charger toutes les routes
    const dynamicRoutes = await loadDynamicRoutes();
    const allUrls = buildSitemapUrls(dynamicRoutes);
    
    console.log(`📊 Total URLs: ${allUrls.length}`);

    // Si moins de 50k URLs, générer un seul sitemap
    if (allUrls.length <= MAX_URLS_PER_SITEMAP) {
      const sitemapXml = generateSitemapXml(allUrls);
      const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
      fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
      console.log(`✅ Sitemap généré: ${sitemapPath}`);
    } else {
      // Générer plusieurs sitemaps avec un index
      const chunks: SitemapUrl[][] = [];
      const sitemapFiles: string[] = [];
      
      for (let i = 0; i < allUrls.length; i += MAX_URLS_PER_SITEMAP) {
        const chunk = allUrls.slice(i, i + MAX_URLS_PER_SITEMAP);
        chunks.push(chunk);
      }

      // Générer chaque sitemap
      chunks.forEach((chunk, index) => {
        const filename = `sitemap-${index}.xml`;
        const sitemapXml = generateSitemapXml(chunk);
        const sitemapPath = path.join(OUTPUT_DIR, filename);
        fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
        sitemapFiles.push(filename);
        console.log(`✅ Sitemap chunk généré: ${filename} (${chunk.length} URLs)`);
      });

      // Générer l'index
      const indexXml = generateSitemapIndexXml(sitemapFiles);
      const indexPath = path.join(OUTPUT_DIR, 'sitemap.xml');
      fs.writeFileSync(indexPath, indexXml, 'utf-8');
      console.log(`✅ Sitemap index généré: ${indexPath}`);
    }

    console.log('🎉 Génération terminée avec succès!');
    
    // Afficher un exemple de sortie
    console.log('\n📝 Exemple de sortie (première URL):');
    if (allUrls.length > 0) {
      console.log(generateUrlXml(allUrls[0]));
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération:', error);
    process.exit(1);
  }
}

// Exécuter si appelé directement
if (require.main === module) {
  generateSitemap();
}

export { generateSitemap };