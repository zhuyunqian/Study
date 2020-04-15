<template>

  <!-- 
    .vue -- 单文件组件  --  一个vue文件一个组件

    注册组件后的2种使用方式
    1. 单标签 - <HelloWorld/>>
    2. 双标签 - <HelloWorld></HelloWorld>

   -->

  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 向子组件传值 绑定了自定义属性 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
//引入组件文件
import HelloWorld from './components/HelloWorld.vue'

// es6导出 -- main.js 可以直接import引入
export default {
  //导出内容，即组件内容，与普通vue页面一样，各种方法均包含
  //注意组件内的data为一个函数

  name: 'App',
  //注册组件
  components: {
    // HelloWorld:HelloWorld ,可以简写
    HelloWorld
  },
  data() { //数据
    return {
      
    }
  },
  directives:{},  //自定义指令
  filters:{}, // 过滤器
  computed: {}, //计算属性

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
