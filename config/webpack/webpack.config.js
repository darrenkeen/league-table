const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';

module.exports = [
  {
    entry:  path.resolve(__dirname, '../../src/index'),
    target: 'web',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [/src/],
          use: [
            {
              loader: "babel-loader?cacheDirectory",
              options: {
                extends: path.resolve(__dirname, "../../.babelrc"),
              },
            },
            {
              loader: "ts-loader",
              options: {
                allowTsInNodeModules: true,
                happyPackMode: !isProduction,
                configFile: path.resolve(
                  __dirname,
                  "/tsconfig.json",
                ),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
    ],
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, '../../dist'),
    },
  },
];
