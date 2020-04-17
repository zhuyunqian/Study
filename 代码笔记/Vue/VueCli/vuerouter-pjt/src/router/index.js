import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    //组件对应路径
    //路径
    path: '/',
    //名称
    name: 'Home',
    //组件
    component: Home
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
  {
    path: '/about',
    name: 'About',
    //es6箭头函数 == function(){return import '../views/About.vue'}  == 返回一个引入语法
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
