<template>
    <section class="home-content" :style="{left:collapse ? '64px' : '250px'}">
          <router-view></router-view>
    </section>
</template>

<script>
export default {
    computed: {
        collapse(){
            return this.$store.state.collapse
        }
    },
}
</script>

<style scoped lang="less">
    .home-content{
        position:absolute;
        left:250px;
        top:70px;
        right:0;
        bottom:0;
        overflow: auto;
    }
    .home-content::-webkit-scrollbar{
        width:0;
    }
</style>