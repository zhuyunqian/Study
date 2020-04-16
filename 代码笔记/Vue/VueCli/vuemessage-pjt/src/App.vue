<template>

  <!-- 
    .vue -- 单文件组件  --  一个vue文件一个组件

    注册组件后的2种使用方式
    1. 单标签 - <HelloWorld/>>
    2. 双标签 - <HelloWorld></HelloWorld>

   -->

  <div id="app">
    <img id="imgs" alt="Vue logo" src="./assets/logo.png">

    <p id="pinner">{{count}}</p>
    <button @click="add">+1</button>

    <!-- 
      keep-alive
      缓存组件
      优点：缓存之前的状态，比如checkbox点击效果

      keepa包住的组件会触发activated 和 deactivated 两个声明周期函数函数
      
     -->

    <!-- 向子组件传值 绑定了自定义属性 -->
    <keep-alive>
      <HelloWorld msg="Welcome to Your Vue.js App" v-if="bool"/>
    </keep-alive>
    <!-- 准备切换组件，关闭组件的时候，销毁组件内的定时器 -->
    <p><button @click="toggle">
      切换
    </button></p>
  </div>
</template>

<script>
//引入组件文件
import HelloWorld from './components/HelloWorld.vue'

// es6导出 -- main.js 可以直接import引入
export default {
  //导出内容，即组件内容，与普通vue页面一样，各种方法均包含
  //注意组件内的data为一个函数

  name: 'App',
  //注册组件
  components: {
    // HelloWorld:HelloWorld ,可以简写
    HelloWorld
  },
  data() { //数据
    return {
      val:'666',
      count:1,
      bool:true
    }
  },
  methods: {
    add(){
      this.count++;
    },
    toggle(){
      this.bool = !this.bool
    }
  },
  directives:{},  //自定义指令
  filters:{}, // 过滤器
  computed: {}, //计算属性

  // 生命周期 - 开始到结束 - 分为4个阶段 - 创建、挂载 、更新、销毁
  // 钩子函数 - 开始到结束的每个阶段-过程 - 四个阶段对应8个生命周期的钩子函数
  beforeCreate() {
    // 组件创建中，不能访问data methods 和 Dom节点
    console.log(this.val) // undefined
    console.log(document.getElementById('imgs'))
  },
  created() {
    // 组件创建后触发钩子函数 ，可以访问data 和methods方法  不能访问Dom节点
    console.log('组件创建后')
    console.log(this.val) // 666
    console.log(document.getElementById('imgs'))  //null
  },

  beforeMount() {
    // 组件创建后，挂载前，已经编译，但是还没有挂载到页面上 未挂载到页面，访问不了节点
    console.log(this.val) //666
    console.log(document.getElementById('imgs')) //null
  },
  mounted() {
    // 已经编译挂载到页面上 , 可以访问到节点
    console.log(this.val) //666
    console.log(document.getElementById('imgs')) //img标签
  },
  beforeUpdate() {
    // 当页面值发生改变的时候触发， 更新界面前 ，data值已经更新，页面值还没有更新
    console.log(this.count)  //data值 - 2
    console.log(document.getElementById('pinner').innerHTML)  // 界面值 - 1
  },
  updated() {
    // 当页面值发生改变的时候触发， 更新界面后 ，data值已经更新，页面值也已经更新
    console.log('data值 -'+this.count)  //data值 - 2
    console.log('界面值 -'+document.getElementById('pinner').innerHTML)  // 界面值 - 2
  },
  

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
