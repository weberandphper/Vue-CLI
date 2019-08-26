import http from '@/utils/http'

class Auth2 {
  /**
   *  用户权限
   */
  getUserAuth (params) {
    return http.post('/api/Wechatpay/OAuth2', params)
  }
}

export default new Auth2()
