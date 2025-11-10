import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'ddragon.leagueoflegends.com',
              pathname: '/cdn/**'
          },
          {
              protocol: 'https',
              hostname: 'github.com',
              pathname: '/**',
          },

      ]
  }
};

export default nextConfig;
