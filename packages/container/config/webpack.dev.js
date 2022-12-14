//? merge - is a function that we can use to merge together two different webpack config objects.

//? HtmlWebpackPlugin - this is what is going to take some kind of HTML file inside of our project and inject a couple of different script tags inside of it.

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

//? devConfig is second so it gonna override any similar options in the commonConfig
module.exports = merge(commonConfig, devConfig);
