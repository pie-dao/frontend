import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { store } from 'react-easy-state';

import eth from './eth';
import setIssuanceModuleABI from '../abi/setIssuanceModule';

import myAccount from './myAccount';

const addRemoveLiquidity = store({
  bnt: {
    symbol: 'BNT',
    weight: 0.3333,
    amountPerUnit: 0.0016255267910897049981,
  },
  btc: {
    symbol: 'BTC',
    weight: 3.5,
    amountPerUnit: 0.00000434943743303794095,
  },
  eth: {
    symbol: 'ETH',
    weight: 3.5,
    amountPerUnit: 0.00024841159980592041765,
  },
  gld: {
    symbol: 'GLD',
    weight: 6.75,
    amountPerUnit: 0.0004595901137059985019,
  },
  gsg: {
    symbol: 'GSG',
    weight: 6.75,
    amountPerUnit: 0.004206760731914044971825,
  },
  iei: {
    symbol: 'IEI',
    weight: 13.5,
    amountPerUnit: 0.0010696882056970801473,
  },
  knc: {
    symbol: 'KNC',
    weight: 0.3333,
    amountPerUnit: 0.01685152748499351253607166,
  },
  link: {
    symbol: 'LINK',
    weight: 0.3333,
    amountPerUnit: 0.00150049804650010761989229,
  },
  lrc: {
    symbol: 'LRC',
    weight: 0.3333,
    amountPerUnit: 0.14729226230764863502153788,
  },
  mkr: {
    symbol: 'MKR',
    weight: 0.3333,
    amountPerUnit: 0.00000706925099015030251026,
  },
  mln: {
    symbol: 'MLN',
    weight: 0.3333,
    amountPerUnit: 0.00099849837188719572994488,
  },
  ren: {
    symbol: 'REN',
    weight: 0.3333,
    amountPerUnit: 0.07559458548685109787280032,
  },
  snx: {
    symbol: 'SNX',
    weight: 0.3333,
    amountPerUnit: 0.00316329498744693885856284,
  },
  tlt: {
    symbol: 'TLT',
    weight: 36,
    amountPerUnit: 0.0026057688827765915088,
  },
  vti: {
    symbol: 'VTI',
    weight: 27,
    amountPerUnit: 0.0016255267910897049981,
  },
  zrk: {
    symbol: 'ZRK',
    weight: 0.3333,
    amountPerUnit: 0.01611283374745072538806197,
  },
  tab: 'remove',
  error: undefined,
  slider: {
    add: 0,
    remove: 0,
  },

  amount: (token) => {
    const { tab } = addRemoveLiquidity;
    return BigNumber(addRemoveLiquidity.slider[tab])
      .multipliedBy(addRemoveLiquidity[token].amountPerUnit)
      .dividedBy(10)
      .decimalPlaces(8)
      .toNumber();
  },
  isAvailable: (token) => {
    const { tab } = addRemoveLiquidity;
    if (tab === 'remove') {
      return true;
    }

    const balance = BigNumber(myAccount[`${token}IndexBalance`]);

    return balance.isGreaterThan(addRemoveLiquidity.amount(token));
  },
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
  sliderChange: (value) => {
    const { tab } = addRemoveLiquidity;
    addRemoveLiquidity.slider[tab] = value.toFixed();
  },
  sliderMax: () => {
    const { tltIndexBalance } = myAccount;
    const { tab, tlt: { amountPerUnit } } = addRemoveLiquidity;

    if (tab === 'add') {
      const amount = BigNumber(tltIndexBalance)
        .dividedBy(amountPerUnit)
        .multipliedBy(10)
        .decimalPlaces(0)
        .toNumber();

      return amount;
    }

    return BigNumber(myAccount.awpBalance || 0).decimalPlaces(0).toNumber();
  },
  redeem: async () => {
    const {
      setIssuanceModule,
      awp,
      signer,
    } = eth;
    const contract = new ethers.Contract(setIssuanceModule, setIssuanceModuleABI, signer);
    const redeemAmount = ethers.utils.parseEther(addRemoveLiquidity.slider.remove);

    const { emitter } = eth.notify(await contract.redeemRebalancingSet(
      awp,
      redeemAmount,
      false,
      { gasLimit: 2000000 },
    ));

    emitter.on('txConfirmed', () => {
      setTimeout(myAccount.fetch, 2000);
      setTimeout(myAccount.fetch, 5000);
      setTimeout(myAccount.fetch, 9000);
      setTimeout(myAccount.fetch, 15000);
    });
  },
  mint: async () => {
    const {
      setIssuanceModule,
      awp,
      signer,
    } = eth;
    await addRemoveLiquidity.doAllowances();

    const contract = new ethers.Contract(setIssuanceModule, setIssuanceModuleABI, signer);
    const mintAmount = ethers.utils.parseEther(addRemoveLiquidity.slider.add);

    const { emitter } = eth.notify(await contract.issueRebalancingSet(
      awp,
      mintAmount,
      false,
      { gasLimit: 2000000 },
    ));

    emitter.on('txConfirmed', () => {
      setTimeout(myAccount.fetch, 2000);
      setTimeout(myAccount.fetch, 5000);
      setTimeout(myAccount.fetch, 9000);
      setTimeout(myAccount.fetch, 15000);
    });
  },
  doAllowances: async () => '',
});

export default addRemoveLiquidity;
