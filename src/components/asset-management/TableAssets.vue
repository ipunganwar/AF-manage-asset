<script setup lang="ts">
import { onMounted } from 'vue'

import { useAsset } from '@/stores/assets'

import Table from '@/components/common/Table.vue'

const { fetchAssetList } = useAsset()
const assetStore = useAsset()

onMounted(() => {
  fetchAssetList()
})

const textStatusColor = (status: string) => {
  const statusLower = status?.toLowerCase()

  switch (statusLower) {
    case 'inactive':
      return 'status-red'
    case 'active':
      return 'status-green'
    case 'in repair':
      return 'status-yellow'
    default:
      return ''
  }
}
</script>

<template>
  <div class="assets-content">
    <Table class="table-assets" :table-data="assetStore?.table">
      <template v-slot="{ row }">
        <td>
          <p class="!text-gray-600">{{ row?.AssetID}}</p>
        </td>
        <td>
          <p>{{ row?.AssetName}}</p>
        </td>
        <td>
          <p>{{ row?.Description}}</p>
        </td>
        <td>
          <p class="font-semibold">Rp {{ row?.PurchaseCost}}</p>
        </td>
        <td>
          <p class="!text-gray-600">{{ row?.PurchaseDate}}</p></td>
        <td>
          <p :class="textStatusColor(row?.Status)" class="font-medium">{{ row?.Status}}</p>
        </td>
      </template>
    </Table>
  </div>
</template>

<style lang="less">
.assets-content {
  @apply bg-white overflow-y-visible;
  @apply ml-auto mr-auto p-6 rounded-md;
  width: -webkit-fill-available;

  .table-assets {
      tbody {
      @apply p-6;
    }

    :deep(th) {
      @apply font-normal;
    }
  }
}

.status-red {
  @apply bg-red-50 text-red-700 rounded-md px-4 w-fit;
}
.status-yellow {
  @apply bg-yellow-50 text-yellow-700 rounded-md px-4 w-fit;
}
.status-green {
  @apply bg-green-50 rounded-md px-4 w-fit text-green-700;
}
</style>