import { store } from 'react-easy-state';

import eth from './eth';
import exchangeModal from './exchangeModal';
import myAccount from './myAccount';

let exchangeActive = false;

const walletModal = store({
  error: undefined,
  isActive: false,
  isPending: false,
  close: () => {
    walletModal.isActive = false;
    walletModal.reset();

    if (exchangeActive) {
      exchangeActive = false;
      exchangeModal.open();
    }
  },
  disconnect: () => {
    walletModal.close();
    eth.disconnected = true;
    eth.account = undefined;
    eth.provider = undefined;
    eth.signer = undefined;
    myAccount.reset();
    localStorage.setItem('disconnected', true);
  },
  open: () => {
    if (exchangeModal.isActive) {
      exchangeActive = true;
      exchangeModal.close();
    }
    walletModal.isActive = true;
  },
  reconnect: () => {
    eth.disconnected = false;
    localStorage.setItem('disconnected', false);
  },
  reset: () => {
    walletModal.error = undefined;
    walletModal.isPending = false;
  },
});

export default walletModal;
