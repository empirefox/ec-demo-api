import { IWishItem } from '../models';
import { config } from '../config';
import { products } from './product';

export const wishlistData: IWishItem[] = [
  {
    ID: 1,
    CreatedAt: 1,
    Name: '',
    Img: '',
    Price: '',
    ProductID: 1,
    Product: products[0],
  }
];
