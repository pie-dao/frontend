/* eslint consistent-return: 0 */
/* eslint no-use-before-define: 0 */
/* eslint no-restricted-globals: 0 */
/* eslint no-extra-boolean-cast: 0 */
import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { store } from 'react-easy-state';

import eth from './eth';
import myAccount from './myAccount';
import uniswap from '../abi/uniswap';
import yourInvestment from './yourInvestment';

const ETH_TO_TOKEN = 0;
const TOKEN_TO_ETH = 1;
const TOKEN_TO_TOKEN = 2;

// const INPUT = 0;
// const OUTPUT = 1;

const maxSlippage = 0.995;

const getExchangeRate = (
  inputValue,
  inputDecimals,
  outputValue,
  outputDecimals,
  invert = false,
) => {
  try {
    if (
      inputValue
      && (inputDecimals || inputDecimals === 0)
      && outputValue
      && (outputDecimals || outputDecimals === 0)
    ) {
      const factor = ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(18));

      if (invert) {
        return inputValue
          .mul(factor)
          .div(outputValue)
          .mul(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(outputDecimals)))
          .div(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(inputDecimals)));
      }

      return outputValue
        .mul(factor)
        .div(inputValue)
        .mul(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(inputDecimals)))
        .div(ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(outputDecimals)));
    }
  } catch (e) {
    console.error(e);
    exchangeModal.inputError = e.message;
  }
};

const getMarketRate = (
  swapType,
  inputReserveETH,
  inputReserveToken,
  inputDecimals,
  outputReserveETH,
  outputReserveToken,
  outputDecimals,
  invert = false,
) => {
  if (swapType === ETH_TO_TOKEN) {
    return getExchangeRate(outputReserveETH, 18, outputReserveToken, outputDecimals, invert);
  }

  if (swapType === TOKEN_TO_ETH) {
    return getExchangeRate(inputReserveToken, inputDecimals, inputReserveETH, 18, invert);
  }

  if (swapType === TOKEN_TO_TOKEN) {
    const factor = ethers.utils.bigNumberify(10).pow(ethers.utils.bigNumberify(18));
    const firstRate = getExchangeRate(inputReserveToken, inputDecimals, inputReserveETH, 18);
    const secondRate = getExchangeRate(outputReserveETH, 18, outputReserveToken, outputDecimals);
    try {
      return !!(firstRate && secondRate) ? firstRate.mul(secondRate).div(factor) : undefined;
    } catch (e) {
      console.error(e);
    }
  }
};

// this mocks the getInputPrice function, and calculates the required output
const calculateEtherTokenOutputFromInput = (inputAmount, inputReserve, outputReserve) => {
  const inputAmountWithFee = inputAmount.mul(ethers.utils.bigNumberify(997));
  const numerator = inputAmountWithFee.mul(outputReserve);
  const denominator = inputReserve.mul(ethers.utils.bigNumberify(1000)).add(inputAmountWithFee);
  return numerator.div(denominator);
};

// this mocks the getOutputPrice function, and calculates the required input
const calculateEtherTokenInputFromOutput = (outputAmount, inputReserve, outputReserve) => {
  const numerator = inputReserve.mul(outputAmount).mul(ethers.utils.bigNumberify(1000));
  const denominator = outputReserve.sub(outputAmount).mul(ethers.utils.bigNumberify(997));
  return numerator.div(denominator).add(ethers.constants.One);
};

const calcDependentValue = (
  inputReserveEth,
  inputReserveToken,
  outputReserveEth,
  outputReserveToken,
  amount,
  inverse = false,
) => {
  if (inverse) {
    const intermediateValue = calculateEtherTokenInputFromOutput(
      amount,
      outputReserveEth,
      outputReserveToken,
    );
    const calculatedDependentValue = calculateEtherTokenInputFromOutput(
      intermediateValue,
      inputReserveToken,
      inputReserveEth,
    );
    return calculatedDependentValue;
  }

  const intermediateValue = calculateEtherTokenOutputFromInput(
    amount,
    inputReserveToken,
    inputReserveEth,
  );
  const calculatedDependentValue = calculateEtherTokenOutputFromInput(
    intermediateValue,
    outputReserveEth,
    outputReserveToken,
  );
  // ethers.utils.parseEther("1").mul(10**18).div(calculatedDependentValue);
  return calculatedDependentValue;
};

const focusInput = () => {
  setTimeout(() => {
    window.document.getElementById('invest-buy-input').focus();
  }, 0);
};

const focusOutput = () => {
  setTimeout(() => {
    window.document.getElementById('invest-buy-output').focus();
  }, 0);
};

