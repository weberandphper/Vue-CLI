/**
 *  Link : https://github.com/weberandphper/MiniProgram
 *  Author : anspray 一朵浪花
 *
 *  Update time: 2019/08/27
 *
 *  全局过滤器
 */

const filters = {
  // 状态
  styleStatus: function (status) {
    let res = ''
    switch (status) {
      case 0:
        res = '停用'
        break
      case 1:
        res = '启用'
        break
    }
    return res
  },
  styleTypeStatus: function (status) {
    let res = ''
    switch (status) {
      case 0:
        res = '停用'
        break
      case 1:
        res = '启用'
        break
    }
    return res
  }
}

export default filters
