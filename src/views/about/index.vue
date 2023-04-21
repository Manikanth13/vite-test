<template>
  <section class="m-6">
    <button
      type="button"
      class="btn btn-link hover:text-sky-500 dark:hover:text-sky-400"
      @click="$router.go(-1)"
    >
      <fa icon="angles-left" />
      <span class="pl-2">{{ "Back" }}</span>
    </button>
    <h1>This is an about page</h1>
  </section>
</template>
