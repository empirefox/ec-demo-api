
import { IWallet, ICapitalFlow, IPointsItem } from '../models';
import { config } from '../config';
import { timestap } from '../utils';

const capitalFlows: ICapitalFlow[] = [
  { ID: 1, CreatedAt: timestap(-3600), Type: 'refund', Reason: '充值', Amount: 100000, Balance: 100000 },
  { ID: 2, CreatedAt: timestap(-2000), Type: 'trade', Reason: '购买电视', Amount: -50000, Balance: 50000 },
  { ID: 3, CreatedAt: timestap(-1200), Type: 'withdraw', Reason: '提现', Amount: -30000, Balance: 20000 },
];

const points: IPointsItem[] = [
  { ID: 1, CreatedAt: timestap(-3600), Reason: '购买奖励', Amount: 100000, Balance: 100000 },
];

export const walletData: IWallet = {
  HasPayKey: false,
  CapitalFlows: capitalFlows,
  PointsList: points,
};
