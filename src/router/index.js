import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
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
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Products/Products')
    },
    {
      path: '/company',
      name: 'Company',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Company')
    },
    {
      path: '/delivery',
      name: 'Delivery',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Delivery/Delivery')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Contacts/Contacts')
    },
    {
      path: '/history',
      name: 'History',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/History')
    },
    {
      path: '/basket',
      name: 'Basked',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Basket/Basket')
    },

  ]
})


router.beforeEach((to,from, next)=>{
   const currentUser = firebase.auth().currentUser
   const requireAuth = to.matched.some(record => record.meta.auth)
  if(requireAuth && !currentUser){
    next('/login')
  }else{
    next()
  }
})


export default router
