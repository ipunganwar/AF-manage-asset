interface AssetForm {
  id: string;
  name: string;
  category: string;
  status: string;
  modelNumber: string;
  serialNumber: string;
  desc: string;
  cost: number;
  date: string;
  vendorName: string;
  [key: string]: string | number;
}