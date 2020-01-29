/* eslint no-use-before-define: 0 */
import BigNumber from 'bignumber.js';
import { store } from 'react-easy-state';

import myAccount from './myAccount';

const yourInvestment = store({
  account: undefined,
  chartTop: undefined,
  data: undefined,
  error: undefined,
  endpoint: undefined,
  initialized: false,

  init: async (account) => {
    yourInvestment.account = account;
    if (myAccount.awpTransactions && myAccount.awpTransactions.length > 0) {
      let totalPosition = new BigNumber(0);
      let largest = new BigNumber(0);

      const sorted = myAccount.awpTransactions.sort((a, b) => a.blockNumber - b.blockNumber);

      const newData = sorted.map((transaction) => {
        const {
          awpAmount,
          daiAmount,
          timestamp,
        } = transaction;

        const daiPrice = BigNumber(awpAmount).dividedBy(daiAmount);

        totalPosition = totalPosition.plus(awpAmount);

        let totalPositionValue = totalPosition
          .multipliedBy(daiPrice)
          .dividedBy(10 ** 18);

        console.log('TPV', totalPositionValue.toString());

        if (largest.isLessThan(totalPositionValue)) {
          console.log('LARGER');
          // TODO somehow this assignment is ignored.... know a fix?
          largest = totalPositionValue;
        }

        totalPositionValue = totalPositionValue.toFixed(3);

        return {
          timestamp,
          totalPositionValue,
        };
      });

      yourInvestment.data = newData;
      yourInvestment.chartTop = largest.multipliedBy(1.05).toFixed();

      console.log('CHART TOP', yourInvestment.chartTop);
    }
  },
});

export default yourInvestment;
