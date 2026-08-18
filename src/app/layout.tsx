import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import UtmifyScript from "../components/UtmifyScript";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit de Protocolos Somáticos | NeuroSoma",
  description:
    "+90 Protocolos Somáticos para psicólogos, psiquiatras e terapeutas. Desbloqueie o corpo quando a fala chega no limite. Acesso imediato com garantia de 7 dias.",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={plusJakarta.className}>
      <head>
        {/* Resource Hints to speed up Kirvano checkout transition */}
        <link rel="preconnect" href="https://pay.kirvano.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pay.kirvano.com" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        {/* Preload Hero image so browser fetches it immediately during HTML parse */}
        <link rel="preload" href="/imageHero2.webp" as="image" type="image/webp" fetchPriority="high" />
      </head>
      <body>
        <UtmifyScript />
        {children}
      </body>
    </html>
  );
}
