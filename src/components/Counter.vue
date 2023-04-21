<template>
  <div class="col-span-2 border-2 border-sky-700 rounded-md flex">
    <button
      @click="decrease"
      class="
        text-gray-600
        hover:text-gray-700 hover:bg-gray-200
        rounded-l
        items-center
        outline-none
        flex-1
      "
      :disabled="currentProduct.qty === 0"
    >
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input
      type="number"
      class="text-center text-gray-700 outline-none flex-1 w-12"
      :value="currentProduct.qty"
      min="1"
    />
    <button
      @click="increase"
      class="
        text-gray-600
        hover:text-gray-700 hover:bg-gray-200
        rounded-r
        items-center
        flex-1
      "
    >
      <span class="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

interface CounterProps {
  id: number;
}

const sizeOptions = ref([
  { title: "Small", label: "S" },
  { title: "Medium", label: "M" },
  { title: "Large", label: "L" },
  { title: "Extra Large", label: "XL" },
]);

const props = defineProps<CounterProps>();

const currentProduct = computed(() => {
  return (
    store.getters["productDetails/cartItems"].find(
      (el) => el.id === props?.id
    ) || { id: props?.id, qty: 0 }
  );
});

function decrease() {
  store.dispatch("productDetails/updateCartItem", {
    product: { id: props?.id },
    operation: "DEC",
  });
}

function increase() {
  store.dispatch("productDetails/updateCartItem", {
    product: { id: props?.id },
    operation: "INC",
  });
}
</script>