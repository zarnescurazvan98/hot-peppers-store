<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">Explore Our Hot Peppers</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @show-toast="forwardToast"
        />
      </div>
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
    return {
      products,
    };
  },
  methods: {
    forwardToast(product, quantity) {
      // Forward the event to App.vue
      this.$emit('show-toast', product, quantity);
    },
  },
};
</script>
