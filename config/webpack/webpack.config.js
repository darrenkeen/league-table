const path = require('path');
const resolve = require('resolve');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => {
  console.log(appDirectory, relativePath);
  console.log(path.resolve(appDirectory, relativePath));
  return path.resolve(appDirectory, relativePath);
};

module.exports = [
  {
    entry: resolveApp('src/index'),
    target: 'web',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'inline-source-map',
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
                happyPackMode: !isProduction,
                configFile: resolveApp('tsconfig.json'),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '~': resolveApp('src/'),
      },
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        typescript: resolve.sync('typescript', {
          basedir: resolveApp('node_modules'),
        }),
        async: false,
        checkSyntacticErrors: true,
        tsconfig: resolveApp('tsconfig.json'),
        compilerOptions: {
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: true,
          isolatedModules: false,
          noEmit: true,
        },
        reportFiles: [
          '**',
          '!**/*.json',
          '!**/?(*.)(spec|test).*',
        ],
        watch: resolveApp('src'),
        silent: true,
        formatter: typescriptFormatter,
      }),
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
