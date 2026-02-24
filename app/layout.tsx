import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yathra-WebSite - Digital Product Agency",
  description:
    "An award-winning design agency transforming businesses through creative strategy, branding, and powerful web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          async
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
