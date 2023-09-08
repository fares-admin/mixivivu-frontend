/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/images/add-new',
          destination: `https://images-mixi.fares.vn/api/images/add-new`,
        },
        {
          source: '/send_email',
          destination: `https://api-mixi.fares.vn/send_email`,
        },
      ]
    },
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ['minio.fares.vn'],
      },

};

module.exports = nextConfig;
