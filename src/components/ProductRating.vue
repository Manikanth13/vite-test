<template>
  <div class="flex items-center space-x-1">
    <div v-for="(star, index) of stars" :key="index">
      <div>
        <img
          v-if="star.type === 'full'"
          src="/star-filled.svg"
          class="h-4 w-4 text-yellow-400"
        />
        <img
          v-if="star.type === 'half'"
          src="/star-half.svg"
          class="h-4 w-4 text-yellow-400"
        />
        <img
          v-if="star.type === 'empty'"
          src="/star-empty.svg"
          class="h-4 w-4 text-yellow-400"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
interface Props {
  rating: number;
}

const props = defineProps<Props>();
const stars = computed(() => {
  // Get the number of whole stars
  const iWholeStars = Math.floor(props.rating);
  // Do we want a half star?
  const blnHalfStar = iWholeStars < props.rating;

  return new Array(5).fill(0).map((_, index) => {
    const item = { type: "empty" };
    if (blnHalfStar && index === iWholeStars) {
      item.type = "half";
    } else if (index <= iWholeStars - 1) {
      item.type = "full";
    } else {
      item.type = "empty";
    }

    return item;
  });
});
</script>