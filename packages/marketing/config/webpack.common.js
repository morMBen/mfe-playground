const webpack = require('webpack');
module.exports = {
  module: {
    //* in rules we gonna define a loader
    //? The goal of a loader,
    //? is to tell Webpack to process some different files as we start to import them into our project.
    rules: [
      {
        test: /\.m?js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //? @babel/preset-react - means that Babel is gonna process all the different jsx tags, so we add into our application.So that's a little bit of react related code
            //? @babel/preset-env - going to transform our code in a variety of different ways. So take all the kind of ES 2015, 16, 17 and so on syntax, and convert it down to ES five.
            presets: ['@babel/preset-react', '@babel/preset-env'],
            //? @babel/plugin-transform-runtime - is going to add in a little bit of additional code just to enable some different features for our project, inside the browser. Such as, async await syntax and some other related things.
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
