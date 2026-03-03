// next.config.js
// Production API URL (for GitHub visibility - recruiters can see production setup)
// In development, use .env.local to override with local API URL
const PRODUCTION_API_URL = 'https://mirzaredzic.duckdns.org/api';
const PRODUCTION_DOMAIN = 'mirzaredzic.duckdns.org';

// Get API URL from environment or fallback to local development
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://portfolio:8443/api';
const isDevelopment = process.env.NODE_ENV === 'development';

export default {
    output: 'standalone',
    transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
    async headers() {
        // CSP: Allow both local and production domains
        const cspConnectSrc = isDevelopment 
            ? `'self' http://localhost:* http://portfolio:* ${PRODUCTION_API_URL} https://*.duckdns.org wss://*.duckdns.org`
            : `'self' ${PRODUCTION_API_URL} https://*.duckdns.org wss://*.duckdns.org`;
        
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src ${cspConnectSrc};`
                    },
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
        // Only use rewrites in production, in development use direct API calls
        if (isDevelopment) {
            return [];
        }
        
        return [
            {
                source: '/api/:path*',
                destination: `${PRODUCTION_API_URL}/:path*`
            },
            {
                source: '/contents',
                destination: `${PRODUCTION_API_URL}/contents`
            },
            {
                source: '/login',
                destination: `${PRODUCTION_API_URL}/login`
            }
        ]
    },
    // Note: NEXT_PUBLIC_API_URL should be set in .env.local for local development
    // Production URL (for reference): https://mirzaredzic.duckdns.org/api
    // The env section is intentionally removed to allow .env.local to work properly
};
