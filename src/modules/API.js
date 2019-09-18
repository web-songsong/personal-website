import axios from 'utils/axios'

/**
 * 生成模板文件
 *
 * @export
 * @param {*} params
 * @returns
 */
export function activity_generate_template(params) {
  return axios.post('/activity/generateTemplate', params)
}

export function activity_template_list(params) {
  return axios.get('/activity/templateList', params)
}
