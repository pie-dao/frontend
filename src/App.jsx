import React from 'react';
import provider from 'eth-provider';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { view } from 'react-easy-state';
import { Web3ReactProvider } from '@web3-react/core';

import eth from './stores/eth';
import ExchangeModal from './components/ExchangeModal';
import myAccount from './stores/myAccount';
// import PasswordGate from './components/PasswordGate';
import Routes from './Routes';
import TopNavigation from './components/TopNavigation';
import WalletModal from './components/WalletModal';
import yourInvestment from './stores/yourInvestment';

const instance = createBrowserHistory();

const getLibrary = (newProvider) => {
  newProvider.on('accountsChanged', () => {
    eth.getLibrary(newProvider);
    setTimeout(myAccount.init, 0);
    setTimeout(() => yourInvestment.init(newProvider.selectedAddress), 2000);
  });
  const ethersProvider = eth.getLibrary(newProvider);
  if (ethersProvider) {
    setTimeout(myAccount.init, 0);
  }
  return ethersProvider;
};

window.addEventListener('DOMContentLoaded', () => {
  const existingProvider = provider(['frame', 'injected']);

  if (existingProvider) {
    getLibrary(existingProvider);
  }
});

const App = (props) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Router history={instance}>
      <div className="App">
        <TopNavigation {...props} />
        <Routes {...props} />
        <WalletModal {...props} />
        <ExchangeModal {...props} />
      </div>
    </Router>
  </Web3ReactProvider>
);

export default view(App);
