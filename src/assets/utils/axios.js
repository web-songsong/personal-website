import axios from 'axios'
import { port } from '../../../config.json'
axios.defaults.baseURL = `http://localhost:${port}/api`

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
