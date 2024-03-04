const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfe_react',
            filename: 'remoteEntry.js',
            exposes: {
                './app': './src/App',
            },
            shared: {
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
    ],
};