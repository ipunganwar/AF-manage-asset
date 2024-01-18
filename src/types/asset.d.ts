declare module '@/types/asset' {
  export interface AssetList {
    list: ListItem[];
  }

  interface ListItem {
    AssetID: string
    AssetName: string
    Category: string
    Status: string
    ModelNumber: string
    SerialNumber: string
    Description: string
    PurchaseCost: number
    PurchaseDate: string
    VendorName: string
  }
}