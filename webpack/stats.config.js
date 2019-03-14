import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';

import baseConfig from './base.config';

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    bundle: path.resolve(__dirname, '../index.jsx'),
  },
  plugins: [new BundleAnalyzerPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
});
