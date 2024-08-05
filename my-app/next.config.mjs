// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      // other experimental options if needed
    },
    compiler: {
      // other compiler options if needed
      react: {
        throwIfNamespace: false, // Allow JSX namespaces
      },
    },
  };
  
  export default nextConfig;
  