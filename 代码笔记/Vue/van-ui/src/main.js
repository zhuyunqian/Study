import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/components/vant.js'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
