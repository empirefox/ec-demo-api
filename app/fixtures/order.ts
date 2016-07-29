
import { IOrder, IOrderItem, IEvalItem } from '../models';
import { config } from '../config';
import { timestap } from '../utils';

const item1: IOrderItem = {
  ID: 1,
  OrderID: 1,
  Quantity: 1,
  Name: '电视xxxx',
  ProductID: 1,
  Img: `${config.url}/img/tj1.jpg`,
  Attrs: 'XL 红色',
  Price: 10000,
  DeliverFee: 1000,
};

const item2: IOrderItem = {
  ID: 2,
  OrderID: 2,
  Quantity: 100,
  Name: '电视xxxx',
  ProductID: 1,
  Img: `${config.url}/img/tj1.jpg`,
  Attrs: 'XL 红色',
  Price: 10000,
  DeliverFee: 1000,
};

const order1: IOrder = {
  ID: 1,
  PaymentAmount: 10000,
  DiscountValue: 2000,
  TrackingNumber: '123456789',
  DeliverFee: 1000,
  DeliverCom: 'shunfeng',
  DeliverNo: 'sf111111',
  State: 'checkout',
  CreatedAt: timestap(-3600),
  IsDeliverPay: false,
  Contact: '港',
  Phone: '13112345697',
  DeliverAddress: '成都万达广场',
  Items: [
    item1,
  ],
};

const order2: IOrder = {
  ID: 2,
  PaymentAmount: 10000,
  DiscountValue: 2000,
  TrackingNumber: '123456789',
  DeliverFee: 1000,
  DeliverCom: 'shunfeng',
  DeliverNo: 'sf111111',
  State: 'delivered',
  CreatedAt: timestap(-3600),
  PaiedAt: timestap(-3000),
  DeliveredAt: timestap(-1000),
  IsDeliverPay: false,
  Contact: '港',
  Phone: '13112345697',
  DeliverAddress: '成都万达广场',
  Items: [
    item2,
  ],
};

export const ordersData: IOrder[] = [order1, order2];

export function setEval(orderItemId: number, data: IEvalItem) {
  data.EvalAt = timestap(0);
  data.EvalName = '单**';
  if (orderItemId === 1) {
    let item = order1.Items.find(item => item.ID === 1);
    Object.assign(item, data);
    return item;
  } else if (orderItemId === 2) {
    let item = order2.Items.find(item => item.ID === 2);
    Object.assign(item, data);
    return item;
  }
}

export function setEvals(orderId: number, data: IEvalItem) {
  data.EvalAt = timestap(0);
  data.EvalName = '量**';
  if (orderId === 1) {
    let item = order1.Items.find(item => item.ID === 1);
    Object.assign(item, data);
    return order1;
  } else if (orderId === 2) {
    let item = order2.Items.find(item => item.ID === 2);
    Object.assign(item, data);
    return order2;
  }
}
