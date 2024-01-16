<script setup lang="ts">
import TopNav from '@/components/menus/TopNav.vue'
import SideNav from '@/components/menus/SideNav.vue'

</script>

<template>
  <div class="w-screen">
    <TopNav />
    <main class="dashboard-layout">
      <SideNav />
      <div class="dashboard-layout__body">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
  .dashboard-layout {
    @apply w-full overflow-hidden bg-red-100;

    &__body {
      @apply h-full;
    }
  }
</style>