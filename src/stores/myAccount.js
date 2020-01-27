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
  awpXETHBalance: undefined,
  awpXTokenBalance: undefined,
  daiBalance: undefined,
  daiSpent: undefined,
  daiXETHBalance: undefined,
  daiXTokenBalance: undefined,
  ethBalance: undefined,
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
    dai,
    daiX,
    provider,
  } = eth;

  const fromBlock = eth.startingBlock;

  const awpContract = erc20Contract(awp, provider);
  const awpXFilterIn = awpContract.filters.Transfer(awpX, account);
  const awpXFilterOut = awpContract.filters.Transfer(account, awpX);
  const daiContract = erc20Contract(dai, provider);
  const daiXFilterIn = daiContract.filters.Transfer(daiX, account);
  const daiXFilterOut = daiContract.filters.Transfer(account, daiX);

  awpXFilterIn.fromBlock = fromBlock;
  awpXFilterOut.fromBlock = fromBlock;
  daiXFilterIn.fromBlock = fromBlock;
  daiXFilterOut.fromBlock = fromBlock;


  // get balances and transactions
  const [
    awpBalance,
    awpXETHBalance,
    awpXTokenBalance,
    awpXTransactionsIn,
    awpXTransactionsOut,
    daiBalance,
    daiXETHBalance,
    daiXTokenBalance,
    daiXTransactionsIn,
    daiXTransactionsOut,
    ethBalance,
  ] = await Promise.all([
    awpContract.balanceOf(account),
    provider.getBalance(awpX),
    awpContract.balanceOf(awpX),
    provider.getLogs(awpXFilterIn),
    provider.getLogs(awpXFilterOut),
    daiContract.balanceOf(account),
    provider.getBalance(daiX),
    daiContract.balanceOf(daiX),
    provider.getLogs(daiXFilterIn),
    provider.getLogs(daiXFilterOut),
    provider.getBalance(account),
  ]);

  console.log('3');
  console.log(
    'raw',
    awpBalance,
    awpXETHBalance,
    awpXTokenBalance,
    awpXTransactionsIn,
    awpXTransactionsOut,
    daiBalance,
    daiXETHBalance,
    daiXTokenBalance,
    daiXTransactionsIn,
    daiXTransactionsOut,
    ethBalance,
  );

  newData.awpBalance = sanitizeNumberish(awpBalance);
  newData.awpXETHBalance = sanitizeNumberish(awpXETHBalance);
  newData.awpXTokenBalance = sanitizeNumberish(awpXTokenBalance);
  newData.daiBalance = sanitizeNumberish(daiBalance);
  console.log('DAI BALANCE', daiBalance.toString(), newData.daiBalance);
  newData.daiXETHBalance = sanitizeNumberish(daiXETHBalance);
  newData.daiXTokenBalance = sanitizeNumberish(daiXTokenBalance);
  newData.ethBalance = sanitizeNumberish(ethBalance);

  // get all awp exchange transactions
  // [ {
  //    blockNumber: 3313426,
  //    blockHash: "0xe01c1e437ed3af9061006492cb07454eca8561479454a709809b7897f225387d",
  //    transactionIndex: 5,)
  //    removed: false,
  //    address: "0x6fC21092DA55B392b045eD78F4732bff3C580e2c",
  //    data: "0x00000000000000000000000053095760c154a1531a69fc718119d14c4aa1506f" +
  //            "000000000000000000000000000000000000000000000000016345785d8a0000",
  //    topics: [
  //      "0x179ef3319e6587f6efd3157b34c8b357141528074bcb03f9903589876168fa14",
  //      "0xe625ed7b108857745d1d9889a7ae05861d8aee38e0e92fd3a31191de01c2515b"
  //    ],
  //    transactionHash: "0x61d641aaf3dcf4cf6bafc3e79d332d8773ea0688f87eb00f8b60c3f0050e55f0",
  //    logIndex: 5
  // } ]

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

  console.log('transactions', transactions);

  const blockPromises = Object.values(transactions).map(async (tx) => {
    const updatedTx = { ...tx };
    const { timestamp } = await provider.getBlock(tx.blockHash);
    updatedTx.timestamp = timestamp;
    return updatedTx;
  });

  newData.awpTransactions = await Promise.all(blockPromises);
  newData.awpTransactions.sort((a, b) => b.timestamp - a.timestamp);

  console.log('updated transactions', newData.awpTransactions);

  const reducer = (acc, { daiAmount, direction }) => {
    console.log('reducer', acc, daiAmount, direction);
    if (direction === 'buy') {
      return acc.plus(daiAmount);
    }

    return acc.minus(daiAmount);
  };

  const daiSpent = newData.awpTransactions.reduce(reducer, BigNumber(0));
  console.log('dai spent', daiSpent);

  const ethPrice = BigNumber(newData.daiXTokenBalance).dividedBy(newData.daiXETHBalance);
  console.log('eth price', ethPrice);

  const awpXDaiBalance = BigNumber(newData.awpXETHBalance).multipliedBy(ethPrice);
  console.log('awp xdai balance', awpXDaiBalance);

  const awpPrice = BigNumber(newData.awpBalance).dividedBy(awpXDaiBalance);
  console.log('awp price', awpPrice);

  const awpBalanceInDai = BigNumber(newData.awpBalance).multipliedBy(awpPrice);

  newData.awpBalanceInDai = awpBalanceInDai.toFixed();
  newData.awpPrice = awpPrice.toFixed();
  newData.awpGain = BigNumber(newData.awpBalance).multipliedBy(awpPrice).minus(daiSpent).toFixed();
  newData.daiSpent = daiSpent.toFixed();

  console.log('4');
  console.log('final', newData);

  return newData;
};

const receiveDBData = (data) => {
  console.log('receiveDBData myAccount', data);
  if (data) {
    storeData(data, false);
  }
  myAccount.fetch();
};

const storeData = async (data, storeLocally = true) => {
  console.log('storeData', data, 'storeLocally', storeLocally);
  batch(() => {
    myAccount.awpTransactions = data.awpTransactions;
    myAccount.data = data;

    myAccount.awpBalance = decimalize(data.awpBalance);
    myAccount.awpBalanceInDai = decimalize(data.awpBalanceInDai);
    myAccount.awpGain = decimalize(data.awpGain);
    myAccount.awpPrice = decimalize(data.awpPrice);
    myAccount.awpXETHBalance = decimalize(data.awpXETHBalance);
    myAccount.awpXTokenBalance = decimalize(data.awpXTokenBalance);
    myAccount.daiBalance = decimalize(data.daiBalance);
    myAccount.daiSpent = decimalize(data.daiSpent);
    myAccount.daiXETHBalance = decimalize(data.daiXETHBalance);
    myAccount.daiXTokenBalance = decimalize(data.daiXTokenBalance);
    myAccount.ethBalance = decimalize(data.ethBalance);
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
  daiBalance: undefined,
  daiSpent: undefined,
  daiXETHBalance: undefined,
  daiXTokenBalance: undefined,
  data: buildFreshData(),
  error: undefined,
  ethBalance: undefined,
  initialized: false,

  // addTransaction: (hash) => {
  // use notify to monitor and then add to transaction array
  // },
  db: () => {
    console.log('myAccount, account', eth.account);

    return gun.get('myAccount').get(eth.account);
  },
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

window.myAccount = myAccount;

export default myAccount;
