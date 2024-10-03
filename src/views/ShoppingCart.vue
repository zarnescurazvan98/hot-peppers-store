<template>
  <div class="cart-page p-6">
    <h1 class="text-3xl font-bold mb-4">Your Cart</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="border-b py-4">
        <h2 class="text-lg font-bold">{{ item.name }} (x{{ item.quantity }})</h2>
        <p class="text-gray-700">Price: ${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="removeFromCart(item.id)" class="bg-red-500 text-white py-1 px-4 mt-2 rounded hover:bg-red-600 transition">
          Remove
        </button>
      </div>
      <h3 class="text-xl font-bold mt-6">Total: ${{ cartTotal.toFixed(2) }}</h3>
      <button class="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
        Proceed to Checkout
      </button>
    </div>
    <p v-else class="text-gray-700">Your cart is empty</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeProduct', productId);
    },
  },
};
</script>

<style scoped>
/* Add styles if needed */
</style>
