import axios from 'utils/axios'

/**
 * test
 *
 * @export
 * @param {*} params
 * @returns
 */
export function activity_generate_template() {
  return axios.get('/activity/generateTemplate')
}
