import { NextRequest } from 'next/server';

/**
 * Edge Function pour retourner 410 Gone
 * Utilisée via rewrites dans vercel.json pour les contenus supprimés
 */
export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
        .container {
            text-align: center;
        }
        h1 {
            font-size: 120px;
            margin: 0;
            background: linear-gradient(90deg, #666 0%, #333 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        h2 {
            color: #999;
            font-size: 24px;
            margin: 20px 0;
        }
        p {
            color: #666;
            margin: 20px 0;
        }
        a {
            color: #35D79C;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>410</h1>
        <h2>Contenu supprimé définitivement</h2>
        <p>Cette page n'est plus disponible et ne le sera plus.</p>
        <p><a href="/">Retour à l'accueil</a></p>
    </div>
</body>
</html>`;

  return new Response(html, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=31536000', // Cache 1 an
    },
  });
}