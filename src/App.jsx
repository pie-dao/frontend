import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { view } from 'react-easy-state';

import PasswordGate from './components/PasswordGate';
import Routes from './Routes';
import TopNavigation from './components/TopNavigation';

const instance = createBrowserHistory();

const App = (props) => (
  <Router history={instance}>
    <PasswordGate>
      <div className="App">
        <TopNavigation {...props} />
        <Routes {...props} />
      </div>
    </PasswordGate>
  </Router>
);

export default view(App);
