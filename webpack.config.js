const path = require("path");
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './client/src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle[fullhash].js',
        clean: true
    },
    plugins: [
        new HtmlPlugin({ template: './client/src/index.html'}),
        new CssPlugin({ filename: 'styles[fullhash].css'})
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/,
                use: [
                    CssPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 5000,
        static: {
            directory: path.join(__dirname, 'build')
        },
        devMiddleware: {
            writeToDisk: true
        }
    }
}