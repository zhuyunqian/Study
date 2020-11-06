<template>
  <div id="app">
    <router-view/>
    <tabbar v-if="$route.meta.footShow"></tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/Tabbar.vue"
export default {
  components: {
    Tabbar
  }
}
</script>
<style lang="less">
html, body, #app{
  width: 100%;
  min-height: 100%;
}
#app{
  background: #f4f4f4;
}
</style>
