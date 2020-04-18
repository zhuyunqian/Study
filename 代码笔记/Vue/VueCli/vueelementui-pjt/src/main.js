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

// 添加了ssh密钥
/*
创建生成密钥

ssh-keygen -t rsa -C "qtzhuyuqnian@163.com"
进入ssh - .ssh为隐藏文件

ls  -a
cd .ssh
打开密钥

cat id_rsa.pub
cat ~/.ssh/id_rsa.pub
*/
