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

const instance = createBrowserHistory();
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const trackingId = "UA-155747885-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

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
            <PasswordGate>
              <TopNavi/>
              <Routes />
              <WalletModal />
            </PasswordGate>
            </div>
          </Router>
        </ApplicationContext>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}

export default App;
