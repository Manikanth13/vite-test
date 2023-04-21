<template>
  <footer>
    <div class="bg-gray-700">
      <div
        class="
          flex
          justify-between
          items-center
          py-2
          md:justify-start md:space-x-10
        "
      >
        <div class="px-5 flex flex-1 space-y-6">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <router-link as="nav" active-class="active" to="/about">
              <a class="nav-link text-white hover:text-sky-700">About</a>
            </router-link>
            <router-link as="nav" active-class="active" to="/contact">
              <a class="nav-link text-white hover:text-sky-700">Contact</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import About from "../views/about/index.vue";
import Contact from "../views/contact/index.vue";
import { ref } from "vue";
</script>
