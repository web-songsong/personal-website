var mysql = require('mysql')
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'songsong',
  database: 'websong_xin'
})

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err)
      connection.query(sql, values, (err, rows) => {
        if (err) reject(err)
        resolve(rows)
        connection.release()
      })
    })
  })
}

module.exports = { query }
