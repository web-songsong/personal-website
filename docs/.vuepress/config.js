const fs = require('fs')
const path = require('path')

module.exports = {
  title: 'charmingsong',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: navFn(path.join(__dirname, '../')),
    displayAllHeaders: true,
    sidebar: 'auto'
  }
}
function navFn(pwd) {
  const arr = fs.readdirSync(pwd).map(item => {
    const item_pwd = path.join(pwd, item)
    if (/^[^.]/.test(item)) {
      if (fs.statSync(item_pwd).isDirectory()) {
        return {
          text: `${item.replace(/(\.\w*)/g, '')}`,
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
  arr.forEach((item, key, arr) => {
    item ? '' : arr.splice(key, 1)
  })
  return arr
}
