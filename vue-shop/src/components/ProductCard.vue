<template>
  <router-link class="product-link" :to="{ name: 'product-show', params: { id: product.id } }">
    
    <!-- <div class="product-card -shadow">
      <span class="eyebrow">@{{ product.time }} on {{ product.date }}</span>
      <h4 class="title">{{ product.title }}</h4>
      <BaseIcon name="users">{{ product.attendees.length }} attending</BaseIcon>
    </div> -->


    <div class="card" style="width:400px">
      <img class="card-img-top" src="https://static.wixstatic.com/media/fc7570_ae9913d461894a7ebb7fc420d828ab83~mv2.png/v1/fill/w_601,h_338,al_c,q_85,usm_0.66_1.00_0.01/Image-empty-state.webp" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.product-card > .title {
  margin: 0;
}
.product-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
