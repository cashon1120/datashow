const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const WebpackProConfig = require('./plugin/webpack-pro-config')

const productConfig = {
  mode: "production",
  devtool: 'cheap-module-source-map',
  plugins: [
    // new WebpackProConfig()
  ],
}

module.exports = merge(commonConfig, productConfig)
