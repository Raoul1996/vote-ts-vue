import * as Axios from 'axios'

import config from '@/config'
import router from '@/router'
import {getAuthToken, validateResp} from '@/utils'

const baseURL = config.url.baseUrl
const AUTH_TOKEN = getAuthToken()
const instance = Axios.default.create({
  baseURL,
  timeout: config.timeout,
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  maxContentLength: 2000,
  transformResponse: [
    (data) => {
      try {
        data = JSON.parse(data)
      } catch (e) {
        data = {}
      }
      return data
    },
  ],

})
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.interceptors.request.use((config: any) => {
    if (AUTH_TOKEN) {
      config.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use((config: any) => {
    if (validateResp(config.data.code)) {
      return config.data
    } else {
      return Promise.reject(config)
    }
  }, (err: any) => {
    if (err && err.response) {
      const {response: {status}} = err
      switch (status) {
        case 400:
          err.message = '错误请求'
          break
        case 401:
          err.message = '未授权，请重新登录'
          // sleep(1000).then(async () => {
          //   await window.location.replace('/login')
          // })
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = err.response.data || '请求错误,未找到该资源'
          break
        case 405:
          err.message = '请求方法未允许'
          break
        case 408:
          err.message = '请求超时'
          break
        case 422:
          err.message = '数据错误'
          break
        case 500:
          err.message = '服务器端出错'
          break
        case 501:
          err.message = '网络未实现'
          break
        case 502:
          err.message = '网络错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网络超时'
          break
        case 505:
          err.message = 'http 版本不支持该请求'
          break
        default:
          err.message = `连接错误${status}`
      }
    }
    return Promise.reject(err)
  }
)

export default {
  get (url: string, params: any) {
    return new Promise((resolve) => {
      instance({
        method: 'get',
        url,
        params,
      }).then((res: object) => resolve(res))
    })
  },
  post (url: string, data: object) {
    return new Promise((resolve) => {
      instance({
        method: 'post',
        url,
        data
      }).then((res: object) => resolve(res)
      )
    })
  }
}
