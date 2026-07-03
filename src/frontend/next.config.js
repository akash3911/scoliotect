/** @type {import('next').NextConfig} */

const repo = "scoliotect";
const isGithubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",

  images: {
    unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
