<template>
  <div>
    <h1>Create a Product</h1>
    <form @submit.prevent="createProduct">
      <label>Select a category</label>
      <select v-model="product.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your product</h3>
      <div class="field">
        <label>Name</label>
        <input v-model="product.name" type="text" placeholder="Add an product name"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="product.description" type="text" placeholder="Add a description"/>
      </div>

      <input type="submit" class="btn btn-success" value="Submit"/>
    </form>
  </div>
</template>


<script>
export default {
  components: {
  
  },
  data() {
    return {
      categories: this.$store.state.categories,
      product: this.createFreshProductObject()
    }
  },
  methods: {
    createProduct() {
      this.$store
        .dispatch('createProduct', this.product)
        .then(() => {
          this.$router.push({
            name: 'product-show',
            params: { id: this.product.id }
          })
          this.product = this.createFreshProductObject()
        })
        .catch(() => {
          console.log('There was a problem creating your product')
        })
    },
    createFreshProductObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        name: '',
        description: '',
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
