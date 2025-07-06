import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  // Note: Before deploying to GitHub Pages, you must update the following
  // configuration to match your repository name. If your repository is at
  // https://github.com/<username>/<repo-name>, then you should set:
  //
  // basePath: '/<repo-name>',
  //
  // For more information, see:
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#github-pages
  
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
