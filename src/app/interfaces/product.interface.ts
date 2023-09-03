export interface IProduct{
  productId: string;
  productName: string;
  description: string;
  comments: number;
  rating: number;
  lowestPrice: number;
  highestPrice: number;
  merchant: Merchant;
  productImages: string[];
  sku: Sku[];
}


export interface Spec {
  color: string;
  size: string;
  [prop: string]: any;
}
export interface Sku {
  skuId: string;
  productId: string;
  merchant: Merchant;
  available: boolean;
  spec: Spec;
  price: number;
  rrp: number;
  discount:number;
  currency: string;
  stock: number;
  productImages: string[];
}
export interface Merchant {
  name: string;
  id: string;
}
