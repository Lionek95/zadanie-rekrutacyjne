const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
  },

  externals: {
    jquery: 'jQuery',
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp|awif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
              options: {
                context: 'public',
                name: '/images/[name].[ext]',
                publicPath: '/',
            },
          },
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Zadanie Rekrutacyjne',
      filename: 'index.html',
      template: 'src/index.html'
    }),
  ],
};

