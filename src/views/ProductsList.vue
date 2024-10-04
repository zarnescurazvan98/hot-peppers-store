<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">Our Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import products from '../assets/products.json';

export default {
  name: 'ProductList',
  components: {ProductCard},
  data() {
    return {products};
  },
};
</script>
