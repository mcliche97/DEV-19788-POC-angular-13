const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angularmfe',

  exposes: {
    './angModules': './src/bootstrap.ts',
  },

  shared: {
    ...shareAll({
      //singleton: true,
      //strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
