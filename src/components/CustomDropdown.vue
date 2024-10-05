<template>
  <div class="relative">
    <button
        @click="toggleDropdown"
        class="w-full bg-white border border-gray-300 rounded-md py-2 px-3 shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
    >
      {{ selected }}
      <i class="fas fa-chevron-down text-gray-400"></i>
    </button>

    <!-- Dropdown Options -->
    <ul v-if="isOpen" class="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-auto">
      <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="cursor-pointer hover:bg-green-100 py-2 px-3 text-gray-700"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomDropdown',
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false, // Controls dropdown visibility
      selected: this.modelValue, // Holds selected value
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selected = option;
      this.isOpen = false; // Close the dropdown after selecting
      this.$emit('update:modelValue', this.selected); // Emit the selected value for v-model support
    },
  },
};
</script>
