// main.js 是入口函数

// var gulp = require('gulp') --引入第三方包（common.js引入模块方式）
// import 依赖名称 form ‘依赖’  --es6方式
import Vue from 'vue'
import App from './App.vue'  
// ./当前路径下

Vue.config.productionTip = false

// render 渲染 （APP）也就是 ./app.vue
// $mount  (渲染到)挂载到 #app节点  ==  index.html -> <div id="app"></div>
// app.vue渲染到index.html
new Vue({
  render: h => h(App)
}).$mount('#app')