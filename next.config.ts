import type {NextConfig} from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  
  // This tells Next.js to copy the 'Assets' folder to the static export directory.
  // This is the key change to make the favicons available.
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
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
