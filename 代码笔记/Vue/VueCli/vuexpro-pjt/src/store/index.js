import Vue from 'vue'
import Vuex from 'vuex'
import { ADDNUM } from './mutation-types.js'
import moduleA from './module/moduleA.js'
import moduleB from './module/moduleB.js'

//触发 vuex.install方法  Vue.prototype.$store事件
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 添加共享状态
    num:10,
    goods:[
      {id:1,name:'连衣裙',isShow:true},
      {id:2,name:'裤子',isShow:false},
      {id:3,name:'袜子',isShow:false},
      {id:4,name:'鞋子',isShow:true},
      ]      
  },
  //作用更新state的值  只能写同步代码
  mutations: {
    //addNum(state,payload){
    [ADDNUM](state,payload){
        //更新state的num值
      state.num += payload
    },
  },
  //对数据进行再加工
  getters:{
    showGoods(state){
      return state.goods.filter(function(good){
        return good.isShow
      })
    }
  },
  //异步语法
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
