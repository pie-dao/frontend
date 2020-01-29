/* eslint no-use-before-define: 0 */
import BigNumber from 'bignumber.js';

import { batch, store } from 'react-easy-state';
import { ethers } from 'ethers';

import eth from './eth';
import erc20 from '../abi/erc20';
import gun from './gun';

const buildFreshData = () => ({
  awpBalance: undefined,
  awpBalanceInDai: undefined,
  awpGain: undefined,
  awpPrice: undefined,
  awpTransactions: [],
  awpXDaiAllowance: undefined,
  awpXETHBalance: undefined,
  awpXTokenBalance: undefined,
  bntIndexBalance: undefined,
  btcIndexBalance: undefined,
  daiBalance: undefined,
  daiSpent: undefined,
  daiXETHBalance: undefined,
  daiXTokenBalance: undefined,
  ethBalance: undefined,
  ethIndexBalance: undefined,
  gldIndexBalance: undefined,
  gsgIndexBalance: undefined,
  ieiIndexBalance: undefined,
  kncIndexBalance: undefined,
  linkIndexBalance: undefined,
  lrcIndexBalance: undefined,
  mkrIndexBalance: undefined,
  mlnIndexBalance: undefined,
  renIndexBalance: undefined,
  snxIndexBalance: undefined,
  tltIndexBalance: undefined,
  vtiIndexBalance: undefined,
  zrkIndexBalance: undefined,
});

const decimalize = (value) => BigNumber(value).dividedBy(10 ** 18).decimalPlaces(18).toString();
const erc20Contract = (address, provider) => new ethers.Contract(address, erc20, provider);
const sanitizeNumberish = (numberish) => BigNumber(numberish.toString()).toFixed();

