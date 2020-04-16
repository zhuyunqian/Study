<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ text }}</h1>
    <my-com></my-com>
  </div>
</template>

<script>
import MyCom from './MyCom.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text:'1233333',
      timer:null
    }
  },
  components:{
    MyCom,
  },
  created() {
    this.timer = setInterval(function(){
      console.log(1)
    },1000)
  },

  // keepalive -- 包住标签触发
  activated() {
    //组件处于活跃状态
    console.log('活跃')
  },
  deactivated() {
    //组件处于不活跃状态
    console.log('不活跃')
  },
  // keepalive -- 包住标签触发


  beforeDestroy() {
    //组件销毁前
    clearInterval(this.timer)
    console.log('123')
  },
  // 销毁完成前会进行更新操作 -- beforeupdate  and update
  destroyed() {
    //组件销毁完成
    console.log('123')
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
