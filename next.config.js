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
      's3.amazonaws.com',
      'images-na.ssl-images-amazon.com',
      'phantom-marca.unidadeditorial.es',
      'www.magazinema.es',
      'movierob.files.wordpress.com',
      'img2.rtve.es',
      'occ-0-1555-116.1.nflxso.net',
      'cloudfront-us-east-1.images.arcpublishing.com',
      'media.revistagq.com',
      'fotografias.antena3.com',
      'thecinemaholic.com',
      'static.wikia.nocookie.net',
      'occ-0-1555-3212.1.nflxso.net',
      'imgtoolkit.culturebase.org',
      'img.aullidos.com',
      'terrigen-cdn-dev.marvel.com',
      'static.filmin.es'
    ]
  },
  env: {
    nextApiURL: process.env.API_URL
  }
}

module.exports = nextConfig
