import BigNumber from 'bignumber.js';

import { store } from 'react-easy-state';

const addRemoveLiquidity = store({
  cry: {
    symbol: 'CRY',
    weight: 36,
  },
  error: undefined,
  gld: {
    symbol: 'GLD',
    weight: 36,
  },
  gsg: {
    symbol: 'GSG',
    weight: 36,
  },
  iei: {
    symbol: 'IEI',
    weight: 36,
  },
  slider: {
    add: 0,
    remove: 0,
  },
  tab: 'remove',
  tlt: {
    symbol: 'TLT',
    weight: 36,
  },
  vti: {
    symbol: 'VTI',
    weight: 36,
  },

  amount: (token) => {
    const { tab } = addRemoveLiquidity;
    const amount = BigNumber(addRemoveLiquidity.slider[tab])
      .multipliedBy(addRemoveLiquidity[token].weight / 100)
      .decimalPlaces(2)
      .toNumber();
    console.log(amount, token, tab);
    return amount;
  },
  isAvailable: (token) => token, // TODO
  reset: () => {
    addRemoveLiquidity.error = undefined;
    addRemoveLiquidity.tab = 'remove';
  },
  selectAdd: () => {
    addRemoveLiquidity.tab = 'add';
  },
  selectRemove: () => {
    addRemoveLiquidity.tab = 'remove';
  },
});

export default addRemoveLiquidity;
