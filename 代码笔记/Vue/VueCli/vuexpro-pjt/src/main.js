import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vuex
import store from './store'

Vue.config.productionTip = false

// vuex注册到挂载到实例对象上中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
