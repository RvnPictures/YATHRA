import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Yathra - Agence Web Paris | Développement Application Mobile & SaaS | React Next.js",
  description: "Agence web Paris spécialisée en développement d'applications mobiles iOS/Android et sites web sur mesure. Experts React, Next.js, Node.js. +50 projets livrés. Devis gratuit sous 48h. ROI garanti.",
  keywords: "agence web paris, développement application mobile, création site internet, agence digitale, développement saas, react developer, next.js, node.js, transformation digitale, agence web france",
  authors: [{ name: "Yathra" }],
  creator: "Yathra",
  publisher: "Yathra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yathra.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Yathra - Agence Web & Mobile Paris | Solutions Digitales Sur Mesure",
    description: "Transformez vos idées en solutions digitales performantes. Développement web, applications mobiles, plateformes SaaS. +50 projets réussis.",
    url: 'https://yathra.fr',
    siteName: 'Yathra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yathra - Agence Web Paris',
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yathra - Agence Web & Mobile Paris",
    description: "Experts en développement web et mobile. React, Next.js, Node.js. Solutions sur mesure pour startups et PME.",
    images: ['/twitter-image.jpg'],
    creator: '@yathra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "antialiased")}>
        <LanguageProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <LanguageSelector />
        </LanguageProvider>
      </body>
    </html>
  );
}