<script setup lang="ts">
defineProps({
  tableData: {
    type: Object,
    required: true,
    default: () => {},
  },
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table-wrapper w-full min-w-full">
      <thead>
        <tr class="header">
          <th
            v-for="(column, index) in tableData?.columns"
            :key="index"
            :class="`text-${column.position || 'left'}`"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b-2" v-for="(row, index) in tableData?.rows" :key="index" :class="row?.class">
          <slot :row="row"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less" scoped>
.table-wrapper {
  @apply text-left;

  @media (max-width: 768px) {
    :deep(th) {
      @apply p-4;
    }
    :deep(td) {
      @apply p-4;
    }
  }

  :deep(td) {
    @apply py-4;
  }

  :deep(th) {
    @apply py-4 !text-gray-600;
  }

  .header {
    @apply border-b-2;
    @apply bg-gray-50;
  }

  .content {
    @apply border-b-2;
  }
}
</style>
