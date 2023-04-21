<template>
  <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <product-items
      :product="product"
      v-for="product in products"
      :key="product.id"
    />
  </div>
</template>

<script setup lang="ts">
import ProductItems from "../components/ProductItems.vue";

interface Props {
  products: object;
}

const props = defineProps<Props>();
</script>