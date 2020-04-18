<template>
    <section class="home-content">
          <router-view></router-view>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .home-content{
        position:absolute;
        left:250px;
        top:70px;
        right:0;
        bottom:0;
        background:skyblue;
    }
</style>