const isProduction = process.env.NODE_ENV === 'production'
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const merge = require('lodash.merge')

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    extract: false
  },
  configureWebpack: config => {
    let plugins = [
      TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
    ]
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240,
          // 其余配置查看compression-webpack-plugin
          deleteOriginalAssets: false
        })
      )
    }

    return {
      entry: `./src/entry-${target}.js`,
      devtool: 'none',
      target: TARGET_NODE ? 'node' : 'web',
      node: false,
      output: {
        libraryTarget: TARGET_NODE ? 'commonjs2' : undefined
      },

      externals: TARGET_NODE
        ? nodeExternals({
            whitelist: [/\.css$/]
          })
        : undefined,
      plugins
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('utils', resolve('src/assets/utils/'))
      .set('api', resolve('src/modules/API.js'))
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        merge(options, {
          optimizeSSR: false,
          extractCSS: true
        })
      })
  },
  filenameHashing: false,
  css: {},
  indexPath: 'spa'
}
