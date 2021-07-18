import * as axios from "axios";

export default {
    state: {
        products: [],
        basked: [],
        searchValue: '',
    },
    mutations: {
        SET_PRODUCTS_DATA(state, products) {
            state.products = products
        },
        SET_PRODUCT_TO_BASKED(state, product) {
            if (state.basked.length){
                let isProductExist = false
                state.basked.map((item)=>{
                    if(item.id === product.id){
                        isProductExist = true
                        item.quantity++
                    }
                })
                if(!isProductExist){
                    state.basked.push(product)
                }
            } else{
                state.basked.push(product)
            }

        },
        REMOVE_FROM_BASKED(state, idx){
            state.basked.splice(idx, 1)
        },
        INCREMENT: (state, idx) => {
            state.basked[idx].quantity++
        },
        DECREMENT: (state, idx) => {
            if (state.basked[idx].quantity > 1) {
                state.basked[idx].quantity--
            }
        },
        SET_SEARCH_VALUE: (state, value) => {
            state.searchValue = value
        },

    },

    actions: {
        async GET_PRODUCTS_FROM_API({commit}) {
            try {
                const {data} = await axios.get(`http://localhost:3000/products`)
                commit('SET_PRODUCTS_DATA', data)
            } catch (e) {
                console.log(e)
            }
        },

        ADD_TO_BASKED({commit}, product) {
            commit('SET_PRODUCT_TO_BASKED', product)
        },
        DELETE_FROM_BASKED({commit},idx){
            commit('REMOVE_FROM_BASKED', idx)
        },

        INCREMENT_BASKED_ITEM({commit}, idx){
            commit('INCREMENT', idx)
        },

        DECREMENT_BASKED_ITEM({commit}, idx){
            commit('DECREMENT', idx)
        },

        GET_SEARCH_VALUE({commit}, value){
            commit('SET_SEARCH_VALUE', value)
        },



    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },

        BASKED(state) {
            return state.basked
        },

        SEARCH_VALUE(state){
            return state.searchValue
        },

    }
}

