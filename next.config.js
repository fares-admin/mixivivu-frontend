/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/images/add-new',
          destination: `${process.env.API_IMAGE_URL}/api/images/add-new`,
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
