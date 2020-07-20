<template>

  <!-- 
    .vue -- 单文件组件  --  一个vue文件一个组件

    注册组件后的2种使用方式
    1. 单标签 - <HelloWorld/>>
    2. 双标签 - <HelloWorld></HelloWorld>

   -->

  <div id="app">
    <div class="canvasdiv">
       <div class="container">
          <div class="share-img">
              <img :src="imgUrl" alt="分享图">
          </div>
          <div class="creat-img" ref="box" >
            <!-- 写在box里面的内容 为 可以生成图片的内容 -->
              <div>123</div>
              <div>123</div>
              <div>123</div>
              <img :src="imgUrl" alt="分享图">
              <img src="./assets/img/banner8.jpg" style="width:400px;" alt="分享背景图">
          </div>
      </div>
      <!-- 这里的点击可以生成图片，并生成链接下载图片 -->
      <button @click="change">点击生成图片</button>
    </div>
  </div>
</template>

<script>
//引入组件文件
import HelloWorld from './components/HelloWorld.vue'
import { qrcanvas } from 'qrcanvas';
import html2canvas from 'html2canvas';

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
      bool:true,
      imgUrl:'/img/logo.82b9c7a5.png',
    }
  },
  methods: {
    add(){
      this.count++;
    },
    toggle(){
      this.bool = !this.bool
    },
    
    // 这里的change方法，生成图片，并下载图片
    change(){
      let that = this;
      html2canvas(that.$refs.box).then(canvas => {
        // this.$refs.addImage.append(canvas);//在下面添加canvas节点
        let link = document.createElement("a");
        link.href = canvas.toDataURL();//下载链接
        link.setAttribute("download","图片生成.png");
        link.style.display = "none";//a标签隐藏
        document.body.appendChild(link);
        link.click();
      });
    },
    base64ToBlob(code) {
        let parts = code.split(';base64,');
        let contentType = parts[0].split(':')[1];
        let raw = window.atob(parts[1]);
        let rawLength = raw.length;

        let uInt8Array = new Uint8Array(rawLength);

        for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], {type: contentType});
    },
    
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
