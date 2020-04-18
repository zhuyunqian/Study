import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('../views/login/Login.vue')
  },
  {
    path: '/',
    name: 'Homepage',
    component: ()=>import('../views/homepage/Homepage.vue'),
    children:[
      {
        path: '/department',
        component: ()=>import('../views/department/Department.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
