const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
	mode: "development",
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: false,
		port: 3000,
		hot: true,
		// hotOnly: true
		proxy: {
			'/api': {
				target: 'http://192.168.10.59:8081/',
				pathRewrite: {
					'^/api': ''
				},
				changeOrigin: true, // target是域名的话，需要这个参数，
				secure: false, // 设置支持https协议的代理
			}
		}
	},
	optimization: {
		usedExports: true // 对有导出内容的模块打包 (package.json sideEffects过滤相关模块)
	}
}

module.exports = merge(commonConfig, devConfig)