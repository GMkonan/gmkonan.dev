/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, "process": require.resolve("process/browser") };
    return config;
  },
}