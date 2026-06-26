/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "scoliotect";

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  images: {
    unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;