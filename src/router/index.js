import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    alias: '/',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    alias: '/',
    name: 'Register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register')
  },
  {
    path: '/product',
    alias: '/',
    name: 'Products',
    meta: {layout: 'main'},
    component: () => import('../views/Products/Products')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
