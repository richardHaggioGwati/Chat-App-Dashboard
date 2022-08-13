/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com']
  },
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
}

module.exports = nextConfig
