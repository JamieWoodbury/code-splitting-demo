const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.config');

const DEV_PORT = 8181;

const config = merge(base, {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    inline: true,
    port: DEV_PORT,
    contentBase: path.join(__dirname, '../build'),
    https: false,
    stats: {
      assets: true,
    },
    // stats: 'minimal',
    historyApiFallback: true,
  },
});

module.exports = config;
