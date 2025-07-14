import type {NextConfig} from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  
  // This allows you to serve static files from the 'Assets' directory.
  // The path is resolved relative to the project root.
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Assets' : undefined,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['/Assets'] = join(__dirname, 'Assets');
    }
    return config;
  },

  images: {
    unoptimized: true, // Required for static export to work with next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'download.logo.wine',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cyrutech.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'www.favicon.cc',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
