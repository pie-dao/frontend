import React from 'react';
import './App.css';
import TopNavi from './Components/TopNavi';
import PasswordGate from './Components/PasswordGate';
import Routes from "./routes";
import { Router } from "react-router-dom";

import { createBrowserHistory } from 'history';

const instance = createBrowserHistory();

export const navigateTo = path => instance.push(path);

function App() {
  return (
    <Router history={instance}>
      <div className="App">
        <PasswordGate>
          <TopNavi/>
          <Routes />
        </PasswordGate>
      </div>
    </Router>
  );
}

export default App;
