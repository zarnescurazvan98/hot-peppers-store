<template>
  <div class="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col h-full">
    <img :src="product.image" alt="Product Image" class="w-full h-56 object-cover rounded-t-lg">

    <div class="p-4 flex flex-col flex-grow">
      <div class="flex-1">
        <h2 class="text-xl font-bold text-gray-800 mb-2">{{ product.name }}</h2>
        <p class="text-gray-600 line-clamp-3">{{ product.description }}</p>
      </div>

      <div class="mt-4">
        <p class="text-xl font-semibold text-green-600">${{ product.price.toFixed(2) }}</p>
        <p class="text-sm text-gray-500">Scoville Rating: {{ product.scovilleScale.toLocaleString() }} SHU</p>
      </div>

      <div class="mt-4">
        <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity:</label>
        <select v-model="selectedQuantity" id="quantity" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
          <option v-for="number in quantities" :key="number" :value="number">{{ number }}</option>
        </select>
      </div>

      <button @click="addToCart" class="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedQuantity: 1,
      quantities: Array.from({length: 10}, (_, i) => i + 1),
    };
  },
  methods: {
    addToCart() {
      const productWithQuantity = {...this.product, quantity: this.selectedQuantity};
      this.$store.dispatch('addProduct', productWithQuantity);
    },
  },
};
</script>
