import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    alias: '/',
    name: 'Login',
    meta: {layout: 'auth'},
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'auth'},
    component: () => import('../views/Register')
  },
  {
    path: '/product',
    name: 'Products',
    meta: {layout: 'main'},
    component: () => import('../views/Products/Products')
  },
  {
    path: '/company',
    name: 'Company',
    meta: {layout: 'main'},
    component: () => import('../views/Company')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    meta: {layout: 'main'},
    component: () => import('../views/Delivery/Delivery')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    meta: {layout: 'main'},
    component: () => import('../views/Contacts/Contacts')
  },
  {
    path: '/history',
    name: 'History',
    meta: {layout: 'main'},
    component: () => import('../views/History')
  },
  {
    path: '/basket',
    name: 'Basked',
    meta: {layout: 'main'},
    component: () => import('../views/Basket/Basket')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
