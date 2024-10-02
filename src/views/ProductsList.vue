<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Our Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import products from '../assets/products.json'; // Assuming you're fetching products from this file

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  data() {
    return {
      products,
    };
  },
};
</script>
