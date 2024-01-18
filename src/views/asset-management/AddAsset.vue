<script setup lang="ts">
// CONSTANTS
import { ASSET_MANAGEMENT } from '@/router/pages'

// COMPONENTS
import Backer from '@/components/common/Backer.vue'
import AssetForm from '@/components/asset-management/AssetForm.vue'

</script>

<template>
  <section class="pt-6 pb-[150px]">
    <Backer title="Add Asset" :target="{ name: ASSET_MANAGEMENT }" />
    <AssetForm />
  </section>
</template>

<style scoped></style>