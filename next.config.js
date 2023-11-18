/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  reactStrictMode: true,
  images: {
    // domains: ['flagcdn.com', 'upload.wikimedia.org', 'restcountries.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'restcountries.com',
      },
    ],
  },
}

module.exports = nextConfig

//
