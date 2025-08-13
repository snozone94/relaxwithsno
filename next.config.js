/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable the App Router if you wish to build pages under the `app` directory.
    appDir: false
  }
};

module.exports = nextConfig;
