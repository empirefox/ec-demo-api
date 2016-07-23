
import { IGroupBuyItem } from '../models';
import { config } from '../config';
import { timestap } from '../utils';
import { skus } from './product';

export const groupbuyData: IGroupBuyItem[] = [
  { ID: 1, Title: '特价电视', Reason: '儿童节促销', Price: 20000, Start: timestap(-3600), End: timestap(3600), Sku: skus[0] }
];
