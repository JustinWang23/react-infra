const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
