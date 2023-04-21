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
    <h1>This is an contact page</h1>
  </section>
</template>
