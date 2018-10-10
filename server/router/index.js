const router = require('koa-router')()
const exec = require('util').promisify(require('child_process').exec)

const strs = ['git pull', 'yarn docs:build']
const str = strs.join('&&')

router.post('/docs', postDocs)
module.exports = router

async function postDocs(ctx) {
  console.log(ctx.request.header['user-agent'])
  if (!/GitHub/g.test(ctx.request.header['user-agent'])) {
    return (ctx.body = 'false')
  }
  const { stdout, stderr } = await exec(str, { shell: '/bin/zsh' })
  ctx.body = stderr ? stderr : stdout
}
