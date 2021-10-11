<template>
  <div>
    <div class="product-header">
      <h2 class="name">{{ product.name }}</h2>
      <h3>category: {{ product.category }}</h3>
    </div>
  <br><br>
    <h3>Product details</h3>
    <p>{{ product.description }}</p>


  </div>
</template>
<script>
import ProductService from '@/services/ProductService.js'

export default {
  props: ['id'],
  data() {
    return {
      product: {}
    }
  },
  created() {
    ProductService.getProduct(this.id)
      .then(response => {
        this.product = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.product-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
