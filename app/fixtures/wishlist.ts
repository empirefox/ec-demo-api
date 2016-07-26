import { IWishItem } from '../models';
import { config } from '../config';
import { products } from './product';

export function getWishItem() {
  return {
    ID: 1,
    CreatedAt: 1,
    Name: '',
    Img: '',
    Price: '',
    ProductID: 1,
    Product: products[0],
  };
}

export const wishlistData: IWishItem[] = [
  getWishItem(),
];
