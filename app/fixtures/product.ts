import {
  IProduct,
  IProductAttr,
  IProductAttrGroup,
  IProductAttrId,
  IProductAttrsResponse,
  ISku,
  IProductResponse,
  IProductsResponse
} from '../models';
import { config } from '../config';


let posAttr = 0;
let createAttr = (ID: number, Value: string, GroupID: number): IProductAttr => {
  return { ID, Value, GroupID, Pos: posAttr++ };
}
export const attrs: IProductAttr[] = [
  createAttr(1, 'X', 1),
  createAttr(2, 'XL', 1),
  createAttr(3, '红色', 2),
];


let posGroup = 0;
let createGroup = (ID: number, Name: string): IProductAttrGroup => {
  return { ID, Name, Pos: posGroup++ };
}
export const groups: IProductAttrGroup[] = [
  createGroup(1, '颜色'),
  createGroup(2, '尺码'),
];


let createAttrId = (ID: number, SkuID: number, AttrID: number): IProductAttrId => {
  return { ID, SkuID, AttrID };
}
export const attrIds: IProductAttrId[] = [
  createAttrId(1, 1, 1),
  createAttrId(2, 1, 3),
];


let createProduct = (
  ID: number,
  Name: string,
  Intro: string,
  Detail: string,
  Img: string,
  Saled: number,
  saleUserId: number,
  TimeCreated: number,
  status: number,
  TimeSale: number,
  TimeShelf: number,
  CategoryID: number): IProduct => {
  return { ID, Name, Img, Intro, Detail, Saled, ForSale: !!status, TimeCreated, TimeSale, TimeShelf, CategoryID };
}
export const products: IProduct[] = [
  createProduct(
    1,
    '索尼（SONY）G9 48英寸全高清 LED液晶电视（KDL-48R550C银色尊享版）',
    '典雅银色，轻奢感十足，只为有品质的你！清晰解像增强，智能连接，BRAVIA网络视频，USB媒体播放。',
    '典雅银色，轻奢感十足，只为有品质的你！清晰解像增强，智能连接，BRAVIA网络视频，USB媒体播放。',
    `${config.url}/img/tj1.jpg`,
    50, 0, 0, 1, 0, 0, 1),
];

let createSku = (ID: number, ProductID: number, Stock: number, Img: string, SalePrice: number, MarketPrice: number, Freight: number, product: IProduct): ISku => {
  return { ID, ProductID, Stock, Img, SalePrice, MarketPrice, Freight };
}
export const skus: ISku[] = [
  createSku(1, 1, 99, `${config.url}/img/tj2.jpg`, 12000, 13000, 20000, products[0]),
];

export const attrsData: IProductAttrsResponse = { Groups: groups, Attrs: attrs };

export const productData: IProductResponse = {
  Product: products[0],
  Skus: skus,
  Attrs: attrIds
};

export const productsData: IProductsResponse = {
  Products: products,
  Skus: skus,
  Attrs: attrIds
};
