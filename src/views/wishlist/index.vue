<template>
  <section class="m-6">
    <button
      type="button"
      class="btn btn-link hover:text-sky-500 dark:hover:text-sky-400"
      @click="$router.go(-1)"
    >
      <fa icon="angles-left" />
      {{ "Back" }}
    </button>
    <p>This is Wish List page</p>
  </section>
</template>

<script setup lang="ts">
</script>