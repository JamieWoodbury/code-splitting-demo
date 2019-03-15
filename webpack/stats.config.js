const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, '../index.jsx'),
  },
  plugins: [new BundleAnalyzerPlugin()],
});
