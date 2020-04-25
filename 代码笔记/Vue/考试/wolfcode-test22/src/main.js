import Vue from 'vue'
// import App from './App.vue'
import App from  './Takeout.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
