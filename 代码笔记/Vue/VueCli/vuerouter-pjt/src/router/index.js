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

// 导航守卫
// 监听路由的进入和离开的；
// vue-router
// beforeEach和afterEach的钩子函数，在路由即将改变前和改变后触发
router.beforeEach((to,from,next)=>{
  /*
  1. to: 即将要进入的目标路由对象 -- 去哪里
  2. from: 当前导航即将要离开的路由对象 -- 从哪来
  3. next: 调用该方法后，才能进入下一个钩子函数  -- next（）如果传输参数会进入两次路由守卫 -- 遇到不穿参数跳出
  
  */
 console.log('路由守卫')
 console.log(to)
 console.log(from)

  if(to.path == '/my'){
    return next('/gwc')
  }
  next(); //跳出路由守卫
})
/*
扩展
1. afterEach, 不需要主动调用next()函数
2. beforeEach被称之为全局守卫
   1. 路由独享的守卫
   2. 组件内的守卫
*/


//导出router模块（默认）
export default router

// 路由配置步骤
/*
1 - 引入相关模块
2 - 注册使用模块
3 - 实力化陪配置路由
4 - 导出暴露配置

*/
