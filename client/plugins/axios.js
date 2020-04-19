import Axios from 'axios'
import config from '../config.js'
import querystring from 'querystring'

const IS_DEV = process.env.NODE_ENV !== 'production'

const axios = Axios.create({
  baseURL: IS_DEV ? config.base_url + '/api' : config.base_url
})

axios.interceptors.request.use(config => {
  if (config.data) {
    config.data = querystring.stringify(config.data)
  }
  return config
})

axios.interceptors.response.use((response) => {
  if (response.data.err_code === 0) {
    return response.data.data
  } else {
    return Promise.reject(response)
  }
}, (err) => {
  return Promise.reject(err)
})

export default axios
