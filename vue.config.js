const path = require('path')
const publicPath = process.env.NODE_ENV !== 'development' ? '././' : ''

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  publicPath,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss"; $userSelect: ${process.env.VUE_APP_USER_SELECT || 'none'};`
      }
    }
  },
  chainWebpack: config => {
    // svg loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true
      }
    }
  }
}
