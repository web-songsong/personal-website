import axios from 'utils/axios'

export function get_test_list(params) {
  return axios.get('/test/getList', params)
}
