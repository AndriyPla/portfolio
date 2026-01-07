/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || '/portfolio'
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: 'export',
  basePath: basePath,
  assetPrefix: process.env.NEXT_ASSET_PREFIX || basePath,
  images: {
    // Disable server image optimization for static export
    unoptimized: true,
    remotePatterns: [],
  },
}

module.exports = nextConfig
