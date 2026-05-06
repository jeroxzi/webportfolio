import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/JeroxziPortfolio' : '',
  images: {
    unoptimized: true,
  },
  // If you are using a custom domain later, you might need to remove basePath
};

export default nextConfig;
