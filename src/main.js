import Vue from 'vue'
import App from './App'
import api from './api'
import store from './store'
import router from './router'

import mixin from './utils/mixin'
import common from './utils/common'
import filters from './utils/filters'
import eventBus from './utils/event-bus'

import ElementUI from 'element-ui'
import Cookies from 'js-cookie'

import './styles/index.scss'
import './assets/font/iconfont.css'
import './utils/permission'

Vue.prototype.$api = api
Vue.prototype.$store = store
Vue.prototype.$eventBus = eventBus

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium'
})

// 注册过滤器
for (let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.use(common)
Vue.use(mixin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
