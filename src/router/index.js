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
    alias: '/',
    name: 'Register',
    meta: {layout: 'auth'},
    component: () => import('../views/Register')
  },
  {
    path: '/product',
    alias: '/',
    name: 'Products',
    meta: {layout: 'main'},
    component: () => import('../views/Products/Products')
  },
  {
    path: '/company',
    alias: '/',
    name: 'Company',
    meta: {layout: 'main'},
    component: () => import('../views/Company')
  },
  {
    path: '/delivery',
    alias: '/',
    name: 'Delivery',
    meta: {layout: 'main'},
    component: () => import('../views/Delivery/Delivery')
  },
  {
    path: '/contacts',
    alias: '/',
    name: 'Contacts',
    meta: {layout: 'main'},
    component: () => import('../views/Contacts/ContactsTest')
  },
  {
    path: '/history',
    alias: '/',
    name: 'History',
    meta: {layout: 'main'},
    component: () => import('../views/History')
  },
  {
    path: '/basked',
    alias: '/',
    name: 'Basked',
    meta: {layout: 'main'},
    component: () => import('../views/Basked/Basked')
  },
  {
    path: '/order',
    alias: '/',
    name: 'Order',
    meta: {layout: 'main'},
    component: () => import('../ui/OrderProducts')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
