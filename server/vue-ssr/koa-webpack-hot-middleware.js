const webpackHotMiddleware = require('webpack-hot-middleware')
const { PassThrough } = require('stream')

module.exports = (compiler, option) => {
  const action = webpackHotMiddleware(compiler, option)
  return async (ctx, next) => {
    let stream = new PassThrough()
    ctx.body = stream
    await action(ctx.req, {
      write: stream.write.bind(stream),
      writeHead(status, headers) {
        ctx.status = status
        ctx.set(headers)
      },
      end(content) {
        ctx.body = content
      },
    }, next)
  }
}
