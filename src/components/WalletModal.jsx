import React from 'react';

import { InjectedConnector } from '@web3-react/injected-connector';
import { Modal } from 'minimal-react-modal';
import { useWeb3React } from '@web3-react/core';
import { view } from 'react-easy-state';

import eth from '../stores/eth';
import If from './If';
import walletModal from '../stores/walletModal';
import WalletOption from './WalletOption';
import Unless from './Unless';

const WalletModal = () => {
  const { account, networkId } = eth;

  const injected = new InjectedConnector({
    supportedChainIds: [networkId],
  });

  const { activate, deactivate } = useWeb3React();

  const disconnect = () => {
    walletModal.disconnect();
    deactivate();
  };

  const onClick = async () => {
    walletModal.reconnect();
    walletModal.isPending = true;

    await activate(injected, (error) => {
      walletModal.error = error;
      walletModal.disconnect();
      if (error.name === 'UnsupportedChainIdError') {
        walletModal.error.message = 'This chain is not supported. '
          + 'Please connect your wallet to Kovan.';
      }
      walletModal.isPending = false;
    }, false);

    if (!walletModal.error) {
      walletModal.close();
    }
  };

  return (
    <Modal
      className="wallet-modal"
      isActive={walletModal.isActive}
      closeModal={walletModal.close}
      showAnimation={false}
      modalBoxStyle={{
        width: '100%',
        maxWidth: 600,
        padding: '5%',
      }}
    >
      <If condition={account || false}>
        <button type="button" className="btn" onClick={disconnect}>Disconnect</button>
      </If>

      <Unless condition={walletModal.isPending || account || walletModal.error}>
        <WalletOption onClick={onClick} />
      </Unless>

      <If condition={walletModal.isPending}>
        <div className="pending">
          Please log-in to your wallet and connect it to PIE
        </div>
      </If>

      <If condition={walletModal.error}>
        <div className="error">
          <img src="/assets/img/error.jpg" alt="error icon" />
          <div>Error Connecting</div>
          <div>{(walletModal.error || {}).message}</div>
          <button type="button" className="btn" onClick={walletModal.reset}>Go Back</button>
        </div>
      </If>
    </Modal>
  );
};

export default view(WalletModal);
