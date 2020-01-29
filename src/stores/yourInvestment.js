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
      let totalPosition = BigNumber(0);

      const sorted = myAccount.awpTransactions.sort((a, b) => a.blockNumber - b.blockNumber);

      const newData = sorted.map((transaction) => {
        const {
          awpAmount,
          daiAmount,
          timestamp,
        } = transaction;

        const daiPrice = BigNumber(awpAmount).dividedBy(daiAmount);

        totalPosition = totalPosition.plus(awpAmount);

        const totalPositionValue = totalPosition
          .multipliedBy(daiPrice)
          .dividedBy(10 ** 18)
          .toFixed();

        console.log('TPV', totalPositionValue);

        return {
          timestamp,
          totalPositionValue,
        };
      });

      yourInvestment.data = newData;
      yourInvestment.chartTop = BigNumber(newData[newData.length - 1].totalPositionValue)
        .multipliedBy(1.05)
        .decimalPlaces(0)
        .toNumber();

      console.log('CHART TOP', yourInvestment.chartTop);
    }
  },
});

export default yourInvestment;
