import { store } from 'react-easy-state';

import exchangeModal from './exchangeModal';

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
  open: () => {
    if (exchangeModal.isActive) {
      exchangeActive = true;
      exchangeModal.close();
    }
    walletModal.isActive = true;
  },
  reset: () => {
    walletModal.error = undefined;
    walletModal.isPending = false;
  },
});

export default walletModal;
