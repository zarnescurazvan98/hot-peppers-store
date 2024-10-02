<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
    <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover">
    <div class="p-4">
      <h2 class="text-lg font-bold">{{ product.name }}</h2>
      <p class="text-gray-700">{{ product.description }}</p>
      <p class="text-xl font-semibold mt-2">${{ product.price.toFixed(2) }}</p>
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
  methods: {
    addToCart() {
      // Logic to add to cart
      console.log(`Added ${this.product.name} to cart!`);
    },
  },
};
</script>
