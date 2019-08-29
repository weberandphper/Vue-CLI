import http from '@/utils/http'

class Auth2 {
  /**
   *  登录
   */
  login (data) {
    return http({ url: '/login', method: 'post', data })
  }

  /**
   *  权限
   */
  getUserAuth (params) {
    return http.post('/api/Wechatpay/OAuth2', params)
  }

  /**
   *  获取用户信息
   */

  getUserInfo () {
    return http({ url: '/userinfo', method: 'get' })
  }
}

export default new Auth2()
