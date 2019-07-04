import axios from 'assets/js/axios'

/**
 *获取首页列表信息
 *
 * @export
 * @returns {Array}
 */
export function homeQuerylist() {
  return axios.get('/home/queryList')
}
