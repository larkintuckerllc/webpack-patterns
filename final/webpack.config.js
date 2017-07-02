const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function(env) {
  return ({
    devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
    entry: {
      vendor: ['babel-polyfill', 'sillyname'],
      main: './src/index.js',
    },
    output: {
      filename: env === 'production' ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            plugins: ['syntax-dynamic-import'],
          }
        },
        {
          test: /\.(scss|css)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader'
              }
            ],
            fallback: 'style-loader'
          })
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new UglifyJSPlugin({sourceMap: true}),
      new ExtractTextPlugin('styles.[contenthash].css'),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new CleanWebpackPlugin(['dist']),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
        minChunks: Infinity,
      }),
    ]
  });
}
