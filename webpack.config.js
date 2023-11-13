const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  target: 'web',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
      new HtmlWebpackPlugin(
        {
            template: './src/index.html',
            filename: 'index.html'
        }
      ),
      new HtmlWebpackPlugin(
        {
            template: './src/iniciar_sesion.html',
            filename: 'iniciar_sesion.html'
        }
      ),
      new HtmlWebpackPlugin(
        {
            template: './src/mis_libros.html',
            filename: 'mis_libros.html'
        }
      ),
      new HtmlWebpackPlugin(
        {
            template: './src/nosotros.html',
            filename: 'nosotros.html'
        }
      ),
      new HtmlWebpackPlugin(
        {
            template: './src/registrarse.html',
            filename: 'registrarse.html'
        }
      ),
      new MiniCssExtractPlugin(
        {
            filename: 'style.css'
        }
      ),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/img',
            to: 'img',
          },
        ],
      })
    ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
