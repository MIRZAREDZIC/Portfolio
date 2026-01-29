/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  },
  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://portfolio:8443/api/:path*'
      }
    ]
  },
  
  env: {
    NEXT_PUBLIC_API_URL: 'http://portfolio:8443/api'
  }
}

export default nextConfig

