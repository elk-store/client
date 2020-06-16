const withImages = require('next-images');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { version } = require('./package.json');

module.exports = withImages({
  webpack(config) {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  generateBuildId: async () => version,
  experimental: {
    reactRefresh: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
  typescript: {
    ignoreDevErrors: true,
  },
});
