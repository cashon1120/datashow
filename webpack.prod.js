const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const productConfig = {
  mode: "production",
  devtool: 'cheap-module-source-map'
}

module.exports = merge(commonConfig, productConfig)
