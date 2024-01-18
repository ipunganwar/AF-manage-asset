<script setup lang="ts">
import { computed, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select ...'
  },
  title: {
    type: String,
    default: 'title'
  },
  options: {
    type: Array,
    default: [],
  }
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

onMounted(() => {
  // Select the first option when the component is mounted
  if (props.options.length > 0 && value?.value === '') {
    value.value = props.options[0] as string | number
  }
})
</script>

<template>
  <div class="wrapper">
    <fieldset class="border p-2 rounded">
      <legend class="text-xs font-normal text-gray-700 text-end">{{ title }}</legend>
      <select v-model="value" class="super-select px-3">
        <!-- <option disabled value="">{{ placeholder }}</option> -->
        <option v-for="optionValue in options" :value="optionValue">{{ optionValue }}</option>
      </select>
    </fieldset>
  </div>
</template>

<style scoped lang="less">
.wrapper {
  @apply relative;
  .super-select {
    @apply text-gray-950 bg-gray-50;
    @apply py-2 px-3;
    @apply rounded;
    @apply w-full;
  }
}
</style>