import React from 'react';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import Web3 from 'web3';
import { Router } from "react-router-dom";
import './App.css';
import TopNavi from './Components/TopNavi';
import Routes from "./routes";
import { createBrowserHistory } from 'history';
import { NetworkContextName } from './constants';
import WalletModal from './Components/WalletModal';
import ApplicationContext from "./contexts/Application";

const instance = createBrowserHistory();
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

export const navigateTo = path => instance.push(path);

function getLibrary(provider, connector) {
  return new Web3(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <ApplicationContext>
          <Router history={instance}>
            <div className="App">
              <TopNavi/>
              <Routes />
              <WalletModal />
            </div>
          </Router>
        </ApplicationContext>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
