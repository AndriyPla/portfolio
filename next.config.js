/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow local images from /public
    remotePatterns: [],
  },
}

module.exports = nextConfig
