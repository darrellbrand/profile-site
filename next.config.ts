import type { NextConfig } from "next";
const repoName = 'profile-site-static';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
