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
        meta:{
          index:'/department'
        },
        component: ()=>import('../views/department/Department.vue')
      },
      {
        path: '/employee',
        meta:{
          index:'/employee'
        },
        component: ()=>import('../views/employee/Employee.vue')
      },
      {
        path: '/employee/edit/:eid',
        // 带出值，用来route获取的
        meta:{
          index:'/employee'
        },
        component: ()=>import('../views/employee/Editemployee.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
