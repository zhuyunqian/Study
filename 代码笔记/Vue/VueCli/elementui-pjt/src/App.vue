<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style scoped>
@import url('./assets/styles/base.less');
#app{
  height:100%;
}
</style>
