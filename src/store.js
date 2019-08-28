import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import user from '@/store/modules/user'
import getters from '@/store/getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 'fdsfd'
  },
  getters,
  modules: {
    app,
    user
  }
})

export default store
