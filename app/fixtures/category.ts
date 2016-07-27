
import { ICategory } from '../models';
import { config } from '../config';

export const categoryData: ICategory[] = [
  { ID: 1, Name: '女装', Img: '', Pos: 1 },

  { ParentID: 1, ID: 11, Name: '女装1', Img: '', Pos: 1 },
  { ParentID: 11, ID: 111, Name: '女装11', Img: `${config.url}/img/flpic1.jpg`, Pos: 1 },
  { ParentID: 11, ID: 112, Name: '女装12', Img: `${config.url}/img/flpic1.jpg`, Pos: 2 },

  { ParentID: 1, ID: 12, Name: '女装2', Img: '', Pos: 1 },
  { ParentID: 12, ID: 121, Name: '女装21', Img: `${config.url}/img/flpic1.jpg`, Pos: 1 },
  { ParentID: 12, ID: 122, Name: '女装22', Img: `${config.url}/img/flpic1.jpg`, Pos: 2 },



  { ID: 2, Name: '男装', Img: '', Pos: 2 },

  { ParentID: 2, ID: 21, Name: '男装1', Img: '', Pos: 1 },
  { ParentID: 21, ID: 211, Name: '男装11', Img: `${config.url}/img/flpic1.jpg`, Pos: 1 },
  { ParentID: 21, ID: 212, Name: '男装12', Img: `${config.url}/img/flpic1.jpg`, Pos: 2 },



  { ID: 3, Name: '童装', Img: '', Pos: 3 },

  { ParentID: 3, ID: 31, Name: '童装1', Img: '', Pos: 1 },
  { ParentID: 31, ID: 311, Name: '童装11', Img: `${config.url}/img/flpic1.jpg`, Pos: 1 },
  { ParentID: 32, ID: 312, Name: '童装12', Img: `${config.url}/img/flpic1.jpg`, Pos: 2 },
];
