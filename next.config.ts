import type { NextConfig } from "next";
import path from "path";

const splinePath = path.resolve(
  "./node_modules/@splinetool/react-spline/dist/react-spline.js"
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
      {
        protocol: "https",
        hostname: "html.tailus.io",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      "@splinetool/react-spline":
        "@splinetool/react-spline/dist/react-spline.js",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@splinetool/react-spline": splinePath,
    };
    return config;
  },
};

export default nextConfig;
