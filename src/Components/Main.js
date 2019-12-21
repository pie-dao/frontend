import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Investment from './Pages/Investment';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Investment' component={Investment}></Route>
    </Switch>
  );
}

export default Main;