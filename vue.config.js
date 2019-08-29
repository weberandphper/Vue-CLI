const publicPath = process.env.NODE_ENV !== 'development' ? '././' : ''

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
  // devServer: {
  //   proxy: {
  //     '/proxy': {
  //       target: 'http://47.94.138.75',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/proxy': ''
  //       }
  //     }
  //   }
  // },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_DOMAIN,
        changeOrigin: true
      }
    }
  }
}
