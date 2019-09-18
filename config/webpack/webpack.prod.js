const path = require('path');
const fs = require('fs');
const merge = require('webpack-merge');

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
      ],
    },
  },
);
