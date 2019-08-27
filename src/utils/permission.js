/**
 *  Link : https://github.com/weberandphper/MiniProgram
 *  Author : anspray 一朵浪花
 *
 *  Update time: 2019/08/27
 *
 *  权限
 */

import router from '@/router'
import store from '@/store'
import { getToken } from './auth'
import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import { Message } from 'element-ui'

const whiteList = [
  '/',
  '/login',
  '/about'
]

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      store.dispatch('GetUserInfo').then(res => {
        next()
      }).catch(err => {
        store.dispatch('FedLogOut').then(() => {
          Message.error('拉取用户信息失败，请重新登录！' + err)
          next({
            path: '/'
          })
        })
      })
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
