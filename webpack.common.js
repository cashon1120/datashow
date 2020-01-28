const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240
          }
        }
      }, {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // async 只对异步代码进行分割, 如果要对所有的分割, 可设置为 all 并在cacheGroups 进行配置
      minSize: 30000, // 引入模块大小大于该值就进行分割 默认30kb
      minChunks: 1, // 模块被引用多少次后才进行分割
      maxAsyncRequests: 5, // 同时加载模块的个数
      maxInitialRequests: 3, // 入口文件模块个数
      automaticNameDelimiter: '_', // 文件生成时的连接符号
      name: true, // 打包生成的文件名,依赖下方 cacheGroups 配置
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 打包优先级,越大越优先
          // filename: 'vendors.js'
        },
        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,  // 如果一个模块已经被打包过, 再打包的时候就忽略
          filename: 'common.js'
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, './dist')
  }
}