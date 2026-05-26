/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
