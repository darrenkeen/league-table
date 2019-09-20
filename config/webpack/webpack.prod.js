const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Add eslint
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const common = require('./webpack.config.js');

// Add build option
module.exports = merge(common,
  {
    mode: 'production',
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
                happyPackMode: false,
                configFile: resolveApp('tsconfig.json'),
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|gif|png|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/[name].[ext]",
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
  },
);
