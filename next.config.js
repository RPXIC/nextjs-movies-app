/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['static3.srcdn.com', 'i0.wp.com', 'hips.hearstapps.com']
  }
}

module.exports = nextConfig