const fetchData = async () => {
  const newData = buildFreshData();

  const {
    account,
    awp,
    awpX,
    bntIndex,
    btcIndex,
    dai,
    daiX,
    ethIndex,
    gldIndex,
    gsgIndex,
    ieiIndex,
    kncIndex,
    linkIndex,
    lrcIndex,
    mkrIndex,
    mlnIndex,
    renIndex,
    provider,
    snxIndex,
    tltIndex,
    vtiIndex,
    zrkIndex,
  } = eth;

  const fromBlock = eth.startingBlock;

  const awpContract = erc20Contract(awp, provider);
  const awpXFilterIn = awpContract.filters.Transfer(awpX, account);
  const awpXFilterOut = awpContract.filters.Transfer(account, awpX);
  const bntIndexContract = erc20Contract(bntIndex, provider);
  const btcIndexContract = erc20Contract(btcIndex, provider);
  const daiContract = erc20Contract(dai, provider);
  const daiXFilterIn = daiContract.filters.Transfer(daiX, account);
  const daiXFilterOut = daiContract.filters.Transfer(account, daiX);
  const ethIndexContract = erc20Contract(ethIndex, provider);
  const gldIndexContract = erc20Contract(gldIndex, provider);
  const gsgIndexContract = erc20Contract(gsgIndex, provider);
  const ieiIndexContract = erc20Contract(ieiIndex, provider);
  const kncIndexContract = erc20Contract(kncIndex, provider);
  const linkIndexContract = erc20Contract(linkIndex, provider);
  const lrcIndexContract = erc20Contract(lrcIndex, provider);
  const mkrIndexContract = erc20Contract(mkrIndex, provider);
  const mlnIndexContract = erc20Contract(mlnIndex, provider);
  const renIndexContract = erc20Contract(renIndex, provider);
  const snxIndexContract = erc20Contract(snxIndex, provider);
  const tltIndexContract = erc20Contract(tltIndex, provider);
  const vtiIndexContract = erc20Contract(vtiIndex, provider);
  const zrkIndexContract = erc20Contract(zrkIndex, provider);

  awpXFilterIn.fromBlock = fromBlock;
  awpXFilterOut.fromBlock = fromBlock;
  daiXFilterIn.fromBlock = fromBlock;
  daiXFilterOut.fromBlock = fromBlock;

  const [
    awpBalance,
    awpXDaiAllowance,
    awpXETHBalance,
    awpXTokenBalance,
    awpXTransactionsIn,
    awpXTransactionsOut,
    bntIndexBalance,
    btcIndexBalance,
    daiBalance,
    daiXETHBalance,
    daiXTokenBalance,
    daiXTransactionsIn,
    daiXTransactionsOut,
    ethBalance,
    ethIndexBalance,
    gldIndexBalance,
    gsgIndexBalance,
    ieiIndexBalance,
    kncIndexBalance,
    linkIndexBalance,
    lrcIndexBalance,
    mkrIndexBalance,
    mlnIndexBalance,
    renIndexBalance,
    snxIndexBalance,
    tltIndexBalance,
    vtiIndexBalance,
    zrkIndexBalance,
  ] = await Promise.all([
    awpContract.balanceOf(account),
    daiContract.allowance(account, daiX),
    provider.getBalance(awpX),
    awpContract.balanceOf(awpX),
    provider.getLogs(awpXFilterIn),
    provider.getLogs(awpXFilterOut),
    bntIndexContract.balanceOf(account),
    btcIndexContract.balanceOf(account),
    daiContract.balanceOf(account),
    provider.getBalance(daiX),
    daiContract.balanceOf(daiX),
    provider.getLogs(daiXFilterIn),
    provider.getLogs(daiXFilterOut),
    provider.getBalance(account),
    ethIndexContract.balanceOf(account),
    gldIndexContract.balanceOf(account),
    gsgIndexContract.balanceOf(account),
    ieiIndexContract.balanceOf(account),
    kncIndexContract.balanceOf(account),
    linkIndexContract.balanceOf(account),
    lrcIndexContract.balanceOf(account),
    mkrIndexContract.balanceOf(account),
    mlnIndexContract.balanceOf(account),
    renIndexContract.balanceOf(account),
    snxIndexContract.balanceOf(account),
    tltIndexContract.balanceOf(account),
    vtiIndexContract.balanceOf(account),
    zrkIndexContract.balanceOf(account),
  ]);

  newData.awpBalance = sanitizeNumberish(awpBalance);
  newData.awpXDaiAllowance = sanitizeNumberish(awpXDaiAllowance);
  newData.awpXETHBalance = sanitizeNumberish(awpXETHBalance);
  newData.awpXTokenBalance = sanitizeNumberish(awpXTokenBalance);
  newData.bntIndexBalance = sanitizeNumberish(bntIndexBalance);
  newData.btcIndexBalance = sanitizeNumberish(btcIndexBalance);
  newData.daiBalance = sanitizeNumberish(daiBalance);
  newData.daiXETHBalance = sanitizeNumberish(daiXETHBalance);
  newData.daiXTokenBalance = sanitizeNumberish(daiXTokenBalance);
  newData.ethBalance = sanitizeNumberish(ethBalance);
  newData.ethIndexBalance = sanitizeNumberish(ethIndexBalance);
  newData.gldIndexBalance = sanitizeNumberish(gldIndexBalance);
  newData.gsgIndexBalance = sanitizeNumberish(gsgIndexBalance);
  newData.ieiIndexBalance = sanitizeNumberish(ieiIndexBalance);
  newData.kncIndexBalance = sanitizeNumberish(kncIndexBalance);
  newData.linkIndexBalance = sanitizeNumberish(linkIndexBalance);
  newData.lrcIndexBalance = sanitizeNumberish(lrcIndexBalance);
  newData.mkrIndexBalance = sanitizeNumberish(mkrIndexBalance);
  newData.mlnIndexBalance = sanitizeNumberish(mlnIndexBalance);
  newData.renIndexBalance = sanitizeNumberish(renIndexBalance);
  newData.snxIndexBalance = sanitizeNumberish(snxIndexBalance);
  newData.tltIndexBalance = sanitizeNumberish(tltIndexBalance);
  newData.vtiIndexBalance = sanitizeNumberish(vtiIndexBalance);
  newData.zrkIndexBalance = sanitizeNumberish(zrkIndexBalance);

  const transactions = {};

  const awpXTransactionProcessor = ({
    blockNumber,
    blockHash,
    data,
    transactionHash,
  }, direction) => {
    if (!transactions[transactionHash]) {
      transactions[transactionHash] = {
        blockNumber,
        blockHash,
        transactionHash,
      };
    }

    transactions[transactionHash].awpAmount = ethers.utils.bigNumberify(data);
    transactions[transactionHash].direction = direction;
  };

  const daiXTransactionProcessor = ({ data, transactionHash }) => {
    if (!transactions[transactionHash]) {
      return;
    }

    transactions[transactionHash].daiAmount = ethers.utils.bigNumberify(data);
  };

  awpXTransactionsIn.forEach((tx) => awpXTransactionProcessor(tx, 'buy'));
  awpXTransactionsOut.forEach((tx) => awpXTransactionProcessor(tx, 'sell'));
  daiXTransactionsIn.forEach((tx) => daiXTransactionProcessor(tx));
  daiXTransactionsOut.forEach((tx) => daiXTransactionProcessor(tx));

  const blockPromises = Object.values(transactions).map(async (tx) => {
    const updatedTx = { ...tx };
    const { timestamp } = await provider.getBlock(tx.blockHash);
    updatedTx.timestamp = timestamp;
    return updatedTx;
  });

  newData.awpTransactions = await Promise.all(blockPromises);

  const reducer = (acc, { daiAmount, direction }) => {
    if (direction === 'buy') {
      return acc.plus(daiAmount);
    }

    return acc.minus(daiAmount);
  };

  const daiSpent = newData.awpTransactions.reduce(reducer, BigNumber(0));
  const ethPrice = BigNumber(newData.daiXTokenBalance).dividedBy(newData.daiXETHBalance);
  const awpXDaiBalance = BigNumber(newData.awpXETHBalance).multipliedBy(ethPrice);
  const awpPrice = BigNumber(newData.awpBalance).dividedBy(awpXDaiBalance);
  const awpBalanceInDai = BigNumber(newData.awpBalance).multipliedBy(awpPrice);

  newData.awpBalanceInDai = awpBalanceInDai.toFixed();
  newData.awpPrice = awpPrice.toFixed();
  newData.awpGain = BigNumber(newData.awpBalance).multipliedBy(awpPrice).minus(daiSpent).toFixed();
  newData.daiSpent = daiSpent.toFixed();

  console.log('final', newData);

  return newData;
};

