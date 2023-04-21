<template>
  <div class="dropdown">
    <div class="form-control">
      <input
        type="text"
        placeholder="Search..."
        class="input input-ghost border-2 border-sky-700 rounded-md"
        v-model="input"
      />
    </div>
    <ul
      class="
        absolute
        bg-white
        divide-y
        mt-2
        overflow-y-scroll
        rounded-box rounded-md
        ring-black ring-opacity-5
        shadow-lg
        w-64
      "
      style="max-height: 50vh"
    >
      <li class="px-1 py-1" v-for="product in searchResults" :key="product.id">
        <Menu>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              @click.prevent="navigate(product.id)"
              v-text="product.title"
              :class="[
                active ? 'bg-sky-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            ></a>
          </MenuItem>
        </Menu>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const store = useStore();
const router = useRouter();
const input = ref("");

const searchResults = computed(() => {
  if (!input.value || input.value.length < 2) return [];

  return store.getters["productDetails/getProducts"].data.filter((item) => {
    return item.title.toLowerCase().includes(input.value.toLowerCase());
  });
});

const navigate = (id: number) => {
  input.value = "";
  router.push(`/product-detail/${id}`);
};
</script>