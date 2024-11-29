import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  // Configuração do proxy para redirecionar as requisições para a API do ZenQuotes
  async rewrites() {
    return [
      {
        source: '/proxy/:path*', // Quando a requisição for para /proxy
        destination: 'https://zenquotes.io/api/random', // O destino da API do ZenQuotes
      },
    ];
  },
};

module.exports = nextConfig;

export default nextConfig;
