<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-50">
    <Header />

    <main class="flex-grow overflow-y-auto pt-16 pb-16">
      <router-view @show-toast="showToast"></router-view>
    </main>

    <Footer />

    <!-- Toast Notification -->
    <ToastNotification v-if="toastVisible" :product="toastProduct" :quantity="toastQuantity" />
  </div>
</template>

<script>
import ToastNotification from './components/ToastNotification.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    ToastNotification,
    Header,
    Footer,
  },
  data() {
    return {
      toastVisible: false,
      toastProduct: null,
      toastQuantity: null,
    };
  },
  methods: {
    showToast(product, quantity) {
      this.toastProduct = product;
      this.toastQuantity = quantity;
      this.toastVisible = true;
      setTimeout(() => {
        this.toastVisible = false;
      }, 1000); // Hide after 1 second
    },
  },
};
</script>

<style scoped>
/* Add global styles or additional app-level styles here */
</style>
