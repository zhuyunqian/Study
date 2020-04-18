<template>
  <div class="home-wrap">
      
     <!-- 使用组件 -->
     <home-header></home-header>
     <home-menu></home-menu>
     <home-content></home-content>
      
  </div>
</template>

<script>
// 页面组件化，引入分离处去的组件，并注册
import HomeHeader from './children/Header'
import HomeMenu from './children/Menu'
import HomeContent from './children/Content'

export default {
    
    //注册组件
    components:{
        HomeHeader,
        HomeMenu,
        HomeContent
    }

}
</script>

<style scoped lang="less">
.home-wrap{
    height:100%;
}
</style>