import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

/**
 * Import all page components here
 */
import Home from './pages/Home';
import InvestmentDetail from './pages/InvestmentDetail';
import Charts from './pages/Charts';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
 
export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/investment" component={InvestmentDetail} />
        <Route path="/charts" component={Charts} />
    </Switch>
  )
}