<template>
  <div class="app" id="app">
      <router-view></router-view>
      <footer class="footer">
          <ul>
              <li >首页</li>
              <li >分类</li>
              <li >购物车</li>
              <li >我的</li>
          </ul>
      </footer>
  </div>
</template>

<script>
export default {
    methods: {
        
    },
}
</script>

<style scoped lang="less">
*{
    padding:0;
    margin:0;
    list-style:none;
}
body,html,#app{
    height:100%;
}
.app{
    height:100%;
    position: relative;
    .footer{
        width:100%;
        position: absolute;
        bottom:0;
        ul{
            width:100%;
            display: flex;
        }
        li{
            flex: 1;
            text-align:center;
            line-height:32px;   
            background:pink;         
        }
    }
}


</style>