import React from 'react';
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core';
import Web3 from 'web3';
import { Router } from "react-router-dom";
import './App.css';
import TopNavi from './Components/TopNavi';
import PasswordGate from "./Components/PasswordGate";
import Routes from "./routes";
import { createBrowserHistory } from 'history';
import { NetworkContextName } from './constants';
import WalletModal from './Components/WalletModal';
import ApplicationContext from "./contexts/Application";
import ReactGA from "react-ga";
import AllowanceContext from "./contexts/Allowances";
import BalancesContext from "./contexts/Balances";
import { ethers } from 'ethers';

const instance = createBrowserHistory();
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const trackingId = "UA-155747885-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

export const navigateTo = path => instance.push(path);

function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 10000
  return library
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <ApplicationContext>
          <AllowanceContext>
            <BalancesContext>
              <Router history={instance}>
              <PasswordGate>
                <div className="App">
                  <TopNavi/>
                  <Routes />
                  <WalletModal />
                </div>
              </PasswordGate>
              </Router>
            </BalancesContext>
          </AllowanceContext>
        </ApplicationContext>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
