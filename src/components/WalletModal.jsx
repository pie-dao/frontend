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

    try {
      await activate(injected, walletModal.onError);
    } catch (e) {
      walletModal.onError(e);
    }

    if (!eth.error) {
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

      <Unless condition={walletModal.isPending || account || eth.error}>
        <WalletOption onClick={onClick} />
      </Unless>

      <If condition={walletModal.isPending}>
        <div className="pending">
          Please log-in to your wallet and connect it to PIE
        </div>
      </If>

      <If condition={eth.error}>
        <div className="error">
          <img src="/assets/img/error.jpg" alt="error icon" />
          <div>Error Connecting</div>
          <div>{eth.error}</div>
          <button type="button" className="btn" onClick={walletModal.reset}>Go Back</button>
        </div>
      </If>
    </Modal>
  );
};

export default view(WalletModal);
