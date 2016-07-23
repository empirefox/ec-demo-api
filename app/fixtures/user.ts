import { IUserInfo, IUserTokenResponse } from '../models';
import { config } from '../config';

export const userinfoData: IUserInfo = {
  Nickname: '港',
  Sex: 1,
  City: '成都',
  Province: '四川',
  HeadImageURL: `${config.url}/img/boy.gif`,
  Privilege: '',

  Phone: '',
};
