const Router = require('koa-router')
const activity = require('./activity/')

var router = new Router({
  prefix: '/api'
})

router.use('/activity', activity.routes(), activity.allowedMethods())

module.exports = router
