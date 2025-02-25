/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'my-first-nextjs-demo-users-image.s3.us-east-2.amazonaws.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;