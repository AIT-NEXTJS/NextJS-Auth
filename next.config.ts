import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://api.escuelajs.co/api/v1/files/**"),
      new URL("https://i.imgur.com/**"),
    ],
  },
};

export default nextConfig;
