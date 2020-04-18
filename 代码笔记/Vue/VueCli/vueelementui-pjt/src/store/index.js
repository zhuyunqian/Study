import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 点击折叠效果，引用动态更改的共享状态
    // 两个组件间的传递需要vuex
    collapse:false
  },
  mutations: {
    collapseChange(state){
      state.collapse = !state.collapse
    }
  },
  actions: {
  },
  modules: {
  }
})
