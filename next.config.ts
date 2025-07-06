import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
  
  images: {
    unoptimized: true, // Required for static export to work with next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
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
