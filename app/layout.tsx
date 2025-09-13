import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Yathra – Agence Web & SaaS sur Mesure",
  description: "Yathra offre des services professionnels de développement web et mobile sur mesure pour transformer vos idées en solutions digitales innovantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "antialiased")}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}