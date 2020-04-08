<template>
  <div class="home-wrap">
      <my-header></my-header>
      <my-menu></my-menu>
      <my-content></my-content>
      
  </div>
</template>

<script>
import Menu from './children/menu.vue'
import Content from './children/content.vue'
import Header from './children/header.vue'
export default {
    components:{
        myMenu : Menu,
        myContent : Content,
        myHeader : Header
    }
}
</script>

<style lang="less" scoped>
.home-wrap{
    position: relative;
    height:100%;
}
 

</style>