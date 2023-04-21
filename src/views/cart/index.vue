<template>
  <div class="m-6">
    <button
      type="button"
      class="btn btn-link hover:text-sky-500 dark:hover:text-sky-400"
      @click="$router.go(-1)"
    >
      <fa icon="angles-left" />
      {{ "Back" }}
    </button>
    <section class="rounded">
      <div class="mt-3 p-4 space-y-2">
        <div
          class="border rounded-md px-3 py-3"
          v-for="product in cart"
          :key="product.id"
        >
          <div class="grid md:grid-cols-8 md:gap-6">
            <img
              :src="product.image"
              height="100"
              width="50"
              class="object-contain col-span-1 flex justify-center"
            />
            <h5 class="text-gray-800 col-span-3 font-semibold">
              {{ product.title }}
            </h5>
            <counter class="col-span-1 h-14" :id="product.id" />
            <h1 class="col-span-1 flex items-center justify-center">
              {{ product.qty }} * {{ product.price }}
            </h1>
            <button
              class="col-span-1 hover:text-sky-500 dark:hover:text-sky-400"
              @click="removeItemFromCart(product)"
            >
              <fa icon="trash-can" />
              {{ "Remove" }}
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="flex justify-end px-4 py-8">
      Total: {{ totalPrice.toFixed(2) }}
    </div>
    <div class="flex justify-end px-4">
      <router-link as="nav" active-class="active" to="/check-out">
        <a class="nav-link hover:text-sky-500 dark:hover:text-sky-400"
          >Check Out</a
        >
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import Counter from "../../components/Counter.vue";

const store = useStore();

const cart = computed(() => {
  const cartItems = store.getters["productDetails/cartItems"];

  for (let index = 0; index < cartItems.length; index++) {
    const productId = cartItems[index].id;

    const product = store.getters["productDetails/getProductById"](
      String(productId)
    );
    Object.assign(cartItems[index], product);
  }

  return cartItems;
});

const totalPrice = computed(
  () => store.getters["productDetails/getTotalPrice"]
);

function removeItemFromCart(product) {
  store.getters["productDetails/removeCartITem"](product);
}

// const cart = computed(() => {
//   const productsMapping = [
//     ...store.getters["productDetails/getProducts"].data,
//   ].reduce((prev, curr) => {
//     prev[curr.id] = curr;
//     return prev;
//   }, {});

//   return [...store.getters["productDetails/cartItems"]].map((el) => ({
//     ...el,
//     ...(productsMapping[el.id] || {}),
//   }));
// });
</script>