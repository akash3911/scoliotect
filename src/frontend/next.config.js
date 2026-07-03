/** @type {import('next').NextConfig} */

const repo = "scoliotect";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

module.exports = {
  reactStrictMode: true,

  output: "export",

  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",

  images: {
    unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
};
