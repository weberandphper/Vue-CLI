import http from '@/utils/http'

export default {
  // 登录
  login (data) {
    return http({ url: '/login', method: 'post', data })
  },
  // 获取用户信息
  getUserInfo () {
    return http({
      url: '/userinfo',
      method: 'get'
    })
  }
}
