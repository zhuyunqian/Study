import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局混入，不需要引入，可以直接使用
// 注意这里的全局方法，必须写在实例挂载前，否则报错--notdefined
Vue.mixin({
  data() {
    return {
      num:100000
    }
  },
  methods: {
    min(){
      this.num--;
    }
  },
})


new Vue({
  render: h => h(App),
}).$mount('#app')


