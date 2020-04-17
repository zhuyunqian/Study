<template>
  <div id="app">
    <my-com></my-com>
    <my-com1></my-com1>
  </div>
</template>

<script>
import MyCom from './components/MyCom.vue'
import MyCom1 from './components/MyCom1.vue'

export default {
  name: 'App',
  components: {
    MyCom,
    MyCom1
  }
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
