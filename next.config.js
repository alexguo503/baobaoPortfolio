/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'www.nps.gov', 'images.unsplash.com', 'assets.codepen.io', 'dummyimage.com'],
    // deviceSizes: [640, 750, 828.1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
