<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Input Here ...'
  },
  isUsingTitle: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: 'title',
  },
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="wrapper">
    <section v-if="isUsingTitle">
      <fieldset class="border p-2 rounded">
        <legend class="text-xs font-normal text-gray-700 text-end">{{ title }}</legend>
        <input
          class="super-input px-3"
          :placeholder="placeholder"
          v-model="value"
        />
      </fieldset>
    </section>

    <section v-else>
      <input
        class="super-input px-3 border border-gray-200"
        :placeholder="placeholder"
        v-model="value"
      />
    </section>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  @apply relative;
  .super-input {
    @apply text-gray-950 bg-gray-50;
    @apply py-2 px-3;
    @apply rounded;
    @apply w-full;
  }
}
</style>