<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button @click="add">+1</button>
    <p>{{num}}</p>
    <button @click="min">-1</button>
  </div>
</template>

<script>
import add from '../mixin/add.js'
//引入依赖 axios
import axios from 'axios'

export default {
  mixins:[add],
  created() {
    axios.get("https://cnodejs.org/api/v1/topics").then(function(res){
      console.log(res)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
