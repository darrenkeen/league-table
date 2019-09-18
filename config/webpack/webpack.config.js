const path = require('path');
const resolve = require('resolve');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

// Add eslint
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// Add build option
module.exports =
  {
    entry: resolveApp('src/index'),
    target: 'web',
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
  };
