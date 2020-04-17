<template>
  <div class="hello">
    <h1>{{ count }}</h1>
     <button @click="add">+1</button>
     <p>------------------===------------------</p>
     <ul>
      <li v-for="(item , index) in lists" :key="index">
        <p>id:{{item.id}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入封装request  -- 引入导出变量需要添加{}
import { getAxios } from '../request/api.js'

import test from '../mixin/add.js'
export default {
  data() {
    return {
      lists:[]
    }
  },
  mixins:[test],
  created() {
    var _this = this
    getAxios({
      limit:10,
      page:1
    }).then(function (res) { 
      if(res.data.success){
        _this.lists = res.data.data
      }
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
