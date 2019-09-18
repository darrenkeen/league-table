const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

const common = require('./webpack.config.js');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// Add build option
module.exports = merge(common,
  {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: [
            /node_modules/,
            /\.(test|spec).tsx?$/,
          ],
          use: [
            {
              loader: "babel-loader?cacheDirectory",
              options: {
                extends: resolveApp('.babelrc'),
              },
            },
            {
              loader: "ts-loader",
              options: {
                allowTsInNodeModules: true,
                happyPackMode: true,
                configFile: resolveApp('tsconfig.json'),
              },
            },
          ],
        },
      ],
    },
  },
);
