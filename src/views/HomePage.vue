<template>
  <div class="homepage">
    <!-- Hero Section -->
    <section class="relative h-[70vh] bg-cover bg-center" style="background-image: url('./images/banner_hot_peppers.jpeg')">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="relative z-5 text-center text-white p-10">
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

    <!-- Pepper Heat Levels Section -->
    <section class="py-10 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">Pepper Heat Levels</h2>
        <p class="text-lg text-gray-600 mb-6">Not all peppers are created equal! Here's a breakdown of the heat levels of the peppers we offer, based on the Scoville Heat Units (SHU).</p>
        <ul class="text-lg text-gray-600 space-y-4">
          <li><strong>Mild Peppers:</strong> 100 - 2,500 SHU (e.g., Bell Peppers, Hatch Green Chiles)</li>
          <li><strong>Medium Heat Peppers:</strong> 2,500 - 25,000 SHU (e.g., Jalapeños, Poblano Peppers)</li>
          <li><strong>Hot Peppers:</strong> 25,000 - 100,000 SHU (e.g., Cayenne, Serrano Peppers)</li>
          <li><strong>Very Hot Peppers:</strong> 100,000 - 350,000 SHU (e.g., Habanero, Scotch Bonnet)</li>
          <li><strong>Super Hot Peppers:</strong> 350,000 - 2,200,000 SHU (e.g., Carolina Reaper, Ghost Pepper)</li>
        </ul>
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
