import { ISku, IProductAttr } from './product';

export interface ICartItem {
  ID: number;
  Img: string;
  Name: string;
  Type: string; // sku attrs
  Price: number;
  Quantity: number;
  CreatedAt: number;
  Sku: ISku; // with product proloaded

  checked?: boolean;
  invalid?: boolean;
}

export interface AddCartItemRequest {
  SkuID: number;
  Quantity: number;
}

export interface SetCartQuantityRequest {
  CartItemID: number;
  Quantity: number;
}

// TODO
export interface ICartResponse {
  Items: ICartItem[];
  Attrs: IProductAttr[];
}
