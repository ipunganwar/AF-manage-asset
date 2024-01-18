<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// STORE
import { useAsset } from '@/stores/assets'

// CONSTANTS
import { ASSET_MANAGEMENT } from '@/router/pages'

import Select from '@/components/common/Select.vue'
import Button from '@/components/common/Button.vue'

const { getCategories, getStatuses, postNewAsset, fetchAssetList } = useAsset()
const isShowDate = ref(false)
const router = useRouter()

const setNewAssetInput = ref<AssetForm>({
  id: '',
  name: '',
  category: '',
  status: '',
  modelNumber: '',
  serialNumber: '',
  desc: '',
  cost: 0,
  date: '',
  vendorName: '',
})

const assetFields = [
  { key: 'id', placeholder: 'Asset ID/Tag ...', title: 'Asset ID/Tag', type: 'input', required: true },
  { key: 'name', placeholder: 'Asset Name ...', title: 'Asset Name', type: 'input', required: true },
  { key: 'category', placeholder: 'Category', title: 'Category', type: 'select', options: getCategories, required: true },
  { key: 'status', placeholder: 'Status', title: 'Status', type: 'select', options: getStatuses, required: true },
  { key: 'modelNumber', placeholder: 'ModelNumber ...', title: 'ModelNumber', type: 'input', required: true },
  { key: 'serialNumber', placeholder: 'SerialNumber ...', title: 'SerialNumber', type: 'input', required: true },
  { key: 'desc', placeholder: 'Description ...', title: 'Description', type: 'input', required: true },
]

const purchaseFields = [
  { key: 'cost', placeholder: '0', title: 'Purchase Cost', required: true, type: 'number' },
  { key: 'date', placeholder: 'Purchase Date ...', title: 'Purchase Date', required: true, type: 'text' },
  { key: 'vendorName', placeholder: 'Vendor Name ...', title: 'Vendor Name', required: true, type: 'text' },
]

const isDateSelector = (key: string) => {
  if (key === 'date') {
    isShowDate.value = !isShowDate.value
  }
}

const getDateValue = (value: any) => {
  const day = String(value.getDate()).padStart(2, '0');
  const month = String(value.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = value.getFullYear();

  const formattedDate = `${day}/${month}/${year}`
  setNewAssetInput.value.date = formattedDate
}

const getValidationRules = (key: string) => {
  const rules = []

  if (assetFields.find((field) => field.key === key)?.required) {
    rules.push((value: any) => !!value || 'Field is required');
  }

  if (purchaseFields.find((field) => field.key === key)?.required) {
    rules.push((value: any) => !!value || 'Field is required');
  }

  return rules
}

const isButtonDisabled = computed(() => {
  for (const field of [...assetFields, ...purchaseFields]) {
    if (field.required && !setNewAssetInput.value[field.key]) {
      return true;
    }
  }
  return false;
})

const handleAddAsset = () => {
  postNewAsset(setNewAssetInput.value)

  fetchAssetList()
  router.push({ name: ASSET_MANAGEMENT })
}
</script>

<template>
  <form class="form">
    <section class="form-container">
      <div class="group-1 w-[35%] ">
        <div class="font-bold self-baseline">Asset Information</div>
        <div v-for="field in assetFields">
          <v-text-field
            v-if="field?.type === 'input'"
            :label="field?.title"
            variant="outlined"
            type="input"
            clearable
            :rules="getValidationRules(field?.key)"
            :modelValue="setNewAssetInput[field.key]"
            @update:modelValue="(value) => setNewAssetInput[field.key] = value"
          />
          <Select
            v-else
            :title="field?.title"
            :placeholder="field?.placeholder"
            :modelValue="setNewAssetInput[field.key]"
            :options="field?.options"
            @update:modelValue="(value) => setNewAssetInput[field.key] = value"
          />
        </div>
        
      </div>
      <div class="group-2 w-[35%]">
        <div class="font-bold self-baseline">Purchase Information</div>
        <div v-for="field in purchaseFields">
          <v-text-field
            :label="field?.title"
            variant="outlined"
            :type="field?.type"
            clearable
            :rules="getValidationRules(field?.key)"
            :modelValue="setNewAssetInput[field.key]"
            @update:modelValue="(value) => setNewAssetInput[field.key] = value"
            @click="isDateSelector(field?.key)"
          />

          <v-dialog width="400" v-model="isShowDate">
            <template v-slot:default="{}">
              <v-card>
                <v-date-picker
                  @update:modelValue="getDateValue"
                  color="primary"
                  width="400"
                ></v-date-picker>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </section>
    
    <Button :disabled="isButtonDisabled" @click="handleAddAsset">
      <p class="px-20 py-1">Add Asset</p>
    </Button>
  </form>
</template>

<style scoped lang="less">
.form {
  @apply space-y-10 w-full p-6;
}
.form-container {
  @apply flex gap-10 items-center;

  .group-1 {
    @apply flex flex-col gap-4;
  }
  .group-2 {
    @apply flex flex-col gap-4 self-start !mt-0;
  }
}
</style>