/** @type {import('next').NextConfig} */


const widthPWA = require('next-pwa')

const nextConfig = widthPWA({
  reactStrictMode: true,
  pwa:{
    dest: "public",
    register: true,
    skipWaiting: true,
  }
}) 

module.exports = nextConfig
