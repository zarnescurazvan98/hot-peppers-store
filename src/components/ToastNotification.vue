<template>
  <div v-if="visible" class="fixed top-20 right-10 bg-green-600 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300 flex items-center space-x-4"
       :class="{'opacity-0': !visible}">
    <img :src="product.image" alt="Product Image" class="w-12 h-12 object-cover rounded-md">
    <div>
      <p class="font-semibold">{{ product.name }}</p>
      <p>{{ quantity }} x added to the cart</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 1000); // The toast will disappear after 3 seconds
  },
};
</script>
