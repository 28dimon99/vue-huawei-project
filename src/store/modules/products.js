import * as axios from "axios";

export default {
    state: {
        products: [],
        basket: [],
        searchValue: '',
    },
    mutations: {
        SET_PRODUCTS_DATA(state, products) {
            state.products = products
        },
        SET_PRODUCT_TO_BASKET(state, product) {
            if (state.basket.length){
                let isProductExist = false
                state.basket.map((item)=>{
                    if(item.id === product.id){
                        isProductExist = true
                        item.quantity++
                    }
                })
                if(!isProductExist){
                    state.basket.push(product)
                }
            } else{
                state.basket.push(product)
            }

        },
        REMOVE_FROM_BASKET(state, idx){
            state.basket.splice(idx, 1)
        },
        INCREMENT: (state, idx) => {
            state.basket[idx].quantity++
        },
        DECREMENT: (state, idx) => {
            if (state.basket[idx].quantity > 1) {
                state.basket[idx].quantity--
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

        ADD_TO_BASKET({commit}, product) {
            commit('SET_PRODUCT_TO_BASKET', product)
        },
        DELETE_FROM_BASKET({commit},idx){
            commit('REMOVE_FROM_BASKET', idx)
        },

        INCREMENT_BASKET_ITEM({commit}, idx){
            commit('INCREMENT', idx)
        },

        DECREMENT_BASKET_ITEM({commit}, idx){
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

        BASKET(state) {
            return state.basket
        },

        SEARCH_VALUE(state){
            return state.searchValue
        },

    }
}

