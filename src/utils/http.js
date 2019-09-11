/**
 *  Link : https://github.com/weberandphper/MiniProgram
 *  Author : anspray 一朵浪花
 *
 *  Update time: 2019/08/27
 *
 *  请求封装
 */

import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const http = {}

// 创建axios 实例 (注意：请求执行顺序 请求拦截器 => validateStatus => 响应拦截器)
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
  validateStatus (status) {
    switch (status) {
      case 400:
        Message.error('请求出错')
        break
      case 401:
        Message.warning({
          message: '授权失败，请重新登录'
        })
        store.commit('LOGIN_OUT')
        setTimeout(() => {
          window.location.reload()
        }, 1000)
        return
      case 403:
        Message.warning({
          message: '拒绝访问'
        })
        break
      case 404:
        Message.warning({
          message: '请求错误,未找到该资源'
        })
        break
      case 500:
        Message.warning({
          message: '服务端错误'
        })
        break
    }

    return status >= 200 && status < 300
  }
})

// request 拦截器
service.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置

    // loading + 1
    store.dispatch('SetLoading', true)
    return config
  },
  error => {
    //  这里处理一些请求出错的情况

    // loading 清 0
    setTimeout(function () {
      store.dispatch('SetLoading', 0)
    }, 300)

    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // loading - 1
    store.dispatch('SetLoading', false)
    return response.data
  },
  error => {
    // loading - 1
    store.dispatch('SetLoading', false)
    console.log('请求出错', error)
    return Promise.reject(error)
  }
)

http.get = (url, options) => {
  if (options && !options.isShowLoading) {
    store.dispatch('SetLoading', 0)
  }
  return new Promise((resolve, reject) => {
    service
      .get(url, options)
      .then(response => {
        if (response.code === 200) {
          resolve(response.data)
        } else {
          Message.error({
            message: response.msg
          })
          reject(response.msg)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

http.post = (url, data, options) => {
  if (options && !options.isShowLoading) {
    store.dispatch('SetLoading', 0)
  }
  return new Promise((resolve, reject) => {
    service
      .post(url, data, options)
      .then(response => {
        if (response.code === 200) {
          resolve(response.data)
        } else {
          Message.error({
            message: response.msg
          })
          reject(response.message)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

export default service
