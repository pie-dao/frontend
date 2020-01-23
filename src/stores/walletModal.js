import { store } from 'react-easy-state';

const walletModal = store({
  error: undefined,
  isActive: false,
  isPending: false,
  close: () => {
    walletModal.isActive = false;
    walletModal.reset();
  },
  open: () => {
    walletModal.isActive = true;
  },
  reset: () => {
    walletModal.error = undefined;
    walletModal.isPending = false;
  },
});

export default walletModal;
