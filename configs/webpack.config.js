const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const mode = process.argv[process.argv.indexOf("--mode") + 1];
const prod = mode === 'production';
const packageJSON = require("../package.json");
console.log({ mode })

const config = {
    entry: {
        bundle: ['./src/index.js']
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte'),
            '@packages': path.resolve(__dirname, '../packages'),
        },
        extensions: ['.mjs', '.js', '.svelte', '.ts', '.js'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].js',
        chunkFilename: `[name].chunk.${packageJSON.version}.js`
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: { loader: 'ts-loader' }
            },
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true,
                        preprocess: require('svelte-preprocess')()
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    },
    mode,
    plugins: [
        // new clean up dir plugin
        new CleanWebpackPlugin({ dangerouslyAllowCleanPatternsOutsideProject: true, verbose: false, dry: false }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),

        // HTML plugin 
        new HtmlWebpackPlugin({ template: 'src/index.html' }),

    ],
    devtool: prod ? 'none' : 'source-map'
};

//
module.exports = config;