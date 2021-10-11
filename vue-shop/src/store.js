import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '@/services/ProductService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Kovacs Bela' },
    categories: [
      'toys',
      'laptops',
      'food',
      'drinks',
      'books',
      'clothes',
      'phones'
    ],
    products: []
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    createProduct({ commit }, product) {
      return ProductService.postProduct(product).then(() => {
        commit('ADD_PRODUCT', product)
      })
    },
    fetchProducts({ commit }) {
      ProductService.getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  },
  getters: {
    getProductById: state => id => {
      return state.products.find(product => product.id === id)
    }
  }
})
