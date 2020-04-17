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
    axios.get(
      "https://cnodejs.org/api/v1/topics",
      {
        params:{
          limit:10,
          page:1
        }
      }
      
      ).then(function(res){
      //返回的结果res 是经过axios封装的，而服务器返回的数据存在res.data中
      //console.log(res.data.data)
      if(res.data.success){
        _this.lists = res.data.data
      }
    })

    //200 -- 成功
    //404 -- 找不到对应的资源（服务器问题大概率）


    // 跨域问题--axios  --:443
    /*
      比较两者：发送请求和当前服务
      协议：https 
      域名：36kr.com
      端口：看不见：默认https端口:443 http：80
      3个其中不一样，就会出现跨域

      cnode可以跨域  --  服务器允许跨域

      vue-cli(开发环境下解决跨域问题)
      vue.config.js(通过代理去发送请求)
    
    */
    axios.get("/api/ad/exposure?sign=0d9ab6714e4ec11a0cf9cd48c6c629d7&param.adsdk=RduC4hUF-Svous28j0Cc3v_e9VtzSecgbyHyZGD06ooDXNXrLDRUMGkOHtp5MUWy6EM7pVi8YkAuAmumKooi8A",function(res){
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
