<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-50">
    <header class="bg-green-600 text-white fixed top-0 left-0 right-0 z-10">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">Hot Peppers Store</h1>
        <nav>
          <router-link to="/" class="px-4 py-2 hover:bg-green-500 rounded transition">Home</router-link>
          <router-link to="/products" class="px-4 py-2 hover:bg-green-500 rounded transition">Products</router-link>
          <router-link to="/cart" class="px-4 py-2 hover:bg-green-500 rounded transition">Cart</router-link>
        </nav>
      </div>
    </header>
    <main class="flex-grow container mx-auto px-4 pt-20">
      <router-view></router-view>
    </main>
    <footer class="bg-gray-800 text-white py-4 fixed bottom-0 left-0 right-0">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Hot Peppers Store. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* You can add additional styles here if needed */
</style>
