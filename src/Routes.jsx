import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { view } from 'react-easy-state';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Charts from './pages/Charts';
import Discord from './pages/Discord';

const Routes = (props) => (
  <Switch>
    <Route exact path="/">
      <Home {...props} />
    </Route>

    <Route path="/portfolio">
      <Portfolio {...props} />
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
