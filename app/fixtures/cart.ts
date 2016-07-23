
import { ICartItem } from '../models';
import { config } from '../config';
import { timestap } from '../utils';
import { skus } from './product';

export const cartData: ICartItem[] = [
  {
    ID: 1,
    Img: '',
    Name: '',
    Type: 'XXL 黑色', // sku attrs
    Price: 100000,
    Quantity: 10,
    CreatedAt: timestap(-1000),
    Sku: skus[0],
  }
];
