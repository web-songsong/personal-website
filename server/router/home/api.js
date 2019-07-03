async function queryList(ctx) {
  let { query } = ctx.$db
  let { dataFormat } = ctx.$utils
  ctx.body = dataFormat(await query('SELECT * FROM home_list'))
}

module.exports = {
  queryList
}
