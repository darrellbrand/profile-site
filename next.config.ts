import type { NextConfig } from "next";
const repoName = 'profile-site';
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true, // ensures directories end in `/` for static
};

export default nextConfig;
