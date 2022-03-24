/** @type {import('next').NextConfig} */

const StylelintPlugin = require("stylelint-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new StylelintPlugin());

    return config;
  },
}

module.exports = nextConfig
