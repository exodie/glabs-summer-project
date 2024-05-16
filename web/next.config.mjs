/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skifmusic.ru',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.fmicassets.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.fender.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'ibanez.ru',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
