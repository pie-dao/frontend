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

        const daiPrice = BigNumber(daiAmount).dividedBy(awpAmount);

        totalPosition = totalPosition.plus(awpAmount);

        let totalPositionValue = totalPosition
          .multipliedBy(daiPrice)
          .dividedBy(10 ** 18);

        if (largest.isLessThan(totalPositionValue)) {
          largest = totalPositionValue;
        }

        totalPositionValue = totalPositionValue.toFixed(3);

        return {
          timestamp,
          totalPositionValue,
        };
      });

      const timestamp = Math.round(Date.now() / 1000);
      const totalPositionValue = totalPosition
        .multipliedBy(myAccount.data.awpPrice)
        .dividedBy(10 ** 18)
        .toFixed(3);

      console.log('newData', newData);

      newData.push({
        timestamp,
        totalPositionValue,
      });

      yourInvestment.data = newData;
      yourInvestment.chartTop = largest.multipliedBy(1.05).toFixed();
    }
  },
});

export default yourInvestment;
