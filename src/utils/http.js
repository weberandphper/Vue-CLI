/**
 *  Link : https://github.com/weberandphper/MiniProgram
 *  Author : anspray 一朵浪花
 *
 *  Update time: 2019/07/03
 *
 *  仅保证微信小程序运行正常
 */

// import { baseUrl } from '@/config'

class Http {
  // GET 请求
  get(url, params, success, fail) {
    return this.request({
      url,
      data: params,
      header: { "content-type": "application/x-www-form-urlencoded" },
      method: "GET",
      dataType: "json",
      success,
      fail
    });
  }

  // POST请求
  post(url, params, success, fail) {
    return this.request({
      url,
      data: params,
      header: { "content-type": "application/x-www-form-urlencoded" },
      method: "POST",
      dataType: "json",
      success,
      fail
    });
  }

  /**
   *  通用请求封装（微信小程序支持resetful请求，支付宝只支持post 和 get）
   *
   *  header 设置请求的 header，header 中不能设置 Referer
   *  dataType 如果设为 json，会尝试对返回的数据做一次 JSON.parse
   */
  request({
    url,
    data = {},
    header = { "content-type": "application/x-www-form-urlencoded" },
    method = "GET",
    dataType = "json",
    success,
    fail
  }) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: baseUrl + url,
        method,
        data,
        header,
        dataType,
        success,
        fail,
        complete(res) {
          if (!success && !fail) {
            if (res.statusCode === 200) {
              resolve({
                code: res.data.code,
                message: res.data.message,
                data: res.data.data,
                success: res.data.success
              });
            } else {
              resolve({
                code: res.statusCode,
                message: "网络请求失败，请稍后再试",
                data: null,
                success: false
              });
            }
          } else {
            console.log("回调执行,不做返回");
          }
        }
      });
    });
  }
}

export default new Http();
