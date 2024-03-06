const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;
// const deps = require('./package.json').dependencies;
//
// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
//   /* mapped paths to share */
// ]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  // resolve: {
  //   alias: {
  //     ...sharedMappings.getAliases(),
  //   },
  // },
  devServer: {
    port: 5000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    hot: true,
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      remotes: {
        angularmfe: "script angularmfe@http://localhost:3003/remoteEntry.js",
      },

      shared: ["@angular/core", "@angular/common", "@angular/router"]
      // shared: share({
      //   "@angular/core": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "auto",
      //   },
      //   "@angular/common": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "auto",
      //   },
      //   "@angular/common/http": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "auto",
      //   },
      //   "@angular/router": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "auto",
      //   },
      //   react: {
      //     singleton: true,
      //     requiredVersion: deps.react,
      //   },
      //   'react-dom': {
      //     singleton: true,
      //     requiredVersion: deps['react-dom'],
      //   },
      //
      //   ...sharedMappings.getDescriptors(),
      // }),
    }),
    // sharedMappings.getPlugin(),
  ],
};
