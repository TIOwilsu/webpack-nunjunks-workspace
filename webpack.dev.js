const HtmlWebpackPlugin = require('html-webpack-plugin',);
const { returnEntries, } = require('./webpack.helpers',);

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/pages/index/scripts.js',
    about: './src/pages/about/scripts.js',
    contacts: './src/pages/contacts/scripts.js',
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    writeToDisk: false, // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
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
          'style-loader',
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
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: 'assets/img/[path][name].[ext]?hash=[hash:20]',
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
    new HtmlWebpackPlugin({
      template: './src/pages/index/index.html',
      inject: true,
      chunks: ['index',],
      filename: 'index.html',
    },),
    new HtmlWebpackPlugin({
      template: './src/pages/about/index.html',
      inject: true,
      chunks: ['about',],
      filename: 'about.html',
    },),
    new HtmlWebpackPlugin({
      template: './src/pages/contacts/index.html',
      inject: true,
      chunks: ['contacts',],
      filename: 'contacts.html',
    },),
  ],
};
