import React from 'react';
import './App.css';
import TopNavi from './components/partials/TopNavi';
import Routes from "./routes";
import { Router } from "react-router-dom";

import { createBrowserHistory } from 'history';

const instance = createBrowserHistory();

export const navigateTo = path => instance.push(path);

function App() {
  return (
    <Router history={instance}>
      <div className="App">
        <TopNavi/>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
