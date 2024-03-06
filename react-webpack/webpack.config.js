const { ModuleFederationPlugin } = require('webpack').container;
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
        port: 9000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfe_react',
            library: { type: "var", name: "mfe_react" },
            filename: 'remoteEntry.js',
            exposes: {
                './app': './src/App',
            },
            shared: ["react", "react-dom"]
        }),
    ],
};