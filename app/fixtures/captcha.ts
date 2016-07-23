import { readFileSync } from 'fs';
import { join } from 'path';
import { randomBytes } from 'crypto';

import { ICaptcha } from '../models';

let yzm = new Buffer(readFileSync(join(__dirname, '../img/yzm.png'))).toString('base64');

export const captchaData: ICaptcha = {
  ID: randomBytes(8).toString('base64'),
  Base64: yzm,
};
