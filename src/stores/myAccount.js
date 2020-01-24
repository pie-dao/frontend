/* eslint no-use-before-define: 0 */
import BigNumber from 'bignumber.js';

import { store } from 'react-easy-state';

import erc20 from '../abi/erc20';
import uniswap from '../api/uniswap';

const erc20Contracts = {};
const exchangeContracts = {};

let db;

const buildFreshData = () => {
  awpBalance: undefined,
  awpGain: undefined,
  awpTransactions: [],
  awpXETHBalance: undefined,
  awpXTokenBalance: undefined,
  daiBalance: undefined,
  daiXETHBalance: undefined,
  daiXTokenBalance: undefined,
  ethBalance: undefined,
};

const erc20Contract = (address) => new ethers.Contract(address, erc20, myAccount.provider);
const sanitizeNumberish = (numberish) => BigNumber(numberish.toString).toFixed();
const uniswapContract = (address) => new ethers.Contract(address, uniswap, myAccount.provider);

const fetchData = await () => {
  const data = buildFreshData();

  const {
    account,
    provider,
    tokens: {
      awp,
      awpX,
      dai,
      daiX,
    }
  } = myAccount;

  const awpContract = erc20Contract(awp);
  const awpXContract = uniswapContract(awpX);
  const awpXFilterIn = awpContract.filters.Transfer(awpX, account);
  const awpXFilterOut = awpContract.filters.Transfer(account, awpX);
  const daiContract = erc20Contract(dai);
  const daiXContract = uniswapContract(awpX);
  const daiXFilterIn = daiContract.filters.Transfer(daiX, account);
  const daiXFilterOut = daiContract.filters.Transfer(account, daiX);

  // get balances and transactions
  const [
    awpBalance,
    awpXETHBalance,
    awpXTokenBalance,
    awpXTransactionsIn,
    awpXtransactionsOut,
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

  data.awpBalance = sanitizeNumberish(awpBalance);
  data.awpXETHBalance = sanitizeNumberish(awpXETHBalance);
  data.awpXTokenBalance = sanitizeNumberish(awpXTokenBalance);
  data.daiBalance = sanitizeNumberish(daiBalance);
  data.daiXETHBalance = sanitizeNumberish(daiXETHBalance);
  data.daiXTokenBalance = sanitizeNumberish(daiXTokenBalance);
  data.ethBalance = sanitizeNumberish(ethBalance);

  // get all awp exchange transactions
  // [ {
  //    blockNumber: 3313426,
  //    blockHash: "0xe01c1e437ed3af9061006492cb07454eca8561479454a709809b7897f225387d",
  //    transactionIndex: 5,
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

  awpXtransactionsIn.forEach(({ blockNumber, blockHash, data, transactionHash }) => {
    if (!transactions[transactionHash]) {
      transactions[transactionHash] = {
        blockNumber: blockNumber,
        blockHash: blockHash,
        transactionHash: transactionHash,
      };
    }

    transactions[transactionHash].awpAmount = ethers.utils.bigNumberify(data);
    transactions[transactionHash].direction = 'buy';
  });

  awpXtransactionsOut.forEach(({ blockNumber, blockHash, data, transactionHash }) => {
    if (!transactions[transactionHash]) {
      transactions[transactionHash] = {
        blockNumber: blockNumber,
        blockHash: blockHash,
        transactionHash: transactionHash,
      };
    }

    transactions[transactionHash].awpAmount = ethers.utils.bigNumberify(data);
    transactions[transactionHash].direction = 'sell';
  });

  daiXtransactionsIn.forEach(({ blockNumber, blockHash, data, transactionHash }) => {
    if (!transactions[transactionHash]) {
      return;
    }

    transactions[transactionHash].daiAmount = ethers.utils.bigNumberify(data);
  });

  awpXtransactionsOut.forEach(({ blockNumber, blockHash, data, transactionHash }) => {
    if (!transactions[transactionHash]) {
      return;
    }

    transactions[transactionHash].daiAmount = ethers.utils.bigNumberify(data);
  });



  // get dai value at time of exchange
  // calculate gains
  // store
};

const receiveDBData = (data) => {
  if (data) {
    myAccount.store(data, false);
  }
  myAccount.fetch();
};

const myAccount = store({
  account: undefined,
  data: buildFreshData(),
  error: undefined,
  initialized: false,
  provider: undefined,
  tokens: {},

  // addTransaction: (hash) => {
  // use notify to moitor and then add to transaction array
  // },
  db: () => db.get('myAccount').get(myAccount.account),
  fetch: async () => {
    try {
      await myAccount.store(await fetchData());
    } catch (e) {
      myAccount.error = e;
    }
  },
  init: async (gun, provider, tokens) => {
    db = gun;
    myAccount.provider = provider;
    myAccount.tokens = tokens;
    myAccount.db().once(receiveDBData);
    myAccount.initialized = true;
  },
  store: async (data, storeLocally = true) => {
    myAccount.data = data;
    if (storeLocally) {
      myAccount.db().put(data);
    }
  },
});

export default myAccount;
