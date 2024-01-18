<script setup lang="ts">
import TopNav from '@/components/menus/TopNav.vue'
import SideNav from '@/components/menus/SideNav.vue'

</script>

<template>
  <SideNav />
  <main class="dashboard-layout">
    <TopNav />
    <div class="dashboard-layout__body">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="less">
  .dashboard-layout {
    @apply overflow-hidden w-full pl-64;

    &__body {
      @apply h-full w-full text-center bg-white m-10 rounded-md;
    }
  }
</style>