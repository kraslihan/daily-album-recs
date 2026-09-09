import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Deezer cover art CDNs
      { protocol: "https", hostname: "*.dzcdn.net" },
      { protocol: "https", hostname: "api.deezer.com" },
    ],
  },
};

export default nextConfig;
