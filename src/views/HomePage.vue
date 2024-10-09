<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="relative h-[70vh] bg-cover bg-center" style="background-image: url('/images/banner_hot_peppers.jpeg')">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-10 text-center text-white p-10">
        <h1 class="text-5xl font-bold mb-4">Spice Up Your Life with Our Hottest Peppers!</h1>
        <p class="text-xl mb-6">Discover the hottest and rarest peppers from around the world.</p>
        <!-- Use router-link for smooth navigation -->
        <router-link to="/products" class="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition duration-200">
          Shop Now
        </router-link>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-10 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Best Sellers</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductCard
              v-for="product in featuredProducts"
              :key="product.id"
              :product="product"
              @show-toast="forwardToast"
          />
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-10 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Shop by Category</h2>
        <div class="flex justify-center space-x-8">
          <router-link to="/shop?category=mild" class="bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-600 transition">Mild Peppers</router-link>
          <router-link to="/shop?category=hot" class="bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition">Hot Peppers</router-link>
          <router-link to="/shop?category=superhot" class="bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition">Super Hot Peppers</router-link>
        </div>
      </div>
    </section>

    <!-- New Arrivals Section -->
    <section class="py-10 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">New Arrivals</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <ProductCard v-for="product in newArrivals" :key="product.id" :product="product" />
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-10 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">About Us</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to Hot Peppers Store! We are passionate about bringing the best and hottest peppers from around the globe to spice up your dishes. Our commitment to quality ensures that every pepper you purchase is fresh and full of flavor.
        </p>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-10 bg-gray-100">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">What Our Customers Are Saying</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600">"Absolutely love the variety! The Death Spiral pepper is now a staple in my kitchen!"</p>
            <p class="mt-4 font-semibold">- John D.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600">"Fast shipping and the quality of the peppers is top-notch."</p>
            <p class="mt-4 font-semibold">- Sarah M.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-600">"The super-hot collection is incredible! Perfect for my spicy recipes!"</p>
            <p class="mt-4 font-semibold">- Alex P.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscribe Section -->
    <section class="py-10 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Subscribe for Updates</h2>
        <p class="text-lg text-gray-600 mb-4">Get the latest on new arrivals, promotions, and spicy recipes!</p>
        <form class="flex justify-center">
          <input type="email" placeholder="Enter your email" class="p-3 rounded-l-lg border border-gray-300" />
          <button type="submit" class="bg-green-600 text-white py-3 px-6 rounded-r-lg hover:bg-green-700 transition">Subscribe</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import products from '../assets/products.json';

export default {
  name: 'HomePage',
  components: { ProductCard },
  data() {
    return {
      featuredProducts: products.slice(0, 4),
      newArrivals: products.slice(4, 8),
    };
  },
  methods: {
    forwardToast(product, quantity) {
      this.$emit('show-toast', product, quantity);
    },
  },
};
</script>
