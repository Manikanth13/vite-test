<template>
  <div :class="modalClass" v-if="open">
    <div class="max-w-xl h w-full bg-white rounded-md">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";

const onClose = ref(true);

interface Props {
  open: Boolean;
  close: Boolean;
}

const props = defineProps<Props>();

const state = reactive({ onClose });

const modalClass = computed(() => {
  return props.open
    ? "fixed inset-0 flex flex-col flex-1 items-center justify-center bg-black/70"
    : "hidden";
});

function closeModalLogin() {
  return (state.onClose = true);
}
</script>
