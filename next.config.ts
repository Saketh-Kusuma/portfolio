import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // Prefer AVIF (20% smaller than WebP), fall back to WebP, then original.
    formats: ["image/avif", "image/webp"],
    // Cache optimised images on disk for 31 days (vs the 4 h default).
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/**",
      },
    ],
  },
  allowedDevOrigins: ['192.168.0.103'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);