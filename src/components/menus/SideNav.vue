<script setup lang="ts"></script>

<template>
  <nav class="sidenav">
    <div class="sidenav__wrapper flex flex-col items-center">
      <img
        src="@/assets/hero.png"
        width="149"
        height="48"
        alt="logo"
        class="pt-6 pb-8"
      >
       <ul class="flex gap-4 flex-col">
          <li class="flex gap-2">
            <img
              src="@/assets/home.svg"
              width="24"
              height="24"
              alt="home"
            >
            <p>Home</p>
          </li>
          <li class="flex gap-2">
            <img
              src="@/assets/balance.svg"
              width="24"
              height="24"
              alt="balance"
            >
            <p>Manage Asset</p>
          </li>
          <li class="flex gap-2">
            <img
              src="@/assets/settings.svg"
              width="24"
              height="24"
              alt="balance"
            >
            <p>Settings</p>
          </li>
       </ul>
    </div>
  </nav>
</template>

<style scoped>
  .sidenav {
    @apply h-screen border-r-2 bg-white;
    @apply md:block;
    @apply fixed;
    @apply top-0;
    @apply w-64;
  }
</style>