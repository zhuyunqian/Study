<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>a:{{a}}  b:{{b}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      a:'',
      b:''
    }
  },
  components: {
    HelloWorld
  },
  created() {
    
    //路由活跃对象获取链接传参
    const query = this.$route.query;
    this.a =query.a;
    this.b =query.b;
    
   
  },
}
</script>
