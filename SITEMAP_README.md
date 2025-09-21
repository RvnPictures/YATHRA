# 📍 Documentation Sitemap - Production Ready

## 🚀 Installation & Configuration

### 1. Installation des dépendances (si nécessaire)
```bash
npm install --save-dev tsx @types/node
```

### 2. Configuration de l'URL de base
Modifiez la variable `BASE_URL` dans les fichiers suivants :
- `app/sitemap.ts` : Pour la génération automatique Next.js
- `scripts/generate-sitemap.ts` : Pour la génération via script

Ou définissez la variable d'environnement :
```bash
# .env.local ou .env.production
NEXT_PUBLIC_SITE_URL=https://yathra.fr
```

## 🎯 Usage

### Méthode A : Génération automatique avec Next.js App Router (Recommandée)

Le sitemap est généré automatiquement à l'URL `/sitemap.xml` grâce au fichier `app/sitemap.ts`.

**Avantages :**
- ✅ Génération automatique au build
- ✅ Support natif du multilingue via `alternates`
- ✅ Mise à jour dynamique possible
- ✅ Compatible avec l'ISR (Incremental Static Regeneration)

**Test local :**
```bash
npm run dev
# Puis visitez : http://localhost:3000/sitemap.xml
```

**Déploiement sur Vercel :**
```bash
git add .
git commit -m "feat: add multilingual sitemap"
git push origin main
# Vercel déploiera automatiquement
```

### Méthode B : Génération via script (Build statique)

Pour générer un sitemap statique dans `/public` :

```bash
# Génération manuelle
npm run generate:sitemap

# Ou automatiquement avant chaque build
npm run build  # Exécute prebuild -> generate:sitemap -> build
```

## 📊 Structure du Sitemap

### Exemple de sortie (avec hreflang)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://yathra.fr</loc>
    <lastmod>2025-09-21</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="https://yathra.fr"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://yathra.fr/en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yathra.fr"/>
  </url>
  <url>
    <loc>https://yathra.fr/projects/paradice-bar</loc>
    <lastmod>2025-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="https://yathra.fr/projects/paradice-bar"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://yathra.fr/en/projects/paradice-bar"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://yathra.fr/projects/paradice-bar"/>
  </url>
</urlset>
```

### Sitemap Index (pour > 50k URLs)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://yathra.fr/sitemap-0.xml</loc>
    <lastmod>2025-09-21</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://yathra.fr/sitemap-1.xml</loc>
    <lastmod>2025-09-21</lastmod>
  </sitemap>
</sitemapindex>
```

## 🔧 Personnalisation

### Ajouter des routes dynamiques

#### Option 1 : Via API (app/sitemap.ts)
```typescript
async function getDynamicRoutes() {
  const response = await fetch('https://api.yathra.fr/content');
  const data = await response.json();
  return data.map(item => ({
    slug: item.slug,
    lastModified: new Date(item.updatedAt),
    type: item.type
  }));
}
```

#### Option 2 : Via fichier JSON (data/routes.json)
```json
[
  {
    "path": "/nouvelle-page",
    "lang": "fr",
    "lastmod": "2025-10-01",
    "changefreq": "weekly",
    "priority": 0.8
  }
]
```

#### Option 3 : Via base de données
```typescript
import { prisma } from '@/lib/prisma';

async function getDynamicRoutes() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true }
  });
  return posts;
}
```

### Modifier les priorités et fréquences

Éditez les valeurs dans `app/sitemap.ts` :

```typescript
const staticRoutes: RouteConfig[] = [
  {
    path: 'votre-page',
    priority: 0.9,  // 0.0 à 1.0
    changeFrequency: 'weekly', // always|hourly|daily|weekly|monthly|yearly|never
  }
];
```

## 🤖 Configuration robots.txt

Le fichier `app/robots.ts` génère automatiquement :
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://yathra.fr/sitemap.xml
```

## 🎯 Bonnes pratiques SEO

### Priorités recommandées
- `1.0` : Page d'accueil
- `0.9` : Pages de services principales, catégories
- `0.8` : Pages "À propos", "Contact"
- `0.7` : Articles de blog, projets individuels
- `0.5` : Pages d'archives, tags

### Fréquences de mise à jour
- `daily` : Page d'accueil, pages très actives
- `weekly` : Blog, actualités, pages mises à jour régulièrement
- `monthly` : Pages de services, portfolio
- `yearly` : Mentions légales, CGV

### LastModified
- Utilisez la date réelle de dernière modification du contenu
- Évitez d'utiliser la date de build pour toutes les pages
- Pour les pages statiques, utilisez la date de dernière modification significative

## 🔍 Validation & Test

### Test local
```bash
# Lancer le serveur de dev
npm run dev

# Tester le sitemap
curl http://localhost:3000/sitemap.xml

# Tester robots.txt
curl http://localhost:3000/robots.txt
```

### Validation en ligne
1. [Google XML Sitemaps Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
2. [Sitemap Validator](https://www.websiteplanet.com/webtools/sitemap-validator/)
3. Google Search Console après déploiement

### Soumission aux moteurs de recherche
```bash
# Google
https://search.google.com/search-console/sitemaps

# Bing
https://www.bing.com/webmasters/sitemaps

# Via curl (ping Google)
curl "https://www.google.com/ping?sitemap=https://yathra.fr/sitemap.xml"
```

## ⚠️ Points d'attention

### À éviter
- ❌ URLs en double dans le sitemap
- ❌ Pages avec `noindex` dans le sitemap
- ❌ URLs de preview (*.vercel.app)
- ❌ Pages 404 ou redirections
- ❌ URLs avec paramètres de session

### À vérifier
- ✅ Toutes les URLs retournent un status 200
- ✅ Les dates `lastmod` sont cohérentes
- ✅ Les alternates linguistiques sont bidirectionnelles
- ✅ Le sitemap est < 50MB et < 50k URLs
- ✅ L'encodage UTF-8 est respecté

## 🚢 Déploiement sur Vercel

### Configuration automatique
Le sitemap est généré automatiquement lors du build sur Vercel.

### Variables d'environnement
Dans les settings Vercel, ajoutez :
```
NEXT_PUBLIC_SITE_URL = https://yathra.fr
```

### CI/CD Pipeline
```yaml
# .github/workflows/sitemap.yml (si GitHub Actions)
name: Generate Sitemap
on:
  schedule:
    - cron: '0 2 * * *' # Quotidien à 2h
  push:
    branches: [main]

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run generate:sitemap
      - run: npm run build
```

## 📈 Monitoring

### Google Search Console
1. Vérifiez la propriété
2. Soumettez le sitemap via "Sitemaps"
3. Surveillez les erreurs d'indexation
4. Vérifiez la couverture

### Analytics recommandés
- Pages indexées vs soumises
- Erreurs de crawl
- Performance des pages (Core Web Vitals)
- Taux de clic depuis les résultats de recherche

## 🆘 Support & Debug

### Erreurs communes

**"Module not found: tsx"**
```bash
npm install --save-dev tsx
```

**"Cannot find module '@/...' "**
```bash
# Assurez-vous que tsconfig.json contient les paths
"paths": {
  "@/*": ["./*"]
}
```

**Sitemap vide ou erreur 404**
- Vérifiez que `app/sitemap.ts` est bien exporté par défaut
- Vérifiez les logs de build Vercel
- Testez localement avec `npm run build && npm start`

## 📚 Ressources

- [Next.js Sitemap Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Google Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [Hreflang Guidelines](https://developers.google.com/search/docs/advanced/crawling/localized-versions)
- [Vercel Deployment](https://vercel.com/docs/concepts/deployments/overview)