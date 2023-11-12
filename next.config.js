/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
