const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const koaBody = require('koa-body')
const router = require('./router/')
const compress = require('koa-compress')
const { vue_ssr_pro, vue_ssr_dev } = require('./vue-ssr/')

const app = new Koa()
app.use(
  compress({
    filter: function(content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  })
)
app.use(koaBody())

app.use(router.routes()).use(router.allowedMethods())

app.use(static(path.resolve(__dirname, '../dist/')))

if (process.env.NODE_ENV === 'production') {
  app.use(vue_ssr_pro())
} else {
  app.use(vue_ssr_dev(app))
}
app.listen(3000, () => {
  console.log('server start success')
})
