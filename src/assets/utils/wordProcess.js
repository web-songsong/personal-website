export function wordProcess (html) {
  let times = html.split('<!--').length - 1
  let result = html
  let locationL = 0
  let locationR = 0
  console.log(times)
  for (let i = 1; i <= times; i++ ) {
    locationL = result.indexOf('<!--')
    locationR = result.indexOf('-->')
    result = result.substring(0, locationL) + result.substring(locationR + 3)
    console.log('左' + locationL + '右' + locationR)
  }

  let reg = / width="([\d]{0,})"/g
  let reg2 = /width:([\d]{0,})/g
  result = result.replace(reg, '')
  result = result.replace(reg2, '')
  return result
}