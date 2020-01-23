import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ethers } from 'ethers';
import { view } from 'react-easy-state';
import { Web3ReactProvider } from '@web3-react/core';

import PasswordGate from './components/PasswordGate';
import Routes from './Routes';
import TopNavigation from './components/TopNavigation';
import WalletModal from './components/WalletModal';

const getLibrary = (provider) => new ethers.providers.Web3Provider(provider);

const instance = createBrowserHistory();

const App = (props) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Router history={instance}>
      <PasswordGate>
        <div className="App">
          <TopNavigation {...props} />
          <Routes {...props} />
          <WalletModal {...props} />
        </div>
      </PasswordGate>
    </Router>
  </Web3ReactProvider>
);

export default view(App);
