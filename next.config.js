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


// const withPWA = require('next-pwa');

// const pwaConfig = {
//   pwa: {
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//   },
// };

// const nextConfig = {
//   // cualquier otra configuración de Next.js que desee establecer
// };

// module.exports = withPWA(Object.assign({}, nextConfig, pwaConfig));


const withPWA = require('next-pwa');

const nextConfig = {
  // cualquier otra configuración de Next.js que desee establecer
  reactStrictMode: true,
};

const pwaConfig = {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    // otras opciones de configuración que desee establecer para la biblioteca next-pwa
  },
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
