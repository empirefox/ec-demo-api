export interface IProductQuery {
  q?: string; // query
  sp?: string; // scope
  ft?: string; // filter
  // gp?: boolean; // group by scopes
  CategoryID?: string;
}

// Product Attrs

export interface IProductAttr {
  ID: number;
  Value: string;
  GroupID: number;
  Pos: number;
  Group?: IProductAttrGroup;
}

export interface IProductAttrGroup {
  ID: number;
  Name: string;
  Pos: number;
  Attrs?: IProductAttr[];
}

export interface IProductAttrsResponse {
  Groups: IProductAttrGroup[];
  Attrs: IProductAttr[];
}

export class ProductAttrs {
  Groups: Dict<IProductAttrGroup>;
  Attrs: Dict<IProductAttr>;
}

// Product skus

export interface IProductAttrId {
  ID: number;
  SkuID: number;
  AttrID: number;
}

export interface ISku {
  ID: number;
  ProductID: number;
  Stock: number;
  Img: string;
  SalePrice: number;
  MarketPrice: number;
  Freight: number;
  Product?: IProduct;
}

export interface IProduct {
  ID: number;
  Name: string;
  Img: string;
  Intro: string;
  Detail: string;
  Saled: number;
  ForSale: boolean;
  TimeCreated: number;
  TimeSale: number;
  TimeShelf: number;
  CategoryID: number;
  Skus?: ISku[];
}

export interface IProductResponse {
  Product: IProduct;
  Skus: ISku[];
  Attrs: IProductAttrId[];
}

export interface IProductsResponse {
  Products: IProduct[];
  Skus: ISku[];
  Attrs: IProductAttrId[];
}
