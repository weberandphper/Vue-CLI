import router from '@/router'
import store from '@/store'
import { getToken } from './auth'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = [
  '/',
  '/login',
  '/about',
  '/404'
]

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.includes(to.path)) {
    next()
  } else {
    if (getToken()) {
      store.dispatch('GetUserInfo').then(res => { next() }).catch(err => {
        store.dispatch('FedLogOut').then(() => {
          Message.error('拉取用户信息失败，请重新登录！' + err)
          next({
            path: '/'
          })
          NProgress.done()
        })
      })
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
