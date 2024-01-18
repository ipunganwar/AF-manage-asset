<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    validator(value: string) {
      return ['primary', 'secondary', 'ghost'].includes(value)
    },
    default: 'primary',
  }
})
</script>

<template>
  <button
    class="button"
    :class="`button--${props.variant}`"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<style>
.button {
  @apply block;
  @apply text-center;
  @apply rounded-lg;
  @apply px-6 py-2;
  @apply font-semibold;
  
  &:disabled {
    @apply opacity-40;
  }
}

.button--primary {
  @apply text-white;
  @apply bg-blue-500;
}

.button--secondary {
  @apply text-blue-500;
  @apply bg-slate-100;
}
</style>