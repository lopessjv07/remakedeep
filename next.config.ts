import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack root explicitamente configurado para o diretório remake
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Habilita o compilador do React para otimização automática de renderização
  reactCompiler: true,

  // Gera um servidor standalone mínimo para deploy Docker
  output: "standalone",

  // Permite proxy reverso (Traefik/Coolify) no modo dev
  allowedDevOrigins: ["neurosoma.online", "*.neurosoma.online"],

  // Otimização de pacotes para reduzir tamanho do JS bundle
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Otimização de imagem ativa — redimensiona, converte formato e gera srcset automático
  images: {
    // Formatos de saída: AVIF (menor) com fallback WebP
    formats: ["image/avif", "image/webp"],
    // Breakpoints de dispositivo alinhados com o layout do site
    deviceSizes: [640, 750, 828, 1080, 1200],
    // Tamanhos menores para imagens que não ocupam tela cheia
    imageSizes: [128, 256, 384],
    // Cache longo — imagens de marketing são estáticas
    minimumCacheTTL: 2678400, // 31 dias
  },

  async headers() {
    return [
      {
        source: "/:path*.(webp|png|jpg|jpeg|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
