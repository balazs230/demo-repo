import Vue from "vue";
import VueRouter from "vue-router";
import ProductCreate from './views/ProductCreate.vue'
import ProductList from './views/ProductList.vue'
import ProductShow from './views/ProductShow.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product-list",
    component: ProductList,
  },
  {
    path: "/product",
    name: "product-show",
    component: ProductShow
  },
  {
    path: "/product/create",
    name: "product-create",
    component: ProductCreate
  }
];

const router = new VueRouter({
  routes,
});

export default router;
