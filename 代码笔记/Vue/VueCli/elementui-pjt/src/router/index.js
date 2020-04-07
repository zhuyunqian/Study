import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/homepage/Homepage.vue'),
    children:[
      {
        path:'/department',
        component: () => import('../views/department/Department'),
      },
      {
        path: '/employee',
        component: () => import('../views/employee/Employee'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
