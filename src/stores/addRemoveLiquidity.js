import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { store } from 'react-easy-state';
import SetProtocol from 'setprotocol.js';

import Web3 from 'web3';

import eth from './eth';
import setIssuanceModuleABI from '../abi/setIssuanceModule';

import myAccount from './myAccount';
import erc20 from '../abi/erc20';

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
      .decimalPlaces(8)
      .toNumber();
  },
  isAvailable: (token) => {
    const { tab } = addRemoveLiquidity;
    if (tab === 'remove') {
      return true;
    }

    // const weight = BigNumber(addRemoveLiquidity[token].weight).dividedBy(100);
    // const amount = BigNumber(slider[tab]).multipliedBy(weight);

    // console.log(weight);
    // console.log(amount);
    const balance = BigNumber(myAccount[`${token}IndexBalance`]);
    console.log(balance.toString());
    return balance.isGreaterThan(addRemoveLiquidity.amount(token) * 10 ** 18);
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
    const {
      setIssuanceModule,
      awp,
      signer,
    } = eth;
    await addRemoveLiquidity.doAllowances();

    const contract = new ethers.Contract(setIssuanceModule, setIssuanceModuleABI, signer);
    const mintAmount = ethers.utils.parseEther(addRemoveLiquidity.slider.add);

    const { emitter, hash } = eth.notify(await contract.issueRebalancingSet(
      awp,
      mintAmount,
      false,
      { gasLimit: 2000000 },
    ));

    // // TODO what should we do with these
    console.log(emitter, hash);
  },
  doAllowances: async () => {
    const {
      setTransferProxy,
      signer,
      account,
      maxUint,
    } = eth;
    const config = {
      coreAddress: '0x3ee64Fe0b9246Ae52845F01A79c4b3A6D252289a',
      exchangeIssuanceModuleAddress: '0x887E45236B280B33C743075ac11dD69E3c581697',
      kyberNetworkWrapperAddress: '0x4093415A2eA915EaacF44Ac08A42434aE6A9d4e5',
      protocolViewerAddress: '0x5754FA9d232812F817F5Ca58152Ad1E991e916dD',
      RebalancingLibrary: '0x0bb980258dAfb6cFda58CB4421aF1d0E019C52ef',
      rebalanceAuctionModuleAddress: '0xeA510E982c92620A19475F8Dc777bAaa3c2A00F5',
      rebalancingSetExchangeIssuanceModule: '0xC2eF8799315E08f4ee08eA29913D2e51dba5aB78',
      rebalancingSetIssuanceModule: '0x91E1489D04054Ae552a369504F94E0236909c53c',
      rebalancingSetTokenFactoryAddress: '0xdc5B19c7085eBEE3AF84cf30418c0ECa11Ed1933',
      setTokenFactoryAddress: '0x952F78C33D3fb884C00b22e69B9119cd70582F80',
      transferProxyAddress: '0x61d264865756751392C0f00357Cc26ea70D98E3B',
      vaultAddress: '0x45Ab785b6c04f11b5e49B03d60f3642A8Ffe9246',
      wrappedEtherAddress: '0x8a18c7034aCEfD1748199a58683Ee5F22e2d4e45',
    };

    const provider = new Web3.providers.HttpProvider('https://kovan.infura.io/v3/076b582fd6164444af0b426614496e15');

    const set = new SetProtocol(provider, config);

    // eslint-disable-next-line max-len
    const components = await set.setToken.calculateComponentAmountsForIssuanceAsync('0x1b862b62b150d73068c9190a36a25c736601fb92', new BigNumber(ethers.utils.parseEther(addRemoveLiquidity.slider.add).toString()));

    console.log(components);

    const promises = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const component of components) {
      console.log(component);

      const token = new ethers.Contract(component.address, erc20, signer);

      // eslint-disable-next-line no-await-in-loop
      const allowance = await token.allowance(account, setTransferProxy);

      if (component.unit.gt(allowance)) {
        // eslint-disable-next-line no-await-in-loop
        promises.push(token.approve(setTransferProxy, maxUint));
      }
    }

    await Promise.all(promises);
  },
});

export default addRemoveLiquidity;
