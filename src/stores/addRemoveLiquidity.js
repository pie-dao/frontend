import BigNumber from 'bignumber.js';

import { store } from 'react-easy-state';

const addRemoveLiquidity = store({
  bnt: {
    address: '0xf09a28dcf6e78c1d41c007e9c455690b9caa856a',
    symbol: 'BNT',
    weight: 0.3333,
  },
  btc: {
    address: '0x8ff461ce88b24eed98626d31ebc4dad4c3766909',
    symbol: 'BTC',
    weight: 3.5,
  },
  cry: {
    address: '0x5a7f66df53bfe91668163ac9bc4e032a9b1a7933',
    symbol: 'CRY',
    weight: 3.5,
  },
  eth: {
    address: '0x5a7f66df53bfe91668163ac9bc4e032a9b1a7933',
    symbol: 'ETH',
    weight: 3.5,
  },
  error: undefined,
  gld: {
    address: '0x50ba867f2e744cc37454226f5d284eb508225bfe',
    symbol: 'GLD',
    weight: 6.75,
  },
  gsg: {
    address: '0xb3fbd03338febe9412995c2f85c67837aba0d783',
    symbol: 'GSG',
    weight: 6.75,
  },
  iei: {
    address: '0x47E2e4B61446144202D0293BF5E1959377D8564D',
    symbol: 'IEI',
    weight: 13.5,
  },
  knc: {
    address: '0x88d152c819cf3e0e5b08c57cebf4abeee802c1ac',
    symbol: 'KNC',
    weight: 0.3333,
  },
  link: {
    address: '0xdae0064c4d70f9b5013436c4a7abcd2802f347fc',
    symbol: 'LINK',
    weight: 0.3333,
  },
  lrc: {
    address: '0x6fe8a29f39c2ae7394ca08d0e6be08d1f3e85271',
    symbol: 'LRC',
    weight: 0.3333,
  },
  mkr: {
    address: '0xa1fe796b933e8da15198f01d36138aa309da2a54',
    symbol: 'MKR',
    weight: 0.3333,
  },
  mln: {
    address: '0x49fd060dfaa23e1a94cd4557733b007dbc77896b',
    symbol: 'MLN',
    weight: 0.3333,
  },
  ren: {
    address: '0x16755ad903793b0d173889d0f4acfe319b1d0b62',
    symbol: 'REN',
    weight: 0.3333,
  },
  slider: {
    add: 0,
    remove: 0,
  },
  // SNX
  snx: {
    address: '0xd301aff0da4a2035fbb2e3804bb000cdc1ad9050',
    symbol: 'SNX',
    weight: 0.3333,
  },
  tab: 'remove',
  tlt: {
    address: '0x9Cfe6CA5f4C082Aee3415a602B1800c5debdc52d',
    symbol: 'TLT',
    weight: 36,
  },
  vti: {
    address: '0x6818148626150841D4BAEc19aeF8cd75413112e0',
    symbol: 'VTI',
    weight: 27,
  },
  zrk: {
    address: '0xe6b123645a67b29de05b71e99f0c2210e439bb79',
    symbol: 'ZRK',
    weight: 0.3333,
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
