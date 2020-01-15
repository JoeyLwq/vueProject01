
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = webpackMerge(baseConfig,{
                                             devServer: {
                                                 contentBase: '../dist',
                                                 /*是否热更新*/
                                                 inline: true
                                             }
                                         })