<template>
    <div class="back_btn">
        <van-icon name="arrow-left" color="#ffffff" @click="backToFrontPage" />
    </div>
</template>
<script>
export default {
   data() {
      return {

      }
   },
   methods: {
       // 返回上一页
       backToFrontPage(){
           this.$router.back(-1);
       }
   }
}
</script>
<style lang="less" scoped>
.back_btn{
    position: fixed;
    left: 20px;
    top: 20px;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    text-align: center;
    .van-icon{
        font-size: 16px;
        display: block;
        line-height: 40px;
    }
}
</style>
