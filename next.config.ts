import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  logging: false,
  experimental: {
    cssChunking: "strict",
  },
};

export default nextConfig;
