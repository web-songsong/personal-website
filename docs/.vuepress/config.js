const fs = require('fs')
const path = require('path')

module.exports = {
  dest: '../blog',
  title: 'charmingsong blog',
  description: '会做前端和做好前端是两回事',
  head: [
    ['link', { rel: 'icon', href: `/ico/favicon.ico` }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      }
    ]
  ],
  themeConfig: {
    nav: [
      ...navInit(path.join(__dirname, '../'), 'docs'),
      { text: 'GitHub', link: 'https://github.com/web-songsong' }
    ],
    sidebar: sidebar(path.join(__dirname, '../'))
  }
}
/**
 *config配置文件的自动后去配置参数
 *
 * @param {*} dir 文件路径
 * @param {*} filename 文件夹的名字
 * @param {string} [link=''] 配置文件中的链接
 * @returns array
 */
function navInit(dir, filename, link = '') {
  const navs = []
  fs.readdirSync(dir).forEach(item => {
    if (!/^[^.]/.test(item)) return
    if (fs.statSync(path.join(dir, item)).isDirectory()) {
      if (dirflag(path.join(dir, item))) {
        navs.push({
          text: item,
          items: navInit(path.join(dir, item), item, `${link}/${item}`)
        })
      } else {
        navs.push({
          text: item,
          link: `${link}/${item}/`
        })
      }
    }
  })
  return navs
}

/**
 *sidebar的自动配置参数
 *
 * @param {*} dir 路径
 * @param {string} [urlname=''] 链接的名字
 * @returns Object
 */
function sidebar(dir, urlname = '') {
  const side = {}
  fs.readdirSync(dir).forEach(item => {
    if (!/^[^.]/.test(item)) return
    if (fs.statSync(path.join(dir, item)).isDirectory()) {
      if (dirflag(path.join(dir, item))) {
        Object.assign(side, sidebar(path.join(dir, item), `${urlname}/${item}`))
      } else {
        Object.assign(side, dirlink(path.join(dir, item), `${urlname}/${item}`))
      }
    }
  })
  Object.values(side).forEach(arr => arr.sort())
  return side
}

/**
 * 文件过滤，对路径中的只有文件的文件夹进行参数输出
 *
 * @param {*} file 文件路径
 * @param {*} filename 文件名
 * @returns Object
 */
function dirlink(file, filename) {
  const sidebar = {}
  fs.readdirSync(file).forEach(item => {
    let url = ''
    switch (item) {
      case 'README.md':
        url = ''
        break
      default:
        url = item.replace('.md', '')
    }
    sidebar[`${filename}/`]
      ? sidebar[`${filename}/`].push(url)
      : (sidebar[`${filename}/`] = [url])
  })
  return sidebar
}
/**
 *检查文件中是否有文件夹
 *
 * @param {*} filedir-文件路径
 * @returns true/false
 */
function dirflag(filedir) {
  return fs
    .readdirSync(filedir)
    .some(item => fs.statSync(path.join(filedir, item)).isDirectory())
}
