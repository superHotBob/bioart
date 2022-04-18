/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  {
    plugins: [["styled-jsx/babel", { "optimizeForSpeed": true }]]
  }
}

module.exports = nextConfig
