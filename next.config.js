/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'flagcdn.com',
      'upload.wikimedia.org',
      'restcountries.com',
      'picsum.photos',
      'swiperjs.com',
    ],
  },
}

module.exports = nextConfig
