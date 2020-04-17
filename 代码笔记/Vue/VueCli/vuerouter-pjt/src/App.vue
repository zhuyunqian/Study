<template>
  <div id="app">
    <div id="nav">
      <!-- 
        router-link标签相当于html中的a标签勇于跳转页面
       -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/three">Three</router-link> |
      <button @click="jumphome">点击跳转</button>
    </div>
    <!-- 
      router-view 
      页面家在位置
     -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  methods : {
    jumphome(){
      // js通过整个项目的路由对象进行跳转
      /*
        push-添加 -返回上一页 -返回到上一页
        replace-替换 -返回上一页 - 返回到上上一页
      */
      this.$router.push('/?a=10&b=100') 
      //this.$router.replace('/')
    }
  }
}
</script>
