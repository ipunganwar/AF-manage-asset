import { defineStore } from 'pinia'
import { AssetList } from '@/types/asset'

import createApiInstance from '@/utils/axios-interface.ts'

const api = createApiInstance()

// @ts-ignore
// import ASSET_LIST from './mock/ASSET_LIST.js'

const helper = {
  mapObject: (sourceObject: any) => {
    return {
      AssetID: sourceObject?.id,
      AssetName: sourceObject?.name,
      Category: sourceObject?.category,
      Status: sourceObject?.status,
      ModelNumber: sourceObject?.modelNumber,
      SerialNumber: sourceObject?.serialNumber,
      Description: sourceObject?.desc,
      PurchaseCost: sourceObject?.cost,
      PurchaseDate: sourceObject?.date,
      VendorName: sourceObject?.vendorName,
    }
  }
}

export const useAsset = defineStore('asset', {
  state: () => ({
    table: {
      columns: [
        {
          label: 'Asset/ID Tag',
          position: 'left',
        },
        {
          label: 'AssetName',
          position: 'left',
        },
        {
          label: 'Description',
          position: 'left',
        },
        {
          label: 'Purchase Cost',
          position: 'left',
        },
        {
          label: 'Purchase Date',
          position: 'left',
        },
        {
          label: 'Status',
          position: 'left',
        },
      ],
      rows: [] as AssetList[],
    },
  }),
  getters: {
    getCategories() {
      return ['Tire', 'Vehicle', 'Furniture']
    },
    getStatuses() {
      return ['Active', 'Inactive', 'In Repair']
    },
  },
  actions: {
    async fetchAssetList() {
      try {
        const { data, status } = await api.get('/asset_list')

        if (status === 200) {
          this.table.rows = data
        }
      } catch (err) {
        console.error(err)
      }
    },
    async postNewAsset(payload: any) {
      try {
        const transformPayload = helper.mapObject(payload)

        const res = await api.post('/asset_list', transformPayload, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        return res
      } catch (err) {
        console.error(err)
      }
      
    },
  },
})