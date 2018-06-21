// this is aliased in webpack config based on server/client build
import { createAPI } from './create-api-server'
import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
const api = createAPI()

const SSR = global.__VUE_SSR_CONTEXT__
const cookies = SSR?SSR.cookies ||{}:{}
const username = cookies.username || ''
const parseCookie = cookies => {
  let cookie = ''
  Object.keys(cookies).forEach(item => {
    cookie+= item + '=' + cookies[item] + '; '
  })
  return cookie
}

export default {
  post(url, data) {
    console.log('url:'+url)
    console.log('params:'+data)
    const cookie = parseCookie(cookies)
    const key = md5(url + JSON.stringify(data) + username)
    if (api.cached && api.cached.has(key)) {
      return Promise.resolve(api.cached.get(key))
    }
    return axios({
      method: 'post',
      url: api.api + url,
      data: qs.stringify(data),
      timeout: api.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        cookie
      }
    }).then(res => {
      if (api.cached) api.cached.set(key, res)
      return res
    })
  },
  get(url, params) {
    const cookie = parseCookie(cookies)
    const key = md5(url + JSON.stringify(params) + username)
    if (api.cached && api.cached.has(key)) {
      return Promise.resolve(api.cached.get(key))
    }
    return axios({
      method: 'get',
      url: api.api + url,
      params,
      timeout: api.timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        cookie
      }
    }).then(res => {
      if (api.cached) api.cached.set(key, res)
      return res
    })
  }
}





