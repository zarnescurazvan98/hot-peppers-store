<template>
  <div class="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col h-full transform hover:scale-105 transition-transform">
    <div class="relative">
      <img :src="product.image" alt="Product Image" class="w-full h-56 object-cover rounded-t-lg">
      <div class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
        <i class="fas fa-heart text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer"></i>
      </div>
    </div>

    <div class="p-4 flex flex-col flex-grow">
      <div class="flex-1">
        <h2 class="text-xl font-bold text-gray-800 mb-2 truncate">{{ product.name }}</h2>
        <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ product.description }}</p>
      </div>

      <div class="mt-2 flex justify-between items-center">
        <p class="text-lg font-semibold text-green-600">${{ product.price.toFixed(2) }}</p>
        <span class="text-sm text-gray-500"><i class="fas fa-fire text-red-500"></i> {{ product.scovilleScale.toLocaleString() }} SHU</span>
      </div>

      <!-- Use QuantitySelector component here -->
      <div class="mt-4">
        <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity:</label>
        <QuantitySelector v-model="selectedQuantity" />
      </div>

      <button @click="addToCart" class="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center justify-center">
        <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import QuantitySelector from '../components/QuantitySelector.vue';

export default {
  name: 'ProductCard',
  components: {
    QuantitySelector,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedQuantity: 1,
    };
  },
  methods: {
    addToCart() {
      const productWithQuantity = { ...this.product, quantity: this.selectedQuantity };
      this.$store.dispatch('addProduct', productWithQuantity);
    },
  },
};
</script>
