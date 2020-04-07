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
    console.log(this.$router);
    const query = this.$router.query;
    this.a = query.a;
    this.b = query.b;
  },
}
</script>
