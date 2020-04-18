<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
/*
引入去除公共样式文件渲染
注意这里的引入位置为app.vue-所有页面添加
*/
@import './assets/styles/base.less';
#app{
  height:100%;
}
</style>
