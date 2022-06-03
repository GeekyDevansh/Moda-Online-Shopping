/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
},
images: {
  domains: ["cdn.sanity.io"],
},
}

module.exports = nextConfig
