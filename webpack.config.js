var webpack = require('webpack');
var path = require('path');
var root = path.resolve(__dirname, './').replace(/\\/g, '/');

module.exports = {
    entry: {
        'element-ui': `${root}/index.js`,
        'test': `${root}/test.js`
    },
    output: {
        publicPath: './dist/',
        path: `${root}/dist`,
        jsonpFunction: 'webpackJsonp_element_ui',
        filename: '[name].js'
    },
    externals: {
        vue: 'ElementUiVue'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000 * 100,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    babel: {
        presets: ['es2015']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
