import { createServer, acceptParser, queryParser, bodyParser, serveStatic, CORS } from 'restify';
import { encode, decode } from 'jwt-simple';

import {
  profileData,
  captchaData,
  carouselData,
  userinfoData,
  wishlistData,
  ordersData,
  cartData,
  skus, productData, productsData, attrsData,
  categoryData,
  groupbuyData,
  saveAddr, addrData, delAddr,
  deliveryData,
  getWishItem,
  walletData,
} from './fixtures';
import { JsonData, timestap } from './utils';
import { config } from './config';
import { IBindPhoneData, ICartItem, AddCartItemRequest, SetCartQuantityRequest } from './models';

let server = createServer({
  name: 'ec-demo-api-server',
  version: '1.0.0'
});
server.use(CORS({
  origins: ['http://127.0.0.1:3000'],   // defaults to ['*']
  credentials: false,                 // defaults to false
  headers: ['Origin, Authorization, Content-Type']                 // sets expose-headers
}));
server.use(acceptParser(server.acceptable));
server.use(queryParser());
server.use(bodyParser());

server.get('/profile', JsonData(profileData));
server.post('/captcha', JsonData(captchaData));
server.get('/carousel', JsonData(carouselData));

server.get('/oauth/update/:token', (req, res, next) => {
  if (decode(req.params.token, 'refresh_secret').UserId != 111) {
    return next({ error: 'refresh token error' });
  }
  res.json(encode({ UserId: 111, exp: timestap(60) }, 'access_secret'));
  return next();
});

let prebindPhoneTimes = 3;
server.get('/prebind_phone/:phone', (req, res, next) => {
  res.json(prebindPhoneTimes ? (--prebindPhoneTimes) : 0);
  return next();
});

server.post('/bind_phone/:phone', (req, res, next) => {
  let body = <IBindPhoneData>req.body;
  if (body.Captcha == 'c9c6') {
    res.json('');
    return next();
  }
  return next({ error: 'captcha error' });
});

server.get('/userinfo', JsonData(userinfoData));
server.get('/wishlist', JsonData(wishlistData));
server.post('/wishlist_add', (req, res, next) => {
  let pid = +req.body.ProductID;
  let item = wishlistData.find(item => item.ProductID === pid);
  if (item) {
    res.json(item);
    return next();
  } else if (pid === 1) {
    item = getWishItem();
    wishlistData.push(item);
    res.json(item);
    return next();
  }
  res.status(404);
  return next({ error: 'product not found' });
});
server.del('/wishlist/:id', (req, res, next) => {
  let index = wishlistData.findIndex(item => item.ID === (+req.params.id));
  if (~index) {
    wishlistData.splice(index, 1);
    res.json('');
    return next();
  }
  res.status(404);
  return next({ error: 'wishlist item not found' });
});

server.get('/wallet', JsonData(walletData));

server.get('/orders', JsonData(ordersData));
server.post('/order_pay', JsonData(ordersData[1]));
server.post('/checkout', JsonData(ordersData[0].ID));
server.post('/order_wx_pay', (req, res, next) => {
  res.status(502);
  return next({ error: 'weixin pay is off' });
});
server.get('/order/:id', (req, res, next) => {
  let item = ordersData.find(item => item.ID === (+req.params.id));
  if (item) {
    res.json(item);
    return next();
  }
  res.status(404);
  return next({ error: 'order item not found' });
});

server.get('/cart', JsonData(cartData));
let cartId = 2;
server.post('/cart_item', (req, res, next) => {
  let request = <AddCartItemRequest>req.body;
  let sku = skus.find(item => item.ID === request.SkuID);
  if (sku) {
    let item: ICartItem = {
      ID: cartId++,
      Img: sku.Img || sku.Product.Img,
      Name: sku.Product.Name,
      Type: 'XXL 黑色', // sku attrs
      Price: sku.SalePrice,
      Quantity: request.Quantity,
      CreatedAt: timestap(0),
      Sku: sku,
    };
    cartData.unshift(item);
    res.json(item);
    return next();
  }
  return next({ error: 'sku item not found' });
});
server.post('/cart_item_quantity', (req, res, next) => {
  let request = <SetCartQuantityRequest>req.body;
  let item = cartData.find(item => item.ID === request.CartItemID);
  if (item) {
    item.Quantity = request.Quantity;
    res.json('');
    return next();
  }
  return next({ error: 'cart item not found' });
});
server.del('/cart/:id', (req, res, next) => {
  let index = cartData.findIndex(item => item.ID === (+req.params.id));
  if (~index) {
    cartData.splice(index, 1);
    res.json('');
    return next();
  }
  return next({ error: 'cart item not found' });
});

server.get('/category', JsonData(categoryData));
server.get('/products', JsonData(productsData));
server.get('/product/:id', (req, res, next) => {
  if (productData.Product.ID === (+req.params.id)) {
    res.json(productData);
    return next();
  }
  return next({ error: 'product not found' });
});
server.get('/product_attrs', JsonData(attrsData));

server.get('/groupbuy', JsonData(groupbuyData));

server.get('/addrs', JsonData(addrData));
server.post('/addr', (req, res, next) => {
  let addr = saveAddr(req.body);
  if (addr) {
    res.json(addr);
    return next();
  }
  return next({ error: 'addr item not found' });
});
server.del('/addr/:id', (req, res, next) => {
  delAddr(+req.params.id);
  res.json('');
  return next();
});

server.get('/delivery/:id', (req, res, next) => {
  let item = ordersData.find(item => item.ID === (+req.params.id));
  if (item) {
    res.json(deliveryData);
    return next();
  }
  return next({ error: 'order not found' });
});

server.get(/\/img\/?.*/, serveStatic({
  directory: `${__dirname}`,
}));

server.listen(config.port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
