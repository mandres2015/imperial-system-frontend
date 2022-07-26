/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
})

module.exports = nextConfig
