/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/scoliotect',
  images: {
    unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
