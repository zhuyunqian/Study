import Vue from 'vue'
import App from './App.vue'
//引入jdvue
import Jd from './Jd.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  //这里的router和store是引入的router里面的js然后把模块导出的
  //这里相当于把他挂载到实力化上面了
  router,
  store,
  render: h => h(Jd)
}).$mount('#app')
//替换挂载的节点 -- 这里的#app -- public-indexhtml上的#app节点
