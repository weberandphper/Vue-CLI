class Tools {
  /**
   * 是否为空
   * @param str
   * @returns {boolean}
   */
  isNotEmpty(str) {
    if (str !== "" && str != null && typeof str !== "undefined") {
      return true;
    }
    console.warn("argument format is wrong");
    return false;
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
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "h+": date.getHours(), // 小时
      "m+": date.getMinutes(), // 分
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    };
    if (!this.isNotEmpty(fmt)) {
      fmt = "yyyy-MM-dd hh:mm:ss";
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  }

  /**
   * 时间戳转换
   * @param item
   * @param format
   * @returns {string}
   */
  dateTimeFormat(mills, accuracy) {
    let time;

    if (typeof mills === "number") {
      time = new Date(mills);
    } else if (mills.constructor === Date) {
      time = mills;
    }

    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let accuracyArr = [];

    switch (accuracy) {
      case "sec":
        accuracyArr = [hour, min, sec];
        break;
      case "hour":
        accuracyArr = [hour];
        break;
      default:
        accuracyArr = [hour, min];
    }

    let dateStr = [year, month, date]
      .map(n => {
        return n < 10 ? "0" + n : "" + n;
      })
      .join("-");
    let timeStr = accuracyArr
      .map(n => {
        return n < 10 ? "0" + n : "" + n;
      })
      .join(":");

    let dateTimeStr = `${dateStr} ${timeStr}`;

    return {
      dateStr,
      timeStr,
      dateTimeStr
    };
  }

  /**
   * 判断是否是今天
   * @param time
   * @returns {boolean}
   */
  isToday(time) {
    const d = new Date(time);
    const now = new Date();
    const diff = (now - d) / 1000;
    if (diff < 3600 * 24 * 2 && d.getDate() === now.getDate()) {
      return true;
    } else {
      return false;
    }
  }

  onScroll(event, callback) {
    // console.log(1)
    const target = event.target;

    // 滚动条的总高度
    const scrollHeight = target.scrollHeight;
    // 可视区的高度
    const clientHeight = target.clientHeight;
    // 距离顶部的距离
    const scrollTop = target.scrollTop;

    // 滚动到顶部
    if (scrollTop === 0) {
      console.log("顶部");
    }

    // 滚动到底部
    if (scrollTop + clientHeight + 10 >= scrollHeight) {
      callback();
      console.log("底部");
    }
  }

  /**
   * 去掉富文本中的标签
   * @param str
   * @returns {void | string | never}
   */
  removeTag(str) {
    return str.replace(/<[^>]+>/g, "");
  }

  /**
   * 判断是否是小数
   * @param num
   * @returns {boolean}
   */
  isDot(num) {
    let result = num.toString().indexOf(".");
    if (result >= 0) {
      return true; // 是小数
    } else {
      return false; // 不是小数
    }
  }

  /*
   * toast 工具
   * @param {*} _vue  vue实例
   * @param {*} text
   */
  toast(_vue, text, duration = 1500) {
    _vue
      .$createToast({
        type: "txt",
        txt: text,
        time: duration
      })
      .show();
  }
}

export default new Tools();
