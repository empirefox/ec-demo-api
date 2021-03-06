import { ISku } from './product';

export interface IGroupBuyItem {
  ID: number;
  Img?: string; // if not present, use sku.Img
  Title: string;
  Reason: string;
  Price: number;
  Sku: ISku; // preload
  Start: number;
  End: number;
}
