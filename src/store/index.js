import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import contacts from "./modules/contacts";
import products from "./modules/products";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error){
      state.error = error
    },
    clearError(state){
      state.error = null
    }
  },
  getters:{
    error: s => s.error
  },
  modules: {
    auth, contacts, products
  }
})
