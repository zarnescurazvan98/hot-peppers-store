<template>
  <div class="product-details">
    <img :src="product.image" :alt="product.name" />
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>Heat Level: {{ product.heatLevel }}</p>
    <p>Price: ${{ product.price.toFixed(2) }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
import products from '../assets/products.json';

export default {
  props: ['id'],
  data() {
    return {
      product: products.find(p => p.id === parseInt(this.id)),
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addProduct', product);
    },
  },
};
</script>
