/** @type {import('next').NextConfig} */
const nextConfig =
  
  {reactStrictMode: true,
    plugins: [["styled-jsx/babel", { "optimizeForSpeed": true }]]
  }


// module.exports = nextConfig
import { withPWA } from  "next-pwa";

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});