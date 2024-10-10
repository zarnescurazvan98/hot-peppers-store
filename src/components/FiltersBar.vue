<template>
  <div class="p-4 bg-white shadow-md rounded-md mb-6 flex gap-6 justify-between items-center">
    <!-- Price Filter Dropdown -->
    <div class="relative inline-block text-left">
      <div>
        <button @click="togglePriceDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Sort by Price
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div v-if="priceDropdownOpen" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <button @click="sortPrice('asc')" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Price: Low to High</button>
          <button @click="sortPrice('desc')" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Price: High to Low</button>
        </div>
      </div>
    </div>

    <!-- Scoville Rating Filter Dropdown -->
    <div class="relative inline-block text-left">
      <div>
        <button @click="toggleScovilleDropdown" type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Sort by Scoville Rating
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div v-if="scovilleDropdownOpen" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <button @click="sortScoville('asc')" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Scoville: Low to High</button>
          <button @click="sortScoville('desc')" class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Scoville: High to Low</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      priceDropdownOpen: false,
      scovilleDropdownOpen: false,
      filteredProducts: this.products,
    };
  },
  methods: {
    togglePriceDropdown() {
      this.priceDropdownOpen = !this.priceDropdownOpen;
      if (this.priceDropdownOpen) this.scovilleDropdownOpen = false;
    },
    toggleScovilleDropdown() {
      this.scovilleDropdownOpen = !this.scovilleDropdownOpen;
      if (this.scovilleDropdownOpen) this.priceDropdownOpen = false;
    },
    sortPrice(order) {
      this.filteredProducts.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
      this.$emit('updateFilteredProducts', this.filteredProducts);
      this.priceDropdownOpen = false; // Close dropdown after selection
    },
    sortScoville(order) {
      this.filteredProducts.sort((a, b) => (order === 'asc' ? a.scovilleScale - b.scovilleScale : b.scovilleScale - a.scovilleScale));
      this.$emit('updateFilteredProducts', this.filteredProducts);
      this.scovilleDropdownOpen = false; // Close dropdown after selection
    },
  },
};
</script>
