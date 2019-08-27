import request from '@/utils/http'

export default {
  // 登录
  login (data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  // 获取用户信息
  getUserInfo () {
    return request({
      url: '/userinfo',
      method: 'get'
    })
  }
}
