const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
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
  configureWebpack: () => ({
    entry: `./src/entry-${target}.js`,

    devtool: 'source-map',
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
    plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }),
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
  indexPath: 'dev.html'
}
