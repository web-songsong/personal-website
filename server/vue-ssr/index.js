const fs = require('fs')
const LRU = require('lru-cache')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const templatePath = path.join(__dirname, '../../index.template.html')

function createRenderer(bundle, options) {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      cache: new LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      }),
      basedir: resolve('./dist'),
      runInNewContext: false
    })
  )
}
function renderToString(content, renderer) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(content, (err, html) => {
      err ? reject(err) : resolve(html)
    })
  })
}

function vue_ssr_pro() {
  const clientManifest = require('../../dist/vue-ssr-client-manifest.json')
  const serverBandle = require('../../dist/vue-ssr-server-bundle.json')
  const template = fs.readFileSync(templatePath, 'utf-8')
  const renderer = createRenderer(serverBandle, {
    runInNewContext: false,
    template,
    clientManifest
  })

  return async ctx => {
    const content = {
      title: 'test',
      url: ctx.url
    }
    ctx.body = await renderToString(content, renderer)
  }
}
function vue_ssr_dev(app) {
  // let renderer
  require('./setup-dev-server.js')(app, templatePath, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
  return async ctx => {
    const content = {
      title: 'test',
      url: ctx.url
    }
    ctx.body = await renderToString(content, renderer)
  }
}
module.exports = { vue_ssr_pro, vue_ssr_dev }
