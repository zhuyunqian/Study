import Vue from 'vue'
import Vuex from 'vuex'
// 引入定义addnum
import { ADDNUM } from './mutation-types.js'
import moduleA from './module/moduleA.js'
import moduleB from './module/moduleB.js'

//触发 vuex.install方法  Vue.prototype.$store事件
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 添加共享状态
    num:10,
    //需要处理返回的数据
    goods:[
        {id:1,name:'连衣裙',isShow:true},
        {id:2,name:'裤子',isShow:false},
        {id:3,name:'袜子',isShow:false},
        {id:4,name:'鞋子',isShow:true},
    ]      
  },
  //**作用更新state的值  只能写同步代码
  mutations: {
    //addNum(state,payload){
      //由于这里是一个变量 - 需要加中括号
    [ADDNUM](state,payload){
        //更新state的num值
      state.num += payload
    },
  },
  //对状态进行再加工，处理state返回给组件使用
  getters:{
    //处理数据
    showGoods(state){
      //返回数据
      return state.goods.filter(function(good){
        return good.isShow
      })
    }
  },
  //异步语法 -- 写在actions里面（经常写网络请求）
  actions: {
    [ADDNUM](context,payload){
      console.log(context)
      setTimeout(function(){
        context.commit(ADDNUM,payload)
      },500)
    }
  },
  //根据状态进行分类，划分模块
  modules: {
    moduleA,
    moduleB
  }

  //箭头函数
  //()=>{}
  //params => {}
  //(param1,param2) => {}
  //()  => true    == return true
  //() => {conosle.log(123)}   ===   return undefined

})
