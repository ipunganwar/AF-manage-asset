<script setup lang="ts"></script>

<template>
  <nav class="topnav w-[87%]">
    <div class="topnav__wrapper">
      <p class="text-xl font-medium">Manage Assets</p>
      <ul class="flex gap-4">
        <li>
          <img
            src="@/assets/notification.svg"
            width="24"
            height="24"
            alt="notification"
          >
        </li>
        <li>Avatar</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
.topnav {
  @apply md:block;
  @apply fixed;
  @apply bg-slate-50;
  @apply min-h-[`64px`];
  @apply top-0 left-64;
  @apply z-50;
  @apply text-base;

  &__wrapper {
    @apply flex gap-6 items-center justify-between;
    @apply py-4 px-8;
  }
}
</style>