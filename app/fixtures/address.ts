
import { IAddress } from '../models';
import { config } from '../config';

let idPos = 2;
export const addrData: IAddress[] = [
  { ID: 1, Contact: '港哥', Phone: '13312345678', Province: '四川省', City: '成都市', District: 'jinniu', House: 'wanda', Pos: 1 },
];

export function saveAddr(addr: IAddress): IAddress {
  if (addr.ID) {
    let index = addrData.findIndex(item => item.ID == addr.ID);
    if (~index) {
      return addrData[index] = addr;
    }
  } else {
    addr.ID = addr.Pos = idPos++;
    addrData.push(addr);
    return addr;
  }
}

export function delAddr(id: number) {
  let index = addrData.findIndex(item => item.ID == id);
  if (~index) {
    addrData.splice(index, 1);
  }
}
