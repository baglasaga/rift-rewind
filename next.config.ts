import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [new URL("https://github.com/*"), new URL("https://ddragon.leagueoflegends.com/cdn/15.22.1/img/champion/*")]
  }
};

export default nextConfig;
