//? merge - what's going to allow us to kind of merge or smash together the common and the prod.js files.
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  //? When we set mode to production that's gonna cause webpack to run slightly differently. It's gonna make sure that all the JavaScript files that are built get somewhat optimized. It's gonna mini file them and do some other small optimizations. Takes a little bit longer to run webpack in production mode. However, it's gonna make sure that we get a much more production-specific build coming out.
  mode: 'production',
  output: {
    //?Inside of output we're gonna put in file name. We're then going to provide a string and put in a square set of brackets with [name].[contenthash].js. So this ensures that whenever we build some files for production, all the different files that are built are gonna use this as a template to figure out how to name them. We're gonna first put down the name of the file that was created, and then a hash of the contents of the file. This is done primarily for caching issues.
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
