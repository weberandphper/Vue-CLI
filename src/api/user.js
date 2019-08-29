import http from '@/utils/http'

class User {
  // 登录
  login (data) {
    return http({ url: '/login', method: 'post', data })
  }
  // 获取用户信息
  getUserInfo () {
    return http({
      url: '/userinfo',
      method: 'get'
    })
  }
}

export default new User()
