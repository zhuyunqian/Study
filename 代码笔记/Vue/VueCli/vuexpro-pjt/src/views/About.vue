<template>
  <div class="about">
    <!-- 使用公共num -->
    <p>{{num}}</p>
    <p><button @click="add(1)">点击+1</button></p>
    <p><button @click="add(10)">点击+10</button></p>
    <!-- 调用模块a的值 -->
    <p>{{boxnum}}</p>
    <!-- ul遍历mapgetters后的数据 -->
    <ul>
      <li v-for="good in showGoods" :key="good.id">{{good.name}}</li>
    </ul>

  </div>
</template>

<script>
//引入vuex导出的mapState方法，用来调取共享状态
//引入mapGetters定义，用来调取，处理过的状态
import {mapState ,mapGetters} from "vuex"
//注意这里也要引入定义
import { ADDNUM } from '../store/mutation-types.js'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    add(count){
      //this.$store.state.num++;
      //功能可以实现但是 - dev插件 并不显示每次调用

      //只能调用 mutation里的方法 -- 如果需要更新state的值
      //根据封装方法，传入方法名称和参数
      //注意这里的方法需要加单引号''
      //this.$store.commit('addNum',count)
      this.$store.commit(ADDNUM,count)
      //调用 action - 异步方法  - 点击后的数据和界面相同不存mutations里面的不同步现象（插件里）
      this.$store.dispatch(ADDNUM,count)
    }
  },
  computed: {
    //方法1 - 返回 调用vuex.num值
    // num(){
    //   return this.$store.state.num
    // }
    //方法2
    // ... - 去掉括号 - ...mapState(['num']) == ...{num(){return this.$store.state.num}} == 方法1
    ...mapState(['num']),
    ...mapGetters(['showGoods']),
    // 模块a取值
    ...mapState({
      boxnum: state => state.moduleA.boxnum  // function(state){return state.moduleA.boxnum}
    })

    // ... -- es6语法  -- 去掉{} 和 []
    // [...[1,2,3],2,...[2,3,4]] == [1,2,3,2,2,3,4]

    
  },
}

// es6 箭头语法
  var a1  = params =>{console.log(params)}
  //箭头函数会第一识别箭头后是否是代码块
  //如果没有默认返回值，则默认返回undefined
  console.log(a1()) // undefined

  var a1 = function(params){
    return console.log(params)
  }

  //1. 没有参数，写括号 ()=>{}
  //2. 1个参数 ，可以不写括号  params => {}
  //3. 多个参数，必须加上括号  (params,params1) =>{}
  //4. 箭头之后是语句，返回的就是语句 return true -- ()=> true
  //5. 箭头之后是花括号，返回是代码块里面的返回值 -- ()=>{console.log(params)}

</script>
