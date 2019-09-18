const Router = require('koa-router')
let activity = new Router()

/* test： /activity/generateTemplate */
activity.get('/generateTemplate', require('./generateTemplate'))

module.exports = activity
