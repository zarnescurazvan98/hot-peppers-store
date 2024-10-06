<template>
  <div class="flex items-center space-x-2">
    <button @click="decreaseQuantity" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition">-</button>
    <span class="text-lg">{{ quantity }}</span>
    <button @click="increaseQuantity" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition">+</button>
  </div>
</template>

<script>
export default {
  name: 'QuantitySelector',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      default: 10,
    },
    min: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    quantity: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    increaseQuantity() {
      if (this.quantity < this.max) {
        this.quantity += 1;
      }
    },
    decreaseQuantity() {
      if (this.quantity > this.min) {
        this.quantity -= 1;
      }
    },
  },
};
</script>
