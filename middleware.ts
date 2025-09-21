import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Liste des paths qui doivent retourner 410 Gone
const gonePaths = new Set([
  '/services/webdesign-flash',
  '/services/development-silverlight',
  '/projects/old-client-2019',
  '/portfolio/archived-work',
  '/blog/wordpress-vs-joomla-2020',
  '/actualites/flash-end-of-life',
  '/promo/black-friday-2023',
  '/offre/summer-deal-2023',
  '/v1/about',
  '/old/contact-form',
  '/test/demo-page',
  '/staging/preview-feature',
]);

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hostname = request.headers.get('host') || '';
  
  // Normaliser le path
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // 1. Gestion des URLs 410 Gone
  if (gonePaths.has(normalizedPath)) {
    // Retourner 410 avec noindex pour les contenus supprimés définitivement
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <title>410 - Contenu supprimé | Yathra</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    body { 
      font-family: system-ui, sans-serif; 
      background: #000; 
      color: #fff; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      height: 100vh; 
      margin: 0;
    }
    .container { text-align: center; }
    h1 { font-size: 72px; margin: 0; color: #666; }
    p { color: #999; margin: 20px 0; }
    a { color: #35D79C; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <h1>410</h1>
    <h2>Contenu supprimé définitivement</h2>
    <p>Cette page a été retirée de façon permanente.</p>
    <p><a href="/">Retour à l'accueil</a></p>
  </div>
</body>
</html>`,
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'public, max-age=31536000', // Cache 1 an pour les 410
        },
      }
    );
  }

  // 2. Noindex pour les previews Vercel (*.vercel.app)
  if (hostname.includes('.vercel.app')) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
    return response;
  }

  // 3. Optionnel : Redirection www vers non-www (ou inverse)
  // if (hostname.startsWith('www.')) {
  //   return NextResponse.redirect(
  //     new URL(request.url.replace('://www.', '://'), request.url)
  //   );
  // }

  // 4. Laisser passer toutes les autres requêtes
  return NextResponse.next();
}

// Configuration du middleware
export const config = {
  matcher: '/:path*',
};