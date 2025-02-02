/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/project',
            destination: '/project/list',
            permanent: true, 
          },
          {
            source: '/auth',
            destination: '/',
            permanent: true, 
          },
        ]
      },
      webpack: (config) => {
        // Ignore the 'undici' module if not needed for client-side code
        config.resolve.alias['undici'] = false;
    
        return config;
      },
}

module.exports = nextConfig
