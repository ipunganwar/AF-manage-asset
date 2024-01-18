<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRole } from '@/stores/roles'

const { getActiveRole } = storeToRefs(useRole())
</script>

<template>
  <nav class="sidenav">
    <div class="sidenav__wrapper flex flex-col items-center w-full">
      <img
        src="@/assets/hero.png"
        width="149"
        height="48"
        alt="logo"
        class="pt-6 pb-8"
      >
       <ul class="flex gap-4 ">
          <li class="flex flex-col">
            <router-link
              v-for="item in getActiveRole?.menuItems"
              :key="item?.path"
              :to="item?.path"
              v-slot="{ isActive }"
              class="w-60 h-12"
            >
              <div class="flex flex-row gap-4 h-full items-center px-4" :class="{ 'active-label': isActive, inactive: !isActive }">
                <img
                  :src="`/${item?.icon}.svg`"
                  width="24"
                  height="24"
                  :alt="item?.icon"
                >
                <p>{{ item?.label }}</p>
              </div>
            </router-link>
          </li>
       </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
  .sidenav {
    @apply h-screen border-r-2 bg-white;
    @apply md:block;
    @apply fixed;
    @apply top-0 z-50;
    @apply w-64;

    .active-label {
      @apply bg-gray-100 rounded-sm text-gray-500 font-bold;
    }

    .inactive {
      @apply text-gray-500;
    }
  }
</style>