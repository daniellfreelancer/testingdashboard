/** @type {import('next').NextConfig} */


// const widthPWA = require('next-pwa')

// const nextConfig = widthPWA({
//   reactStrictMode: true,
//   pwa:{
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   }
// }) 

// module.exports = nextConfig


const withPWA = require('next-pwa');

const pwaConfig = {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

const nextConfig = {
  // cualquier otra configuración de Next.js que desee establecer
};

module.exports = withPWA(Object.assign({}, nextConfig, pwaConfig));
