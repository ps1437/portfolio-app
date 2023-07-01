/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "dog.ceo"]
},
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.sanity.io',
      port: '',
      pathname: '/images/*',
    },
  ],
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  typescript:{
    ignoreBuildErrors: true,
  }

}

module.exports = nextConfig
