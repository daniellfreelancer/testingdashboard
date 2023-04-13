/** @type {import('next').NextConfig} */


const widthPWA = require('next-pwa')

// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = widthPWA({
  reactStrictMode: true,
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development"
  }
})
