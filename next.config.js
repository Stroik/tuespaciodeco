/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tuespaciodeco.local', "tuespaciodeco.com.ar"],
  },
};

module.exports = nextConfig;
