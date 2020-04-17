<template>
  <div class="app" id="app">
      <!-- 
          keep-alive 缓存组件 router-view包含的
          两个属性
          1. 缓存组件  -- include
          2. 不缓存组件  --  exclude="myjdhome"

          注意--"myjdhome" -- 是组件的name值，如果指定，需要添加name名字
       -->
      <keep-alive exclude="mygwc">
        <router-view></router-view>
      </keep-alive>
      <footer class="footer">
          <ul>
              <li @click="jumpsy">首页</li>
              <li @click="jumpfl">分类</li>
              <li @click="jumpgwc">购物车</li>
              <li @click="jumpmy">我的</li>
          </ul>
      </footer>
  </div>
</template>

<script>
export default {
    methods: {
        // 注意这里的$千万别忘掉
        jumpsy(){
            this.$router.push('/jdhome')
        },
        jumpfl(){
            this.$router.push('/fenlei')
        },
        jumpgwc(){
            this.$router.push('/gwc')
        },
        jumpmy(){
            this.$router.push('/my')
        },
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