/**
 *  Link : https://github.com/weberandphper/MiniProgram
 *  Author : anspray 一朵浪花
 *
 *  Update time: 2019/08/27
 *
 *  混合
 */

export default {
  install (Vue) {
    Vue.mixin({
      methods: {
        /**
         *  音频格式转换
         */
        replaceAudioUrl (url) {
          if (url.indexOf('mp3') !== -1 || url.indexOf('wav') !== -1) return url

          let prefix = 'https://pro-audio-mp3.xiaoheiban.cn'
          let src = url.replace(/:\/\//, '')

          src = src.substring(src.indexOf('/'))
          src = prefix + src.replace(/(.amr|.ogg|.m4a|.)$/i, '.mp3')
          return src
        }
      }
    })
  }
}
