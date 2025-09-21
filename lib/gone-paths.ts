/**
 * Liste des URLs supprimées définitivement (410 Gone)
 * Ces pages retourneront un statut HTTP 410 + header X-Robots-Tag: noindex
 * 
 * IMPORTANT : 
 * - N'ajoutez ici QUE les pages supprimées DÉFINITIVEMENT
 * - Les pages temporairement indisponibles doivent retourner 404
 * - Pensez à retirer ces URLs du sitemap.xml
 */

export const gonePaths = new Set<string>([
  // Anciennes pages de services supprimées
  '/services/webdesign-flash',           // Flash deprecated
  '/services/development-silverlight',   // Technologie obsolète
  
  // Anciens projets retirés du portfolio
  '/projects/old-client-2019',          // Client n'existe plus
  '/portfolio/archived-work',           // Section supprimée
  
  // Anciennes URLs de blog
  '/blog/wordpress-vs-joomla-2020',     // Article obsolète
  '/actualites/flash-end-of-life',      // Contenu périmé
  
  // Pages de campagnes marketing expirées
  '/promo/black-friday-2023',           // Promotion terminée
  '/offre/summer-deal-2023',            // Offre expirée
  
  // Anciennes versions de pages
  '/v1/about',                          // Ancienne version du site
  '/old/contact-form',                  // Ancien formulaire
  
  // Pages de test ou staging qui ont fuité
  '/test/demo-page',
  '/staging/preview-feature',
  
  // Ajouter de nouvelles URLs ici au format :
  // '/path/to/deleted/page',
]);

/**
 * Fonction helper pour vérifier si un path doit retourner 410
 * @param pathname - Le chemin à vérifier (sans query string)
 * @returns true si le path doit retourner 410 Gone
 */
export function isGonePath(pathname: string): boolean {
  // Normaliser le path (enlever trailing slash si présent)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  return gonePaths.has(normalizedPath);
}

/**
 * Obtenir toutes les URLs 410 (utile pour monitoring)
 * @returns Array de tous les paths qui retournent 410
 */
export function getAllGonePaths(): string[] {
  return Array.from(gonePaths);
}