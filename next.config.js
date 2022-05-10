/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://voteit-api.washnix.com:3000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
