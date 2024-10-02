<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id">
        <h2>{{ item.name }}</h2>
        <p>Price: ${{ item.price.toFixed(2) }}</p>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
      <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
      <button>Proceed to Checkout</button>
    </div>
    <p v-else>Your cart is empty</p>
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

<style>
/* Add your styling here */
</style>
