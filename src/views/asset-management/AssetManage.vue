<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// CONSTANTS
import { ASSET_MANAGEMENT_ADD } from '@/router/pages'

// COMPONENTS
import TableAsset from '@/components/asset-management/TableAssets.vue'
import Button from '@/components/common/Button.vue'
import SuperInput from '@/components/common/SuperInput.vue'

const router = useRouter()

const searchText = ref('')

const handleAddNewAsset = () => {
  router.push({ name: ASSET_MANAGEMENT_ADD })
}
</script>

<template>
  <div class="asset-wrapper">
    <div class="asset-wrapper__header">
      <div class="font-bold text-xl">List Assets</div>
      <div class="asset-wrapper__header--menu">
        <Button @click="handleAddNewAsset">
          <p>+ Add Asset</p>
        </Button>
        <SuperInput
          :is-using-title="false"
          v-model="searchText"
          placeholder="Search Asset..."
        />
      </div>
    </div>
    <TableAsset />
  </div>
</template>

<style scoped lang="less">
  .asset-wrapper {
    &__header {
      @apply h-28 py-6 pl-6;
      @apply flex flex-col items-start gap-2;
    }

    &__header--menu {
      @apply flex gap-6 py-3;
    }
  }
</style>