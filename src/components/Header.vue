<template>
  <header class="bg-green-600 text-white fixed top-0 left-0 right-0 z-10 h-16 flex items-center">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Hot Peppers Store</h1>
      <nav class="flex space-x-4">
        <router-link to="/" class="px-4 py-2 hover:bg-green-500 rounded-md transition">Home</router-link>
        <router-link to="/products" class="px-4 py-2 hover:bg-green-500 rounded-md transition">Products</router-link>
        <router-link to="/cart" class="px-4 py-2 hover:bg-green-500 rounded-md transition">Cart</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>
