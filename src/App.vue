<template>
  <div class="min-h-screen flex flex-1 flex-col">
    <Header />
    <div class="h-14" />
    <div class="flex flex-1 flex-col">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
</script>
