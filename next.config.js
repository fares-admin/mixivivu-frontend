/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ['minio.fares.vn'],
      },

};

module.exports = nextConfig;
