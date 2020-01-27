import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { view } from 'react-easy-state';
import { Web3ReactProvider } from '@web3-react/core';

import eth from './stores/eth';
import ExchangeModal from './components/ExchangeModal';
import myAccount from './stores/myAccount';
import PasswordGate from './components/PasswordGate';
import Routes from './Routes';
import TopNavigation from './components/TopNavigation';
import WalletModal from './components/WalletModal';

const instance = createBrowserHistory();

const getLibrary = (provider) => {
  const ethersProvider = eth.getLibrary(provider);
  setTimeout(myAccount.init, 0);
  return ethersProvider;
};

const App = (props) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Router history={instance}>
      <PasswordGate>
        <div className="App">
          <TopNavigation {...props} />
          <Routes {...props} />
          <WalletModal {...props} />
          <ExchangeModal {...props} />
        </div>
      </PasswordGate>
    </Router>
  </Web3ReactProvider>
);

export default view(App);
