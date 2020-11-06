import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/branddetail',
    name: 'BrandDetail',
    component: () => import(/* webpackChunkName: "branddetail" */ '../views/BrandDetail.vue')
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import(/* webpackChunkName: "topic" */ '../views/Topic.vue'),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue'),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      footShow: true, // true显示，false隐藏
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/productdetail/:id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "productdetail" */ '../views/ProductDetail.vue')
  },
  {
    path: '/channel/:id',
    name: 'Channel',
    component: () => import(/* webpackChunkName: "channel" */ '../views/Channel.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
