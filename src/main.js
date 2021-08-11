import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from "vuelidate";
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import  './theme.css'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Vuelidate)






firebase.initializeApp({
    apiKey: "AIzaSyDc8oa2JN_ObLqqiI_vqv7gfWCSlNn94UE",
    authDomain: "vue-huawei-project.firebaseapp.com",
    projectId: "vue-huawei-project",
    storageBucket: "vue-huawei-project.appspot.com",
    messagingSenderId: "525382592503",
    appId: "1:525382592503:web:0c45e185d08f48db07b0f2",
    measurementId: "G-7E7HR42E9M"
})
let app

firebase.auth().onAuthStateChanged(()=>{
    if(!app){
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})