const exchangeModal = store({
  error: undefined,
  exchangeRate: undefined,
  inputError: undefined,
  inputValue: undefined,
  isActive: false,
  isPending: false,
  marketRate: undefined,
  minAmount: undefined,
  outputValue: undefined,

  approve: () => {
    myAccount.approveDai();
  },
  buy: async () => {
    const {
      awp,
      daiX,
      provider,
      signer,
    } = eth;
    const contract = new ethers.Contract(daiX, uniswap, signer);
    const minAmount = ethers.utils.parseEther(exchangeModal.outputValue).mul(995).div(1000);

    const { hash } = eth.notify(await contract.tokenToTokenSwapInput(
      ethers.utils.parseEther(exchangeModal.inputValue),
      minAmount,
      1,
      Math.floor(Date.now() / 1000) + 3600,
      awp,
      { gasLimit: 200000 },
    ));

    provider.on(hash, async () => {
      await myAccount.fetch();
      yourInvestment.init();
    });

    exchangeModal.close();
  },
  close: () => {
    exchangeModal.isActive = false;
    exchangeModal.reset();
  },
  inputChange: (evt) => {
    evt.preventDefault();

    if (!eth.account) {
      alert('Please connect Metamask first');
      return;
    }

    exchangeModal.inputError = undefined;

    const value = BigNumber(evt.target.value);

    if (value.isZero()) {
      return;
    }

    if (value.isNaN()) {
      exchangeModal.inputValue = '';
      exchangeModal.outputValue = '';
      focusInput();
      return;
    }

    exchangeModal.inputValue = value.toFixed();

    const normalizedValue = value.multipliedBy(10 ** 18);

    if (normalizedValue.isGreaterThan(myAccount.data.daiBalance)) {
      exchangeModal.inputError = 'Insufficient balance';
    }

    const etherAmount = ethers.utils.parseEther(evt.target.value);
    const outputValue = calcDependentValue(
      ethers.utils.bigNumberify(myAccount.data.daiXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.daiXTokenBalance),
      ethers.utils.bigNumberify(myAccount.data.awpXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.awpXTokenBalance),
      etherAmount,
    );

    const marketRate = getMarketRate(
      TOKEN_TO_TOKEN,
      ethers.utils.bigNumberify(myAccount.data.daiXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.daiXTokenBalance),
      18,
      ethers.utils.bigNumberify(myAccount.data.awpXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.awpXTokenBalance),
      18,
    );

    exchangeModal.outputValue = BigNumber(outputValue.toString()).dividedBy(10 ** 18).toFixed();
    exchangeModal.exchangeRate = getExchangeRate(etherAmount, 18, outputValue, 18, true);
    exchangeModal.marketRate = BigNumber(marketRate.toString()).dividedBy(10 ** 18).toFixed();

    const outputValueD = BigNumber(exchangeModal.outputValue);
    exchangeModal.minAmount = outputValueD.isGreaterThan(0)
      ? outputValueD.multipliedBy(maxSlippage)
      : undefined;

    focusInput();
  },
  open: () => {
    exchangeModal.isActive = true;
  },
  outputChange: (evt) => {
    evt.preventDefault();

    if (!eth.account) {
      alert('Please connect Metamask first');
      return;
    }

    const value = BigNumber(evt.target.value);

    if (value.isZero()) {
      return;
    }

    if (value.isNaN()) {
      exchangeModal.inputValue = '';
      exchangeModal.outputValue = '';
      focusOutput();
      return;
    }

    exchangeModal.outputValue = value.toFixed();

    const etherAmount = ethers.utils.parseEther(evt.target.value);
    const inputValue = calcDependentValue(
      ethers.utils.bigNumberify(myAccount.data.daiXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.daiXTokenBalance),
      ethers.utils.bigNumberify(myAccount.data.awpXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.awpXTokenBalance),
      etherAmount,
      true,
    );

    const marketRate = getMarketRate(
      TOKEN_TO_TOKEN,
      ethers.utils.bigNumberify(myAccount.data.daiXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.daiXTokenBalance),
      18,
      ethers.utils.bigNumberify(myAccount.data.awpXETHBalance),
      ethers.utils.bigNumberify(myAccount.data.awpXTokenBalance),
      18,
    );

    exchangeModal.inputValue = BigNumber(inputValue.toString()).dividedBy(10 ** 18).toFixed();
    exchangeModal.exchangeRate = getExchangeRate(inputValue, 18, etherAmount, 18, true);
    exchangeModal.marketRate = BigNumber(marketRate.toString()).dividedBy(10 ** 18).toFixed();

    const outputValueD = BigNumber(exchangeModal.outputValue);
    exchangeModal.minAmount = outputValueD.isGreaterThan(0)
      ? outputValueD.multipliedBy(maxSlippage)
      : undefined;

    focusOutput();
  },
  reset: () => {
    exchangeModal.error = undefined;
    exchangeModal.exchangeRate = undefined;
    exchangeModal.inputError = undefined;
    exchangeModal.inputValue = 1;
    exchangeModal.isPending = false;
    exchangeModal.marketRate = undefined;
    exchangeModal.minAmount = undefined;
    exchangeModal.outputValue = undefined;
  },
  slippage: () => {
    const { exchangeRate, marketRate } = exchangeModal;

    if (!exchangeRate) {
      return '-';
    }

    const inversedExchangeRate = (new BigNumber(10 ** 18)).dividedBy(exchangeRate);
    const base = BigNumber(marketRate).div(inversedExchangeRate);
    return base.minus(1).multipliedBy(100).toFixed(2);
  },
  sufficientAllowance: () => {
    const approved = BigNumber(myAccount.data.awpXDaiAllowance);
    const requiredAmount = BigNumber(exchangeModal.inputValue).multipliedBy(10 ** 18);

    if (requiredAmount.isNaN() && approved.isGreaterThan(0)) {
      return true;
    }

    return approved.isGreaterThan(requiredAmount);
  },
});

export default exchangeModal;
