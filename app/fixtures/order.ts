
import { IOrder, IOrderItem } from '../models';
import { config } from '../config';
import { timestap } from '../utils';

const order1: IOrder = {
  ID: 1,
  PaymentAmount: 10000,
  DiscountValue: 2000,
  TrackingNumber: '123456789',
  DeliverFee: 1000,
  DeliverCom: '顺丰',
  DeliverNo: 'sf111111',
  State: 'checkout',
  CreatedAt: timestap(-3600),
  IsDeliverPay: false,
  Contact: '港',
  Phone: '13112345697',
  DeliverAddress: '成都万达广场',
  Items: [
    {
      ID: 1,
      OrderID: 1,
      Quantity: 1,
      Name: '电视xxxx',
      ProductID: 1,
      Img: `${config.url}/img/tj1.jpg`,
      Attrs: 'XL 红色',
      Price: 10000,
      DeliverFee: 1000,
    }
  ],
};

const order2: IOrder = {
  ID: 2,
  PaymentAmount: 10000,
  DiscountValue: 2000,
  TrackingNumber: '123456789',
  DeliverFee: 1000,
  DeliverCom: '顺丰',
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
    {
      ID: 2,
      OrderID: 2,
      Quantity: 100,
      Name: '电视xxxx',
      ProductID: 1,
      Img: `${config.url}/img/tj1.jpg`,
      Attrs: 'XL 红色',
      Price: 10000,
      DeliverFee: 1000,
    }
  ],
};

export const ordersData: IOrder[] = [order1, order2];
