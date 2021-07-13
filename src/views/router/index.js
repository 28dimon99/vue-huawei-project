import { createRouter, createWebHistory } from 'vue-router'


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
    name: 'Products',
    meta: {layout: 'main'},
    component: () => import('../views/Products/Products')
  },
  {
    path: '/basked',
    name: 'Basked',
    meta: {layout: 'main'},
    component: () => import('../views/Basked/Basked')
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
    path: '/order',
    name: 'OrderProducts',
    meta: {layout: 'main'},
    component: () => import('../ui/OrderProducts')
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass : 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
