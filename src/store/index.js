import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import contacts from "./modules/contacts";
import products from "./modules/products";


Vue.use(Vuex)

export default new Vuex.Store({
  state(){
    return{
      message: null
    }
  },
  mutations:{
    setMessage(state, message){
      state.message = message
    },
    clearMessage(state){
      state.message = null
    }
  },
  actions:{
    setMessage({commit}, message){
      commit('setMessage', message)
      setTimeout(()=>{
        commit('clearMessage')
      },5000)
    }
  },

  modules: {
    auth, contacts, products
  }
})
