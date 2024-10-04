<template>
  <div class="cart-page p-6">
    <h1 class="text-3xl font-bold mb-4">Your Cart</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="border-b py-4 flex items-center">
        <img :src="item.image" alt="Product Image" class="w-16 h-16 object-cover rounded mr-4">
        <div class="flex-1">
          <h2 class="text-lg font-bold">{{ item.name }}</h2>
          <p class="text-gray-700">Price: ${{ item.price.toFixed(2) }} each</p>
          <p class="text-gray-600">Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}</p>

          <div class="mt-2 flex items-center">
            <label for="quantity-{{ item.id }}" class="text-sm font-medium text-gray-700">Quantity:</label>
            <select
                v-model="item.quantity"
                @change="updateQuantity(item.id, item.quantity)"
                id="quantity-{{ item.id }}"
                class="ml-2 block w-16 border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option v-for="number in quantities" :key="number" :value="number">{{ number }}</option>
            </select>
          </div>
        </div>

        <button @click="removeFromCart(item.id)" class="bg-red-500 text-white py-1 px-4 ml-4 rounded hover:bg-red-600 transition">
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
    quantities() {
      return Array.from({length: 10}, (_, i) => i + 1); // Generates an array [1, 2, ..., 10]
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$store.dispatch('removeProduct', productId);
    },
    updateQuantity(productId, newQuantity) {
      this.$store.dispatch('updateProductQuantity', {productId, quantity: newQuantity});
    },
  },
};
</script>

<style scoped>
/* Add styles if needed */
</style>
