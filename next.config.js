/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      'static3.srcdn.com',
      'i0.wp.com',
      'hips.hearstapps.com',
      'm.media-amazon.com',
      'pics.filmaffinity.com',
      'lumiere-a.akamaihd.net',
      's3.amazonaws.com'
    ]
  }
}

module.exports = nextConfig
