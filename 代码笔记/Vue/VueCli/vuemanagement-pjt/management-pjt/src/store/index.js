import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:[
      {"id":3,"user_id":2,"path":"/category","path_name":"分类页面"},
      {"id":4,"user_id":2,"path":"/good","path_name":"商品页面"},
      {"id":6,"user_id":2,"path":"/order","path_name":"订单页面"}
    ]
  },
  mutations: {
    updateMenu(state, payload) {
      state.menu = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
