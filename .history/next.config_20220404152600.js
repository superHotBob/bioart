/** @type {import('next').NextConfig} */
const nextConfig =
  
  {reactStrictMode: true,
    plugins: [["styled-jsx/babel", { "optimizeForSpeed": true }]]
  }


module.exports = nextConfig
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});