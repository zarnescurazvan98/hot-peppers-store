<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">Explore Our Hot Peppers</h1>

      <!-- Filters Component -->
      <FiltersBar :products="products" @filtered-products="updateFilteredProducts" />

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ProductCard
            v-for="product in filteredProducts"
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
import FiltersBar from '../components/FiltersBar.vue';
import products from '../assets/products.json';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    FiltersBar,
  },
  data() {
    return {
      products,
      filteredProducts: products,
    };
  },
  methods: {
    updateFilteredProducts(filteredProducts) {
      console.log('updateFilteredProducts - received filteredProducts:', JSON.stringify(filteredProducts));
      this.filteredProducts = filteredProducts;
    }
    ,
    forwardToast(product, quantity) {
      this.$emit('show-toast', product, quantity);
    },
  },
};
</script>
