import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 根据引入的element组件进行添加相应方法
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
