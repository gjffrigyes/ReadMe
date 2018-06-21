/**
 * Created by guo on 2017/6/2.
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
const ROOT = 'http://admin.jsmingmei.com/ci/index.php/'
Vue.use(VueAxios, axios)

// 将全局的根地址绑定到axios的默认基础路径
Vue.axios.defaults.baseURL = ROOT

/**
 * fetch请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * sendPost请求
 * @param url
 * @param params 参数默认为空对象
 * @returns {Promise}
 */
export function sendPost (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data))
      .then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
  })
}
// http request拦截器
Vue.axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (config.data instanceof Object) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)
// http response 拦截器
Vue.axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
