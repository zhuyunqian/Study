import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Three from '../views/Three.vue'
import Jdhome from '../Jd.vue'

//Vue.use(VueRouter) == 调用VueRouter里面的install方法
//install方法 主要做了 两件事情 绑定了== 
//1. Vue.prototype.$router  - 整个项目的路由对象
//2. Vue.prototype.$route - 当前活跃的路由对象
//注册vuerouter
Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/home',
  //   component:Jdhome,
  // },
  //  嵌套关系路由
  {
    path:'/',
    component:Jdhome,
    children:[
      {
        path:'/jdhome',
        component:()=>import('../views/Jdhome.vue'),
      },
      {
        path:'/fenlei',
        component:()=>import('../views/Jd1.vue'),
      },
      {
        path:'/gwc',
        component:()=>import('../views/Jd2.vue'),
      },
      {
        path:'/my',
        component:()=>import('../views/Jd3.vue'),
      }
    ]
  },
  
  {
    //:冒号代表这里的路径是动态变化的 pid为变量
    path:'/product/:pid', 
    component:()=>import('../views/Product.vue'),
  },

]

// 路由配置表
// const routes = [
//   {
//     //组件对应路径
//     //路径
//     path: '/',
//     //名称
//     name: 'Home',
//     //组件
//     component: Home
//   },
//   // 增加组件及跳转
//   {
//     path: '/three',
//     name: 'Three',
//     component: Three
//   },
//   {
//     path: '/about',
//     name: 'About',
//     //es6箭头函数 == function(){return import '../views/About.vue'}  == 返回一个引入语法
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

//实力化并配置路由
const router = new VueRouter({
  //路由两种形式  --- history and hash（#/）
  mode: 'history', 
  //基础路径url
  base: process.env.BASE_URL,  
  //routes:routes 指向路由配置表
  routes
})

//导出router模块（默认）
export default router

// 路由配置步骤
/*
1 - 引入相关模块
2 - 注册使用模块
3 - 实力化陪配置路由
4 - 导出暴露配置

*/
