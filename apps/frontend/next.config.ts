import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/:path*",
        destination: "/blog/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
