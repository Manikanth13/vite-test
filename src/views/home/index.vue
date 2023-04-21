<template>
  <div class="p-3 py-8">
    <div v-if="state.error">
      <h2>Error: {{ error }}</h2>
    </div>
    <div v-if="state.loading">
      <h2>Loading data...</h2>
    </div>
    <div class="px-4 py-4">
      <product-list :products="products.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { productItems } from "../../services/productItems";
import { computed, onMounted, reactive, ref } from "vue";
import ProductRating from "../../components/ProductRating.vue";
import ProductList from "../../container/ProductList.vue";
import { useStore, mapActions } from "vuex";

const data = ref([]);
const error = ref();
const laoding = ref();
const store = useStore();

const state = reactive({ data, error, laoding });

const products = computed(() => {
  return store.getters["productDetails/getProducts"];
});

onMounted(async () => {
  const { data, error, loading } = productItems({});

  state.data = data;
  state.error = error;
  state.laoding = loading;

  store.dispatch("productDetails/initProducts", { data });
});
</script>
