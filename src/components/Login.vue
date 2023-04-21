<template>
  <Modal :open="props.isOpen" :close="props.onClose">
    <form class="p-4 rounded-md flex flex-col" @submit.prevent="onSubmit">
      <div class="flex text-center justify-between">
        <h1 class="h2 text-gray-900 mb-4">Daily Roasts Login</h1>

        <svg
          @click="props.onClose"
          xmlns="http://www.w3.org/2000/svg"
          class="
            w-8
            h-8
            hover:text-sky-500
            dark:hover:text-sky-400
            cursor-pointer
          "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <input
        class="border px-3 py-2.5 mb-4 rounded-md"
        placeholder="Username"
        v-model="username"
        required
      />
      <i
        class="fas"
        :class="[passwordFieldIcon]"
        @click="hidePassword = !hidePassword"
      ></i>
      <input
        class="border px-3 py-2.5 mb-4 rounded-md"
        placeholder="Password"
        v-model="password"
        required
      />
      <!-- <div class="mb-3 text-red-500" v-if="isFailed">
        Login failed. Please check your credentials.
      </div> -->
      <div class="flex justify-around md:space-x-10">
        <!-- <button @click="props.onClose" type="button">Close</button> -->
        <button
          class="
            bg-blue-500
            text-white
            px-2
            py-2.5
            rounded-md
            focus:ring
            font-semibold
            tracking-wider
          "
        >
          Login
        </button>
      </div>
    </form>

    <hr />
  </Modal>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import Modal from "../components/modal/Modal.vue";

interface Props {
  isOpen: Boolean;
  onClose: Boolean;
}

const username = ref("");
const store = useStore();
const hidePassword = ref(true);
const password = ref("");
const isFailed = ref(false);

const passwordFieldIcon = computed(() =>
  hidePassword.value ? "fa-eye-slash" : "fa-eye"
);
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const state = reactive({ isFailed, username, password });

const props = defineProps<Props>();

function onSubmit() {
  state.isFailed = false;

  const formData = {
    username: state.username,
    password: state.password,
  };

  store.dispatch("userDetails/login", {
    username: formData.username,
    password: formData.password,
  });

  return { formData };
}

const userName = computed(() => {
  return store.getters["userDetails/getUserName"];
});
</script>