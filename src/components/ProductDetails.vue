<template>
  <section class="m-6">
    <div class="row">
      <div class="col">
        <button
          type="button"
          class="btn btn-link hover:text-sky-500 dark:hover:text-sky-400"
          @click="$router.go(-1)"
        >
          <fa icon="angles-left" />
          <span class="pl-2">{{ "Back" }}</span>
        </button>
      </div>
    </div>
    <div class="gap-4 grid grid-cols-2 mt-3">
      <div class="border rounded md:flex justify-center">
        <section class="bg-gray-50 round-t-md flex">
          <img
            :src="(productById || {}).image"
            height="700"
            width="500"
            class="object-contain"
          />
        </section>
      </div>
      <div class="p-4 space-y-2">
        <h5 class="text-gray-800 font-semibold">
          {{ (productById || {}).title }}
        </h5>
        <h5 class="text-sm text-gray-400">
          {{ (productById || {}).description }}
        </h5>
        <div class="grid grid-cols-6 gap-4 py-8">
          <product-rating :rating="((productById || {}).rating || {}).rate" />
          <span class="text-black text-xs">
            ({{ ((productById || {}).rating || {}).count }})
          </span>
        </div>
        <div class="grid grid-cols-6 gap-4 py-4">
          <div class="flex flex-1 items-center">
            <span>Size: </span>
          </div>
          <div class="flex flex-1 items-center col-span-2">
            <div v-for="size in sizeOptions" :key="size.id">
              <button
                type="button"
                @click="handleProductSize(size.label)"
                class="
                  text-sky-700
                  border border-sky-700
                  hover:bg-sky-700 hover:text-white
                  focus:ring-4 focus:outline-none focus:ring-sky-300
                  font-medium
                  rounded-lg
                  text-sm
                  px-3
                  py-1
                  text-center
                  inline-flex
                  items-center
                  mr-2
                  col-start-2 col-span-2
                  dark:border-sky-500
                  dark:text-sky-500
                  dark:hover:text-white
                  dark:focus:ring-sky-800
                "
              >
                <div>{{ size.label }}</div>
              </button>
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-5 md:gap-6">
          <!-- <counter :id="productById?.id" /> -->
          <div class="flex items-center">
            <router-link
              :to="{
                name: 'cart',
              }"
              class="
                btn
                flex-1
                text-sm
                hover:text-sky-500
                dark:hover:text-sky-400
                items-center
              "
            >
              <!-- <button @click="handleSize"> -->
              <fa icon="cart-shopping" />
              {{ "Add to Cart" }}
              <!-- </button> -->
            </router-link>
          </div>
          <div class="flex items-center">
            <router-link
              :to="{
                name: 'wish-list',
              }"
              class="
                btn
                flex-1
                text-sm
                hover:text-sky-500
                dark:hover:text-sky-400
                items-center
              "
            >
              <fa icon="heart" />
              {{ "Wish List" }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import ProductRating from "./ProductRating.vue";
import Counter from "./Counter.vue";

const store = useStore();
const route = useRoute();

const sizeOptions = ref([
  { title: "Small", label: "S" },
  { title: "Medium", label: "M" },
  { title: "Large", label: "L" },
  { title: "Extra Large", label: "XL" },
]);

const productById = computed(() =>
  store.getters["productDetails/getProductById"](route.params?.id)
);

function handleProductSize(size) {
  console.log("temp", size);

  store.dispatch("productDetails/updateCartItem", {
    product: { id: route.params?.id },
    size: size,
  });
}
</script>
