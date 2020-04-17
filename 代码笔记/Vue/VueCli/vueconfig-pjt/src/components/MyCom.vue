<template>
  <div class="hello">
    <ul>
      <li v-for="(item , index) in lists" :key="index">
        <p>id:{{item.id}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import add from '../mixin/add.js'
//引入依赖 axios
import axios from 'axios'

export default {
  mixins:[add],
  data() {
    return {
      lists:[]
    }
  },
  created() {
    //注意这里一定要进行this定义，否则axios（作用域）里面的this指向的undefined，
    var _this = this

    //异步请求 -- 数据返回时间取决于 - 网络和数据反应
    axios.get("https://cnodejs.org/api/v1/topics").then(function(res){
      //返回的结果res 是经过axios封装的，而服务器返回的数据存在res.data中
      //console.log(res.data.data)
      if(res.data.success){
        _this.lists = res.data.data
      }
    })

    //200 -- 成功
    //404 -- 找不到对应的资源（服务器问题大概率）
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
