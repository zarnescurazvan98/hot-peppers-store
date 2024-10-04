<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col h-full">
    <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">

    <div class="p-4 flex flex-col flex-grow">
      <div class="flex-1">
        <h2 class="text-lg font-bold">{{ product.name }}</h2>
        <p class="text-gray-700 mt-2">{{ product.description }}</p>
      </div>

      <div class="mt-2">
        <p class="text-xl font-semibold">${{ product.price.toFixed(2) }}</p>
        <p class="text-sm text-gray-600">Scoville Rating: {{ product.scovilleScale.toLocaleString() }} SHU</p>
      </div>

      <div class="mt-4">
        <label for="quantity" class="block text-sm font-medium text-gray-700">Quantity:</label>
        <select v-model="selectedQuantity" id="quantity" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500">
          <option v-for="number in quantities" :key="number" :value="number">{{ number }}</option>
        </select>
      </div>

      <button @click="addToCart" class="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">Add to Cart</button>
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
      selectedQuantity: 1,  // Default quantity
      quantities: Array.from({length: 10}, (_, i) => i + 1), // Generates an array [1, 2, ..., 10]
    };
  },
  methods: {
    addToCart() {
      const productWithQuantity = {...this.product, quantity: this.selectedQuantity}; // Include selected quantity
      this.$store.dispatch('addProduct', productWithQuantity);  // Dispatch the addProduct action to the Vuex store
      console.log(`Added ${this.selectedQuantity} of ${this.product.name} to cart!`);
    },
  },
};
</script>
