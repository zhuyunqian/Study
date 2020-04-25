<template>
  <div class="index-wrap">
    <router-view></router-view>
    <div class="foot">
      <ul>
        <li @click="jump('home')">外卖</li>
        <li @click="jump('search')">搜索</li>
        <li @click="jump('order')">订单</li>
        <li @click="jump('my')">我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jwd:''
    }
  },
  methods: {
    jump(url){
      this.$router.push('/'+url)
    }
  },
  created() {
    
  },
  
};
</script>

<style scoped lang="less">
.index-wrap{
  width:100%;
  height:100%;
  position: relative;
}

.foot{
  width:100%;
  position:absolute;
  bottom:0;
  height:80px;
  border-top:1px solid #ddd;
  background:#f5f5f5;

  ul{
    width:100%;
    height:100%;

    li{
      float: left;
      width:25%;
      text-align:center;
      line-height:80px;
      font-size:30px;
      
    }
  }
}
</style>