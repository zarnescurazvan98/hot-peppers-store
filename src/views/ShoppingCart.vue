<template>
  <div class="cart-page p-6 bg-gray-50 min-h-screen">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>

      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between border-b py-6">
          <img :src="item.image" alt="Product Image" class="w-20 h-20 object-cover rounded-lg shadow-md">

          <div class="flex-1 px-4">
            <h2 class="text-xl font-semibold text-gray-800">{{ item.name }}</h2>
            <p class="text-sm text-gray-600">Price: ${{ item.price.toFixed(2) }} each</p>
            <p class="text-sm text-gray-600">Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>

          <!-- Use QuantitySelector component here -->
          <QuantitySelector v-model="item.quantity" @update:modelValue="updateQuantity(item.id, $event)" />

          <button @click="removeFromCart(item.id)" class="flex items-center justify-center bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>

        <div class="mt-6 text-right">
          <h3 class="text-2xl font-bold text-gray-800">Total: ${{ cartTotal.toFixed(2) }}</h3>
          <button class="mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition flex items-center justify-center">
            <i class="fas fa-credit-card mr-2"></i> Proceed to Checkout
          </button>
        </div>
      </div>

      <p v-else class="text-lg text-gray-600 mt-10 flex items-center justify-center">
        <i class="fas fa-shopping-cart text-4xl text-gray-300 mr-4"></i> Your cart is empty
      </p>
    </div>
  </div>
</template>

<script>
import QuantitySelector from '../components/QuantitySelector.vue';

export default {
  name: 'ShoppingCart',
  components: {
    QuantitySelector,
  },
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
    updateQuantity(productId, newQuantity) {
      this.$store.dispatch('updateProductQuantity', { productId, quantity: newQuantity });
    },
  },
};
</script>
