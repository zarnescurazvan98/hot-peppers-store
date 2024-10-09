<template>
  <header class="bg-green-600 text-white fixed top-0 left-0 right-0 z-10 h-16 flex items-center">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Store Title as clickable link -->
      <router-link to="/" class="text-2xl font-bold hover:text-green-300 transition">
        Hot Peppers Store
      </router-link>

      <!-- Navigation with icons -->
      <nav class="flex space-x-4 items-center">
        <!-- Home link with icon -->
        <router-link to="/" class="px-4 py-2 hover:bg-green-500 rounded-md transition flex items-center space-x-1">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </router-link>

        <!-- Products link with icon -->
        <router-link to="/products" class="px-4 py-2 hover:bg-green-500 rounded-md transition flex items-center space-x-1">
          <i class="fas fa-pepper-hot"></i>
          <span>Products</span>
        </router-link>

        <!-- Cart link with icon and counter -->
        <router-link to="/cart" class="relative px-4 py-2 hover:bg-green-500 rounded-md transition flex items-center space-x-1">
          <i class="fas fa-shopping-cart"></i>
          <span>Cart</span>
          <!-- Cart Counter (dynamic) -->
          <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {{ cartCount }}
          </span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapGetters(['cartCount']), // Use cartCount getter
  },
};
</script>
