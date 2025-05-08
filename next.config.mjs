/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  
  // Optimize JavaScript
  experimental: {
    // Use modern JavaScript features without unnecessary transpilation
    optimizePackageImports: ['lucide-react'],
    // Optimize CSS
    optimizeCss: true,
    // Use modern JavaScript features
    serverActions: true,
  },
  
  // Configure webpack to avoid unnecessary transpilation
  webpack: (config, { dev, isServer }) => {
    // Only apply these optimizations in production
    if (!dev) {
      // Add browserslist to target modern browsers
      config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOfRule) => {
            if (
              oneOfRule.use &&
              oneOfRule.use.loader &&
              oneOfRule.use.loader.includes('next/dist/build/webpack/loaders/next-swc-loader')
            ) {
              if (!oneOfRule.use.options) {
                oneOfRule.use.options = {};
              }
              if (!oneOfRule.use.options.jsc) {
                oneOfRule.use.options.jsc = {};
              }
              if (!oneOfRule.use.options.jsc.transform) {
                oneOfRule.use.options.jsc.transform = {};
              }
              
              // Target modern browsers to avoid unnecessary transpilation
              oneOfRule.use.options.jsc.transform.target = 'es2020';
            }
          });
        }
      });
    }
    
    return config;
  },
  
  // Optimize headers for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
