<template>
  <div>
      <section class="home-content">
          <router-view></router-view>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" >
    .home-content{
        position: absolute;
        top: 70px;
        left: 250px;
        right: 0;
        bottom: 0;
        background-color: skyblue;
    }
</style>