import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { view } from 'react-easy-state';

import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import MintRedeem from './pages/MintRedeem';
import Charts from './pages/Charts';
import Discord from './pages/Discord';
import AwpPlusPlus from './pages/AwpPlusPlus';

const Routes = (props) => (
  <Switch>

    <Route exact path="/">
      <Landing {...props} />
    </Route>

    <Route path="/awp-plusplus">
      <AwpPlusPlus {...props} />
    </Route>

    <Route path="/portfolio">
      <Portfolio {...props} />
    </Route>

    <Route path="/mint-redeem">
      <MintRedeem {...props} />
    </Route>

    <Route path="/charts">
      <Charts {...props} />
    </Route>

    <Route path="/discord">
      <Discord {...props} />
    </Route>
  </Switch>
);

export default view(Routes);
