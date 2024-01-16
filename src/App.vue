<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import BlankLayout from '@/layout/blank.vue'

const route = useRoute()
const layout = computed(() => route.meta?.layout)
</script>

<template>
  <component :is="layout || BlankLayout">
    <RouterView />
  </component>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
main {
  font-family: Inter;
}
</style>
