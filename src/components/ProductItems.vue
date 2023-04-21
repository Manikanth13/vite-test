<template>
  <div class="shadow-md product-card flex flex-col">
    <div class="bg-gray-50 round-t-md flex items-center justify-center">
      <img
        :src="product.image"
        height="100"
        width="100"
        class="object-contain"
      />
    </div>
    <div class="flex flex-col flex-1 px-4 pt-2 pb-4">
      <div class="flex-1">
        <div class="flex items-center space-x-2">
          <p class="text-sm font-medium">${{ product.price }}</p>
        </div>

        <router-link
          :to="{
            name: 'product-detail',
            params: {
              id: product.id,
            },
          }"
          class="search-item-link"
        >
          <p class="flex-1 text-sm hover:text-sky-500 dark:hover:text-sky-400">
            {{ product.title }}
          </p>
        </router-link>
      </div>

      <div class="mt-3 flex items-center">
        <div class="flex-1">
          <ProductRating :rating="product.rating.rate" />
        </div>
        <span class="text-black text-xs"> ({{ product.rating.count }}) </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductRating from "./ProductRating.vue";

interface Props {
  product: object;
}

const props = defineProps<Props>();
</script>

<style scoped>
.product-card {
  min-height: 320px;
}
</style>