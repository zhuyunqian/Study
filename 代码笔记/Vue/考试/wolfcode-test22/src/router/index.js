import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
 
    {
      path: '/full',
      name: 'Full',
      component: () => import( '../views/Full.vue')
    },
    {
      path: '/',
      name: 'Index',
      component: () => import( '../views/home/Index.vue'),
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import( '../views/home/children/Homepage.vue')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import( '../views/home/children/Search.vue')
        },
        {
          path: '/order',
          name: 'Order',
          component: () => import( '../views/home/children/Order.vue')
        },
        {
          path: '/my',
          name: 'my',
          component: () => import( '../views/home/children/My.vue')
        },
      ]
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
