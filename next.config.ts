import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/**"),
      new URL("https://img.youtube.com/**"),
    ],
  },
};

export default nextConfig;
