/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  webpack(config, options) {
    //  To use svg images as react component
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // To transpile css file to string
    config.module.rules.push({
      test: /\.css$/,
      use: ['css-loader'],
    });

    return config;
  },
};

module.exports = nextConfig;
