// import path from 'path';

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
              modules: true,
            },
          },
        ],
      },
    ],
  },
  // resolve: {
  //   mainFields: ['module', 'main'],
  //   modules: ['node_modules', path.resolve(__dirname, '../')],
  //   extensions: ['.ts', '.tsx', '.js', '.css'],
  // },

  target: 'web',
  stats: 'none',
};

module.exports = config;
