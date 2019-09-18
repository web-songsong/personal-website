const Router = require('koa-router')
const test = require('./test')

var router = new Router({
  prefix: '/api'
})

router.use('/test', test.routes(), test.allowedMethods())

module.exports = router
