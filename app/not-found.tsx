import Link from 'next/link';
import { Search, Home, Code, Briefcase, Mail, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 - Page non trouvée | Yathra',
  description: 'La page que vous recherchez n&apos;existe pas. Découvrez nos services de développement web et mobile.',
  robots: 'noindex, follow', // Important : noindex pour éviter l'indexation des 404
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Code d'erreur animé */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-gray-900">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-primary text-6xl animate-pulse">⚠</div>
          </div>
        </div>

        {/* Message principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page introuvable
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* Barre de recherche (décorative) */}
        <div className="mb-10">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher sur le site..."
              className="w-full px-5 py-3 pl-12 bg-gray-900 border border-gray-800 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-primary"
              disabled
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
          <p className="text-xs text-gray-600 mt-2">La recherche sera bientôt disponible</p>
        </div>

        {/* Liens utiles */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Pages populaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 rounded-lg hover:bg-gray-800 hover:border-primary border border-gray-800 transition-all text-gray-300 hover:text-primary"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 rounded-lg hover:bg-gray-800 hover:border-primary border border-gray-800 transition-all text-gray-300 hover:text-primary"
            >
              <Code className="w-4 h-4" />
              <span>Nos Services</span>
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 rounded-lg hover:bg-gray-800 hover:border-primary border border-gray-800 transition-all text-gray-300 hover:text-primary"
            >
              <Briefcase className="w-4 h-4" />
              <span>Projets</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 rounded-lg hover:bg-gray-800 hover:border-primary border border-gray-800 transition-all text-gray-300 hover:text-primary"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* CTA principal */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          
          <p className="text-gray-500 text-sm">
            Besoin d&apos;aide ? <Link href="/contact" className="text-primary hover:underline">Contactez-nous</Link>
          </p>
        </div>

        {/* Info technique (optionnel) */}
        <div className="mt-12 text-xs text-gray-600">
          <p>Code d&apos;erreur : 404 | Not Found</p>
          <p>Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur, veuillez nous le signaler.</p>
        </div>
      </div>
    </div>
  );
}