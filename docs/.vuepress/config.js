const fs = require('fs')
const path = require('path')
module.exports = {
  dest: '../blog',
  // base: '/blog/',
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
    nav: navFn(path.join(__dirname, '../')),
    displayAllHeaders: true,
    sidebar: 'auto'
  }
}
function navFn(pwd) {
  const arr = []
  fs.readdirSync(pwd)
    .map(item => {
      const item_pwd = path.join(pwd, item)
      if (/^[^.]/.test(item)) {
        if (fs.statSync(item_pwd).isDirectory()) {
          return {
            // text: `${item.replace(/(\.\w*)/g, '')}`,
            text: item,
            items: navFn(item_pwd)
          }
        } else {
          return {
            text: `${
              item === 'README.md' ? 'home' : item.replace(/(\.\w*)/g, '')
            }`,
            link: `/${
              item !== 'README.md'
                ? item_pwd
                    .replace(path.join(__dirname, '../'), '')
                    .replace(/(\.\w*)/g, '.html')
                : item_pwd
                    .replace(path.join(__dirname, '../'), '')
                    .replace('README.md', '')
            }`
          }
        }
      }
    })
    .forEach(item => (item ? arr.push(item) : ''))
  return arr
}
