const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withImages = require('next-images');

module.exports = withBundleAnalyzer(
  withImages({
    webpack: function (config) {
      const originalEntry = config.entry;

      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
          entries['main.js'].unshift('./polyfills.js')
        }
        return entries;
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, "./src")
      };

      return config;
    },
  })
);
