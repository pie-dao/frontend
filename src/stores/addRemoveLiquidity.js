import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { store } from 'react-easy-state';
import { SetTokenAPI } from 'setprotocol.js/dist/src/api';
import { Assertions } from 'setprotocol.js/dist/src/assertions';
import Web3 from 'web3';

import eth from './eth';
import setIssuanceModuleABI from '../abi/setIssuanceModule';

import myAccount from './myAccount';

const addRemoveLiquidity = store({
  bnt: {
    symbol: 'BNT',
    weight: 0.3333,
  },
  btc: {
    symbol: 'BTC',
    weight: 3.5,
  },
  eth: {
    symbol: 'ETH',
    weight: 3.5,
  },
  error: undefined,
  gld: {
    symbol: 'GLD',
    weight: 6.75,
  },
  gsg: {
    symbol: 'GSG',
    weight: 6.75,
  },
  iei: {
    symbol: 'IEI',
    weight: 13.5,
  },
  knc: {
    symbol: 'KNC',
    weight: 0.3333,
  },
  link: {
    symbol: 'LINK',
    weight: 0.3333,
  },
  lrc: {
    symbol: 'LRC',
    weight: 0.3333,
  },
  mkr: {
    symbol: 'MKR',
    weight: 0.3333,
  },
  mln: {
    symbol: 'MLN',
    weight: 0.3333,
  },
  ren: {
    symbol: 'REN',
    weight: 0.3333,
  },
  slider: {
    add: 0,
    remove: 0,
  },
  snx: {
    symbol: 'SNX',
    weight: 0.3333,
  },
  tab: 'remove',
  tlt: {
    symbol: 'TLT',
    weight: 36,
  },
  vti: {
    symbol: 'VTI',
    weight: 27,
  },
  zrk: {
    symbol: 'ZRK',
    weight: 0.3333,
  },

  amount: (token) => {
    const { tab } = addRemoveLiquidity;
    return BigNumber(addRemoveLiquidity.slider[tab])
      .multipliedBy(addRemoveLiquidity[token].weight / 100)
      .decimalPlaces(2)
      .toNumber();
  },
  isAvailable: (token) => {
    const { slider, tab } = addRemoveLiquidity;
    if (tab === 'remove') {
      return true;
    }

    const weight = BigNumber(addRemoveLiquidity[token].weight).dividedBy(100);
    const amount = BigNumber(slider[tab]).multipliedBy(weight);

    console.log(weight);
    console.log(amount);

    const balance = BigNumber(myAccount[`${token}IndexBalance`]);
    return balance.isGreaterThan(amount);
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
    const { tab } = addRemoveLiquidity;

    console.log('MAX', tab, myAccount.awpBalance);

    if (tab === 'add') {
      return 10; // TODO
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

    const { emitter, hash } = eth.notify(await contract.redeemRebalancingSet(
      awp,
      redeemAmount,
      false,
      { gasLimit: 2000000 },
    ));

    // TODO what should we do with these
    console.log(emitter, hash);
  },
  mint: async () => {
    // const {
    //   setIssuanceModule,
    //   awp,
    //   signer,
    // } = eth;
    await addRemoveLiquidity.doAllowances();

    // const contract = new ethers.Contract(setIssuanceModule, setIssuanceModuleABI, signer);
    // const mintAmount = ethers.utils.parseEther(addRemoveLiquidity.slider.add);

    // const { emitter, hash } = eth.notify(await contract.issueRebalancingSet(
    //   awp,
    //   mintAmount,
    //   false,
    //   { gasLimit: 2000000 },
    // ));

    // // TODO what should we do with these
    // console.log(emitter, hash);
  },
  doAllowances: async () => {
    const {
      setTransferProxy,
      // awp,
      provider,
    } = eth;

    console.log(SetTokenAPI);

    // TODO fix this so it works with kovan and does not instantiate a web3 provider on every call
    const web3 = new Web3(provider);
    const assertions = new Assertions(web3);

    const setTokenUtils = new SetTokenAPI(web3, assertions);
    console.log(setTokenUtils);

    console.log(addRemoveLiquidity.slider.add);
    console.log(ethers.utils.parseEther(addRemoveLiquidity.slider.add));

    const components = setTokenUtils.calculateComponentAmountsForIssuanceAsync(
      // Tried hard coded non rebalancing set(not working)
      '0x1b862b62b150d73068c9190a36a25c736601fb92',
      // Need to cast to BigNumber because set uses different bignumber lib than ethers
      new BigNumber(ethers.utils.parseEther(addRemoveLiquidity.slider.add).toString()),
    );
    console.log(components);
    console.log(setTransferProxy);
  },
});

export default addRemoveLiquidity;