const receiveDBData = (data) => {
  if (data) {
    storeData(data, false);
  }
  myAccount.fetch();
};

const storeData = async (data, storeLocally = true) => {
  batch(() => {
    myAccount.initialized = true;
    myAccount.awpTransactions = data.awpTransactions.sort((a, b) => b.timestamp - a.timestamp);
    myAccount.data = data;

    myAccount.awpBalance = decimalize(data.awpBalance);
    myAccount.awpBalanceInDai = decimalize(data.awpBalanceInDai);
    myAccount.awpGain = decimalize(data.awpGain);
    myAccount.awpPrice = decimalize(data.awpPrice);
    myAccount.awpXETHBalance = decimalize(data.awpXETHBalance);
    myAccount.awpXTokenBalance = decimalize(data.awpXTokenBalance);
    myAccount.bntIndexBalance = decimalize(data.bntIndexBalance);
    myAccount.btcIndexBalance = decimalize(data.btcIndexBalance);
    myAccount.daiBalance = decimalize(data.daiBalance);
    myAccount.daiSpent = decimalize(data.daiSpent);
    myAccount.daiXETHBalance = decimalize(data.daiXETHBalance);
    myAccount.daiXTokenBalance = decimalize(data.daiXTokenBalance);
    myAccount.ethBalance = decimalize(data.ethBalance);
    myAccount.ethIndexBalance = decimalize(data.ethIndexBalance);
    myAccount.gldIndexBalance = decimalize(data.gldIndexBalance);
    myAccount.gsgIndexBalance = decimalize(data.gsgIndexBalance);
    myAccount.ieiIndexBalance = decimalize(data.ieiIndexBalance);
    myAccount.kncIndexBalance = decimalize(data.kncIndexBalance);
    myAccount.linkIndexBalance = decimalize(data.linkIndexBalance);
    myAccount.lrcIndexBalance = decimalize(data.lrcIndexBalance);
    myAccount.mkrIndexBalance = decimalize(data.mkrIndexBalance);
    myAccount.mlnIndexBalance = decimalize(data.mlnIndexBalance);
    myAccount.renIndexBalance = decimalize(data.renIndexBalance);
    myAccount.snxIndexBalance = decimalize(data.snxIndexBalance);
    myAccount.tltIndexBalance = decimalize(data.tltIndexBalance);
    myAccount.vtiIndexBalance = decimalize(data.vtiIndexBalance);
    myAccount.zrkIndexBalance = decimalize(data.zrkIndexBalance);
  });

  if (storeLocally) {
    myAccount.db().put({ data: JSON.stringify(data) });
  }
};

const myAccount = store({
  awpBalance: undefined,
  awpGain: undefined,
  awpPrice: undefined,
  awpTransactions: [],
  awpXETHBalance: undefined,
  awpXTokenBalance: undefined,
  bntIndexBalance: undefined,
  btcIndexBalance: undefined,
  daiBalance: undefined,
  daiSpent: undefined,
  daiXETHBalance: undefined,
  daiXTokenBalance: undefined,
  data: buildFreshData(),
  error: undefined,
  ethBalance: undefined,
  ethIndexBalance: undefined,
  gldIndexBalance: undefined,
  gsgIndexBalance: undefined,
  ieiIndexBalance: undefined,
  initialized: false,
  kncIndexBalance: undefined,
  linkIndexBalance: undefined,
  lrcIndexBalance: undefined,
  mkrIndexBalance: undefined,
  mlnIndexBalance: undefined,
  renIndexBalance: undefined,
  snxIndexBalance: undefined,
  tltIndexBalance: undefined,
  vtiIndexBalance: undefined,
  zrkIndexBalance: undefined,

  addTransaction: (transactionHash, daiAmount, awpAmount) => {
    const blockNumber = 'pending';
    const timestamp = BigNumber(Date.now()).dividedBy(1000).decimalPlaces(0).toNumber();

    myAccount.awpTransactions.unshift({
      awpAmount,
      blockNumber,
      daiAmount,
      timestamp,
      transactionHash,
    });
  },
  approveDai: async () => {
    const {
      daiX,
      dai,
      maxUint,
      notify,
      signer,
    } = eth;

    const daiContract = erc20Contract(dai, signer);
    const gasLimit = 160000;
    const gasPrice = ethers.utils.parseEther('0.000000005');

    notify(await daiContract.approve(daiX, maxUint, { gasLimit, gasPrice }));
    myAccount.data.awpXDaiAllowance = maxUint;
  },
  db: () => gun.get('myAccount').get(eth.account),
  fetch: async () => {
    try {
      await storeData(await fetchData());
    } catch (e) {
      console.error(e);
      myAccount.error = e;
    }
  },
  init: async () => {
    receiveDBData();
    myAccount.db().get('data').once(receiveDBData);
    myAccount.initialized = true;
  },
});

export default myAccount;
