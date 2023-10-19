const path = require('path',);

const { CleanWebpackPlugin, } = require('clean-webpack-plugin',);
const HtmlWebpackPlugin = require('html-webpack-plugin',);
const MiniCssExtractPlugin = require('mini-css-extract-plugin',);
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin',);
const TerserPlugin = require('terser-webpack-plugin',);

const buildPath = path.resolve(__dirname, 'dist',);

const { returnEntries, } = require('./webpack.helpers',);

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/pages/index/scripts.js',
    about: './src/pages/about/scripts.js',
    contacts: './src/pages/contacts/scripts.js',
  },

  // how to write the compiled files to disk
  // https://webpack.js.org/concepts/output/
  output: {
    filename: 'assets/js/[name].[hash:20].js',
    path: buildPath,
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$|njk|nunjucks/,
        use: ['html-loader',{
          loader: 'nunjucks-html-loader',
          options : {
            searchPaths: [
              ...returnEntries('./src/pages/**/',), 
              ...returnEntries('./src/pages/**/partials/**',), 
              ...returnEntries('./src/partials/**/',),],
          },
        },],
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/img/[name].[hash:20].[ext]',
              esModule: false,
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: { name: 'assets/fonts/[name].[ext]', },
          },
        ],
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(), // cleans output.path by default
    new HtmlWebpackPlugin({
      template: './src/pages/index/index.html',
      inject: 'body',
      chunks: ['index',],
      filename: 'index.html',
    },),
    new HtmlWebpackPlugin({
      template: './src/pages/about/index.html',
      inject: 'body',
      chunks: ['about',],
      filename: 'about.html',
    },),
    new HtmlWebpackPlugin({
      template: './src/pages/contacts/index.html',
      inject: 'body',
      chunks: ['contacts',],
      filename: 'contacts.html',
    },),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
      chunkFilename: 'assets/css/[id].[contenthash].css',
    },),
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      },),
      new OptimizeCssAssetsPlugin({},),
    ],
  },
};
