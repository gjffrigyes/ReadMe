// this is aliased in webpack config based on server/client build
import { createAPI } from './create-api-client'
import axios from 'axios'
import qs from 'qs'
const api = createAPI()

axios.interceptors.request.use(config => {
  /*  store.dispatch('global/gProgress', 50)*/
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))
export default {
  post(url, data) {
    return axios({
      method: 'post',
      url: api.api + url,
      data: qs.stringify(data),
      timeout: api.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  },
  get(url, params) {
    return axios({
      method: 'get',
      url: api.api + url,
      params,
      timeout: api.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
}





