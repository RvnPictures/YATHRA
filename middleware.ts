import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isGonePath } from './lib/gone-paths';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hostname = request.headers.get('host') || '';
  
  // 1. Gestion des URLs 410 Gone
  if (isGonePath(pathname)) {
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
  // Appliquer le middleware à toutes les routes sauf :
  // - API routes
  // - Static files (_next/static, favicon, etc.)
  // - Image optimization files (_next/image)
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - Images and other static assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};