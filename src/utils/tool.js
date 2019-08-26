/**
 *  Link : https://github.com/weberandphper/MiniProgram
 *  Author : anspray 一朵浪花
 *
 *  Update time: 2019/08/19
 *
 *  仅保证微信小程序运行正常
 */

class Tool {
  /**
   * 是否为空
   * @param str
   * @returns {boolean}
   */
  isNotEmpty(str) {
    if (str !== '' && str != null && typeof str !== 'undefined') {
      return true
    }
    console.warn('argument format is wrong')
    return false
  }

  /**
   * 格式化时间 dateformat
   * format(new Date()) //不传 fmt，则默认为 yyyy-MM-dd hh:mm:ss ;
   * format(new Date(), 'yyyy-MM-dd hh:mm:ss');
   * format(new Date(), 'yyyy/MM/dd hh:mm:ss');
   * format(new Date(), 'yyyy/MM/dd');
   * @param date
   * @param fmt
   * @returns {*}
   */
  formatDate(date, fmt) {
    let o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    }
    if (!this.isNotEmpty(fmt)) {
      fmt = 'yyyy-MM-dd hh:mm:ss'
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return fmt
  }

  /**
   * object转化成url拼接样式 objToUrl({name:'hehe',age:10})
   * @param obj 需要转化的参数
   */
  objToUrl(obj) {
    let arr = []
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
      }
    }
    return arr.join('&')
  }

  /**
   * url转化成object拼接样式 urlToObj("a=1&b=2")
   * @param url 需要转化的参数
   */
  urlToObj(url) {
    let string = url.split('&')
    let res = {}
    for (let i = 0; i < string.length; i++) {
      let str = string[i].split('=')
      if (str[0] != '') {
        res[str[0]] = decodeURIComponent(str[1])
      }
    }
    return res
  }
}
export default new Tool()
