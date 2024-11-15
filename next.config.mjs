/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: process.env.NODE_ENV === 'production',
  
    images: {
      formats: process.env.NODE_ENV === 'production' ? ['image/avif', 'image/webp'] : [],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
  
    typescript: {
      ignoreBuildErrors: false,
    },
  
    reactStrictMode: process.env.NODE_ENV === 'production',
  
    onDemandEntries: {
      maxInactiveAge: 60 * 1000,
      pagesBufferLength: 5,
    },
  }
  
  export default nextConfig;
  