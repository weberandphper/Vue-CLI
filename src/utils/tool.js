class XpTool {
  /**
   * 是否为空
   * @param str
   * @returns {boolean}
   */
  isNotEmpty (str) {
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
  formatDate (date, fmt) {
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
   * 字符串类型的时间 转化成 Date 类型的工具方法
   * @param {String} dateStr // '2017-04-18 12:12:12' '2017/04/18 12:12:12'
   */
  formatToDate (dateStr) {
    if (this.isNotEmpty(dateStr)) {
      return new Date(Date.parse(dateStr.replace(/-/g, '/')))
    }
    return ''
  }

  /**
   * 监听滚动条
   * @param {*} event 滚动事件
   * @param {*} callback 回调方法
   */
  onScroll (event, callback) {
    const target = event.target

    // 滚动条的总高度
    const scrollHeight = target.scrollHeight
    // 可视区的高度
    const clientHeight = target.clientHeight
    // 距离顶部的距离
    const scrollTop = target.scrollTop

    // 滚动到底部
    if (scrollTop + clientHeight >= scrollHeight - 80) {
      callback()
    }
  }

  /*
   * toast 工具
   * @param {*} _vue  vue实例
   * @param {*} text
   */
  toast (_vue, text, duration = 1500) {
    _vue
      .$createToast({
        type: 'txt',
        txt: text,
        time: duration
      })
      .show()
  }
}
export default new XpTool()
