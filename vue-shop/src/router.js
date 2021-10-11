import Vue from 'vue'
import Router from 'vue-router'
import ProductCreate from './views/ProductCreate.vue'
import ProductList from './views/ProductList.vue'
import ProductShow from './views/ProductShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/product/create',
      name: 'product-create',
      component: ProductCreate
    },
    {
      path: '/product/:id',
      name: 'product-show',
      component: ProductShow,
      props: true
    }
  ]
})
