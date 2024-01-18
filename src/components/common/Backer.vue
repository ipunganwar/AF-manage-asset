<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true,
  },
  target: {
    type: [String, Object],
    required: true,
  },
})
</script>

<template>
  <div class="backer">
    <RouterLink :to="target">
      <img
        src="@/assets/arrow-left.svg"
        height="24"
        width="24"
      />
    </RouterLink>
    <p class="font-bold text-xl">{{ title }}</p>
  </div>
</template>

<style scoped>
.backer {
  @apply flex items-center ml-6;
  @apply gap-x-2;
  @apply text-gray-950;
}
</style>