<template>
  <div class="home-wrap">
      <home-header></home-header>
      <home-content></home-content>
      <home-menu></home-menu>
  </div>
</template>

<script>
import HomeHeader from './children/Header'
import HomeContent from './children/Content'
import HomeMenu from './children/Menu'

export default {
    components:{
        HomeHeader,
        HomeContent,
        HomeMenu
    }
}
</script>

<style>

</style>