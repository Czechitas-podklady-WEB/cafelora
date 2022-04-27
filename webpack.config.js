const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    assetModuleFilename: 'img/[name]-[hash:6].[ext]'
  },
  devServer: {
    static: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
        { from: 'src/favicon.ico', to: '', noErrorOnMissing: true },
        { from: 'src/index.html', to: '' },
      ],
    }),
  ],
};
