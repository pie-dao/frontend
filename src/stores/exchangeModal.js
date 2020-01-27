import BigNumber from 'bignumber.js';
import { store } from 'react-easy-state';

const exchangeModal = store({
  error: undefined,
  exchangeRate: undefined,
  inputValue: 1,
  isActive: false,
  isPending: false,
  marketRate: undefined,
  minAmount: undefined,
  outputValue: undefined,

  close: () => {
    exchangeModal.isActive = false;
    exchangeModal.reset();
  },
  inputChange: (value) => {
    this.inputValue = BigNumber(value).toFixed();
  },
  open: () => {
    exchangeModal.isActive = true;
  },
  outputChange: (value) => {
    this.outputValue = BigNumber(value).toFixed();
  },
  reset: () => {
    exchangeModal.error = undefined;
    exchangeModal.isPending = false;
  },
  slippage: () => '-',
  sufficientAllowance: (account) => !account,
});

export default exchangeModal;
