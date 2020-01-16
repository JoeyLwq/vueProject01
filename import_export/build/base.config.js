const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        /*使用插件后不再需要publicPath*/
//        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                /*css-loader只负责加载，style-loader负责将样式添加到DOM中*/
                /*使用多个loader时，从右向左读取*/
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            /*当图片小于limit时，会被编译为base64格式，而大于时,将由file-loader负责编译，即需要安装file-loader*/
                            limit: 5000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            /*指定我们使用的vue的版本*/
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('Author: JoeyLin'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}